(ns casa-financas.events
  (:require [re-frame.core :as rf]
            [casa-financas.db :as db]
            [casa-financas.supabase :as supa]
            [casa-financas.utils :as u]))

;; -- Init --
(rf/reg-event-fx
 :initialize-db
 (fn [_ _]
   {:db       db/default-db
    :dispatch [:verificar-sessao]}))

;; -- Auth --
(rf/reg-event-fx
 :verificar-sessao
 (fn [{:keys [db]} _]
   {:db db
    :supabase/sessao nil}))

(rf/reg-event-fx
 :login
 (fn [{:keys [db]} [_ email senha]]
   {:db             (assoc db :loading true :erro nil)
    :supabase/login {:email email :senha senha}}))

(rf/reg-event-fx
 :logout
 (fn [{:keys [db]} _]
   {:db              (assoc db :loading true)
    :supabase/logout nil}))

(rf/reg-event-fx
 :usuario-logado
 (fn [{:keys [db]} [_ usuario]]
   {:db       (assoc db :usuario-atual usuario :loading false)
    :dispatch [:carregar-dados]}))

(rf/reg-event-db
 :usuario-deslogado
 (fn [db _]
   (assoc db :usuario-atual nil :loading false)))

(rf/reg-event-fx
 :carregar-dados
 (fn [{:keys [db]} _]
   (let [mes (:mes-atual db)]
     {:db                       (assoc db :loading true)
      :supabase/buscar-despesas {:ano (:ano mes) :mes (:mes mes)}
      :supabase/buscar-entradas {:ano (:ano mes) :mes (:mes mes)}
      :supabase/buscar-templates nil
      :supabase/buscar-historico nil
      :supabase/buscar-configuracoes nil
      :supabase/buscar-categorias nil})))

;; -- Navegação --
(rf/reg-event-db
 :set-aba
 (fn [db [_ aba]]
   (assoc db :aba-ativa aba)))

(rf/reg-event-fx
 :mes-anterior
 (fn [{:keys [db]} _]
   (let [{:keys [ano mes]} (:mes-atual db)
         novo-mes (if (= mes 1) 12 (dec mes))
         novo-ano (if (= mes 1) (dec ano) ano)]
     {:db       (assoc db :mes-atual {:ano novo-ano :mes novo-mes})
      :dispatch [:carregar-dados]})))

(rf/reg-event-fx
 :mes-proximo
 (fn [{:keys [db]} _]
   (let [{:keys [ano mes]} (:mes-atual db)
         novo-mes (if (= mes 12) 1 (inc mes))
         novo-ano (if (= mes 12) (inc ano) ano)]
     {:db       (assoc db :mes-atual {:ano novo-ano :mes novo-mes})
      :dispatch [:carregar-dados]})))

;; -- Modal --
(rf/reg-event-db
 :abrir-modal
 (fn [db [_ tipo dados]]
   (assoc db :modal {:tipo tipo :dados dados})))

(rf/reg-event-db
 :fechar-modal
 (fn [db _]
   (assoc db :modal nil)))

;; -- Dados --
(rf/reg-event-db
 :set-despesas
 (fn [db [_ despesas]]
   (assoc db :despesas despesas :loading false)))

(rf/reg-event-db
 :set-entradas
 (fn [db [_ entradas]]
   (assoc db :entradas entradas)))

(rf/reg-event-db
 :set-templates
 (fn [db [_ templates]]
   (assoc db :templates templates)))

(rf/reg-event-db
 :set-historico
 (fn [db [_ despesas entradas]]
   (assoc db
          :despesas-historico despesas
          :entradas-historico entradas)))


(rf/reg-event-db
 :set-erro
 (fn [db [_ erro]]
   (assoc db :erro erro)))

;; -- Lógica entradas automáticas --
(defn gerar-entradas-bolso [despesa mes]
  (let [pagadores (:pagadores despesa)
        eh-bolso? (and (seq pagadores)
                       (not (some #(= % "conjunta") pagadores)))]
    (when eh-bolso?
      (let [valor-por-pagador (/ (:valor despesa) (count pagadores))
            data-str (let [m (:mes mes)
                           a (:ano mes)
                           d (:dia_do_mes despesa)]
                       (str a "-"
                            (when (< m 10) "0") m "-"
                            (when (< d 10) "0") d))]
        (mapv (fn [pid]
                {:id          (str (random-uuid))
                 :pessoa_id   pid
                 :valor       valor-por-pagador
                 :data        data-str
                 :descricao   (str "Pgto: " (:descricao despesa))
                 :auto        true
                 :despesa_ref (:id despesa)})
              pagadores)))))

(defn remover-entradas-auto [db despesa-id]
  (update db :entradas
          (fn [es]
            (vec (remove #(= (:despesa_ref %) despesa-id) es)))))

;; -- Despesas --
(rf/reg-event-fx
 :marcar-pago
 (fn [{:keys [db]} [_ id]]
   (let [despesa       (first (filter #(= (:id %) id) (:despesas db)))
         mes           (:mes-atual db)
         entradas-auto (when despesa
                         (gerar-entradas-bolso
                          (assoc despesa :pago true) mes))
         novo-db       (update db :despesas
                               (fn [ds]
                                 (mapv (fn [d]
                                         (if (= (:id d) id)
                                           (assoc d :pago true
                                                  :data_pagamento (.toISOString (js/Date.)))
                                           d))
                                       ds)))]
     (merge
      {:db                  novo-db
       :supabase/marcar-pago id}
      (when (seq entradas-auto)
        {:dispatch-n (mapv (fn [e] [:salvar-entrada e]) entradas-auto)})))))

(rf/reg-event-fx
 :desmarcar-pago
 (fn [{:keys [db]} [_ id]]
   (let [novo-db (-> db
                     (update :despesas
                             (fn [ds]
                               (mapv (fn [d]
                                       (if (= (:id d) id)
                                         (assoc d :pago false :data_pagamento nil)
                                         d))
                                     ds)))
                     (remover-entradas-auto id))]
     {:db                    novo-db
      :supabase/desmarcar-pago id
      :supabase/deletar-entradas-auto id})))

(rf/reg-event-fx
 :salvar-despesa
 (fn [{:keys [db]} [_ despesa]]
   (let [existe?       (some #(= (:id %) (:id despesa)) (:despesas db))
         novo-db       (update db :despesas
                               (fn [ds]
                                 (if existe?
                                   (mapv (fn [d] (if (= (:id d) (:id despesa)) despesa d)) ds)
                                   (conj (vec ds) despesa))))
         mes           (:mes-atual db)
         entradas-auto (when (:pago despesa)
                         (gerar-entradas-bolso despesa mes))]
     (merge
      {:db                      (assoc novo-db :modal nil)
       :supabase/salvar-despesa despesa}
      (when (seq entradas-auto)
        {:dispatch-n (mapv (fn [e] [:salvar-entrada e]) entradas-auto)})))))

(rf/reg-event-fx
 :deletar-despesa
 (fn [{:keys [db]} [_ id]]
   {:db                       (-> db
                                  (update :despesas
                                          (fn [ds] (vec (remove #(= (:id %) id) ds))))
                                  (remover-entradas-auto id))
    :supabase/deletar-despesa id
    :supabase/deletar-entradas-auto id}))

;; -- Entradas --
(rf/reg-event-fx
 :salvar-entrada
 (fn [{:keys [db]} [_ entrada]]
   (let [existe? (some #(= (:id %) (:id entrada)) (:entradas db))
         novo-db (update db :entradas
                         (fn [es]
                           (if existe?
                             (mapv (fn [e] (if (= (:id e) (:id entrada)) entrada e)) es)
                             (conj (vec es) entrada))))]
     {:db                     (assoc novo-db :modal nil)
      :supabase/salvar-entrada entrada})))

(rf/reg-event-fx
 :deletar-entrada
 (fn [{:keys [db]} [_ id]]
   {:db                      (update db :entradas
                                     (fn [es] (vec (remove #(= (:id %) id) es))))
    :supabase/deletar-entrada id}))

;; -- Templates --
(rf/reg-event-fx
 :salvar-template
 (fn [{:keys [db]} [_ template]]
   (let [existe? (some #(= (:id %) (:id template)) (:templates db))
         novo-db (update db :templates
                         (fn [ts]
                           (if existe?
                             (mapv (fn [t] (if (= (:id t) (:id template)) template t)) ts)
                             (conj (vec ts) template))))]
     {:db                      (assoc novo-db :modal nil)
      :supabase/salvar-template template})))

(rf/reg-event-fx
 :deletar-template
 (fn [{:keys [db]} [_ id]]
   {:db                       (update db :templates
                                      (fn [ts] (vec (remove #(= (:id %) id) ts))))
    :supabase/deletar-template id}))

(rf/reg-event-fx
 :toggle-template
 (fn [{:keys [db]} [_ id]]
   (let [novo-db  (update db :templates
                          (fn [ts]
                            (mapv (fn [t]
                                    (if (= (:id t) id) (update t :ativo not) t))
                                  ts)))
         template (first (filter #(= (:id %) id) (:templates novo-db)))]
     {:db                       novo-db
      :supabase/toggle-template {:id id :ativo (:ativo template)}})))

(rf/reg-event-fx
 :importar-templates
 (fn [{:keys [db]} _]
   (let [templates-ativos (filter :ativo (:templates db))
         mes              (:mes-atual db)
         ids-existentes   (set (map :origem_template_id (:despesas db)))
         novas-despesas   (vec (for [t templates-ativos
                                     :when (not (contains? ids-existentes (:id t)))]
                                 {:id                 (str (random-uuid))
                                  :origem_template_id (:id t)
                                  :descricao          (:descricao t)
                                  :valor              (:valor_padrao t)
                                  :dia_do_mes         (or (:dia_padrao t) 1)
                                  :forma_pagamento    (:forma_pagamento_padrao t)
                                  :pagadores          (or (:pagador_padrao t) ["conjunta"])
                                  :divisao            (:divisao t)
                                  :pago               false
                                  :ano                (:ano mes)
                                  :mes                (:mes mes)}))]
     {:db         (update db :despesas into novas-despesas)
      :dispatch-n (mapv (fn [d] [:salvar-despesa-silencioso d]) novas-despesas)})))

(rf/reg-event-fx
 :salvar-despesa-silencioso
 (fn [_ [_ despesa]]
   {:supabase/salvar-despesa despesa}))

;; -- Effects Supabase --
(rf/reg-fx
 :supabase/sessao
 (fn [_]
   (supa/sessao-atual
    (fn [res]
      (if-let [usuario (get-in res [:data :session :user])]
        (rf/dispatch [:usuario-logado usuario])
        (rf/dispatch [:usuario-deslogado]))))))

(rf/reg-fx
 :supabase/login
 (fn [{:keys [email senha]}]
   (supa/login! email senha
                (fn [res]
                  (if (:error res)
                    (rf/dispatch [:set-erro "Email ou senha incorretos"])
                    (rf/dispatch [:usuario-logado (get-in res [:data :user])]))))))

(rf/reg-fx
 :supabase/logout
 (fn [_]
   (supa/logout!
    (fn [_]
      (rf/dispatch [:usuario-deslogado])))))

(rf/reg-fx
 :supabase/buscar-despesas
 (fn [{:keys [ano mes]}]
   (supa/buscar-despesas! ano mes
                          (fn [despesas]
                            (rf/dispatch [:set-despesas despesas])))))

(rf/reg-fx
 :supabase/buscar-entradas
 (fn [{:keys [ano mes]}]
   (supa/buscar-entradas! ano mes
                          (fn [entradas]
                            (rf/dispatch [:set-entradas entradas])))))

(rf/reg-fx
 :supabase/buscar-templates
 (fn [_]
   (supa/buscar-templates!
    (fn [templates]
      (rf/dispatch [:set-templates templates])))))

(rf/reg-fx
 :supabase/salvar-despesa
 (fn [despesa]
   (supa/salvar-despesa! despesa
                         (fn [err]
                           (when err
                             (rf/dispatch [:set-erro "Erro ao salvar despesa"]))))))

(rf/reg-fx
 :supabase/marcar-pago
 (fn [id]
   (supa/marcar-pago! id
                      (fn [err]
                        (when err
                          (rf/dispatch [:set-erro "Erro ao marcar como pago"]))))))

(rf/reg-fx
 :supabase/desmarcar-pago
 (fn [id]
   (supa/desmarcar-pago! id
                         (fn [err]
                           (when err
                             (rf/dispatch [:set-erro "Erro ao desmarcar pagamento"]))))))

(rf/reg-fx
 :supabase/salvar-entrada
 (fn [entrada]
   (supa/salvar-entrada! entrada
                         (fn [err]
                           (when err
                             (rf/dispatch [:set-erro "Erro ao salvar entrada"]))))))

(rf/reg-fx
 :supabase/deletar-entrada
 (fn [id]
   (supa/deletar! "entradas" id)))

(rf/reg-fx
 :supabase/deletar-entradas-auto
 (fn [despesa-id]
   (supa/deletar-entradas-auto! despesa-id)))

(rf/reg-fx
 :supabase/salvar-template
 (fn [template]
   (supa/salvar-template! template
                          (fn [err]
                            (when err
                              (rf/dispatch [:set-erro "Erro ao salvar template"]))))))

(rf/reg-fx
 :supabase/toggle-template
 (fn [{:keys [id ativo]}]
   (supa/toggle-template! id ativo
                          (fn [err]
                            (when err
                              (rf/dispatch [:set-erro "Erro ao atualizar template"]))))))

(rf/reg-fx
 :supabase/deletar-despesa
 (fn [id]
   (supa/deletar! "despesa_mensal" id)))

(rf/reg-fx
 :supabase/deletar-template
 (fn [id]
   (supa/deletar! "template_despesa" id)))

(rf/reg-fx
 :supabase/buscar-historico
 (fn [_]
   (supa/buscar-todas-despesas!
    (fn [despesas]
      (supa/buscar-todas-entradas!
       (fn [entradas]
         (rf/dispatch [:set-historico despesas entradas])))))))

(rf/reg-fx
 :dispatch-n
 (fn [events]
   (doseq [e events]
     (rf/dispatch e))))

(rf/reg-fx
 :supabase/buscar-configuracoes
 (fn [_]
   (supa/buscar-configuracoes!
    (fn [configs]
      (rf/dispatch [:set-configuracoes configs])))))

(rf/reg-event-db
 :set-configuracoes
 (fn [db [_ configs]]
   (u/reset-cores! configs)
   (assoc db :configuracoes configs)))

(rf/reg-event-fx
 :salvar-cor-pessoa
 (fn [{:keys [db]} [_ pessoa-id cor]]
   (let [chave (str "cor_" pessoa-id)]
     (swap! u/cores-pessoas assoc chave cor)
     {:db (assoc-in db [:configuracoes chave] cor)
      :supabase/salvar-configuracao {:chave chave :valor cor}})))

(rf/reg-fx
 :supabase/salvar-configuracao
 (fn [{:keys [chave valor]}]
   (supa/salvar-configuracao! chave valor
                              (fn [] (js/console.log "Configuração salva")))))

(rf/reg-fx
 :supabase/buscar-categorias
 (fn [_]
   (supa/buscar-categorias!
    (fn [cats]
      (rf/dispatch [:set-categorias cats])))))

(rf/reg-event-db
 :set-categorias
 (fn [db [_ cats]]
   (assoc db :categorias cats)))

(rf/reg-event-fx
 :salvar-categoria
 (fn [{:keys [db]} [_ categoria]]
   {:supabase/salvar-categoria categoria}))

(rf/reg-fx
 :supabase/salvar-categoria
 (fn [categoria]
   (supa/salvar-categoria! categoria
                           (fn [] (rf/dispatch [:carregar-dados])))))