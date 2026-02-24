(ns casa-financas.supabase
  (:require ["@supabase/supabase-js" :as sb]
            [casa-financas.config :as cfg]))

(defonce client
  (sb/createClient cfg/supabase-url cfg/supabase-anon-key))

;; -- Auth --
(defn login! [email senha callback]
  (-> (.signInWithPassword (.-auth client)
                           #js {:email email :password senha})
      (.then #(callback (js->clj % :keywordize-keys true)))
      (.catch #(callback {:error %}))))

(defn logout! [callback]
  (-> (.signOut (.-auth client))
      (.then #(callback nil))
      (.catch #(callback {:error %}))))

(defn sessao-atual [callback]
  (-> (.getSession (.-auth client))
      (.then #(callback (js->clj % :keywordize-keys true)))))

(defn on-auth-change [callback]
  (.onAuthStateChange (.-auth client)
                      (fn [event session]
                        (callback event (js->clj session :keywordize-keys true)))))

;; -- Despesas --
(defn buscar-despesas! [ano mes callback]
  (-> (.from client "despesa_mensal")
      (.select "*")
      (.eq "ano" ano)
      (.eq "mes" mes)
      (.then (fn [res]
               (let [data (js->clj (.-data res) :keywordize-keys true)]
                 (callback (mapv (fn [d]
                                   (assoc d :divisao
                                          {:andre    (:divisao_andre d)
                                           :bianca   (:divisao_bianca d)
                                           :fernanda (:divisao_fernanda d)
                                           :bruna    (:divisao_bruna d)}))
                                 data)))))
      (.catch #(js/console.error "Erro ao buscar despesas" %))))

(defn salvar-despesa! [despesa callback]
  (let [row #js {:id                 (:id despesa)
                 :ano                (:ano despesa)
                 :mes                (:mes despesa)
                 :descricao          (:descricao despesa)
                 :valor              (:valor despesa)
                 :dia_do_mes         (:dia_do_mes despesa)
                 :forma_pagamento    (:forma_pagamento despesa)
                 :pagadores          (clj->js (:pagadores despesa))
                 :divisao_andre      (get-in despesa [:divisao :andre] 0)
                 :divisao_bianca     (get-in despesa [:divisao :bianca] 0)
                 :divisao_fernanda   (get-in despesa [:divisao :fernanda] 0)
                 :divisao_bruna      (get-in despesa [:divisao :bruna] 0)
                 :pago               (:pago despesa)
                 :data_pagamento     (:data_pagamento despesa)
                 :origem_template_id (:origem_template_id despesa)
                 :categoria_id       (:categoria_id despesa)
                 :categoria_nome     (:categoria_nome despesa)}]
    (-> (.from client "despesa_mensal")
        (.upsert row)
        (.then #(callback nil))
        (.catch #(callback {:error %})))))

(defn marcar-pago! [id callback]
  (-> (.from client "despesa_mensal")
      (.update #js {:pago true :data_pagamento (.toISOString (js/Date.))})
      (.eq "id" id)
      (.then #(callback nil))
      (.catch #(callback {:error %}))))

;; -- Entradas --
(defn buscar-entradas! [ano mes callback]
  (let [inicio    (str ano "-" (when (< mes 10) "0") mes "-01")
        prox-mes  (if (= mes 12) 1 (inc mes))
        prox-ano  (if (= mes 12) (inc ano) ano)
        fim       (str prox-ano "-" (when (< prox-mes 10) "0") prox-mes "-01")]
    (-> (.from client "entradas")
        (.select "*")
        (.gte "data" inicio)
        (.lt "data" fim)
        (.then (fn [res]
                 (let [data (js->clj (.-data res) :keywordize-keys true)]
                   (callback (mapv (fn [e]
                                     (update e :valor #(js/parseFloat %)))
                                   data)))))
        (.catch #(js/console.error "Erro ao buscar entradas" %)))))

(defn salvar-entrada! [entrada callback]
  (let [row #js {:id        (:id entrada)
                 :pessoa_id (:pessoa_id entrada)
                 :valor     (:valor entrada)
                 :data      (:data entrada)
                 :descricao (:descricao entrada)}]
    (-> (.from client "entradas")
        (.upsert row)
        (.then #(callback nil))
        (.catch #(callback {:error %})))))

;; -- Templates --
(defn buscar-templates! [callback]
  (-> (.from client "template_despesa")
      (.select "*")
      (.then (fn [res]
               (let [data (js->clj (.-data res) :keywordize-keys true)]
                 (callback (mapv (fn [t]
                                   (assoc t :divisao
                                          {:andre    (:divisao_andre t)
                                           :bianca   (:divisao_bianca t)
                                           :fernanda (:divisao_fernanda t)
                                           :bruna    (:divisao_bruna t)}))
                                 data)))))
      (.catch #(js/console.error "Erro ao buscar templates" %))))

(defn salvar-template! [template callback]
  (let [row #js {:id                      (:id template)
                 :descricao               (:descricao template)
                 :valor_padrao            (:valor_padrao template)
                 :forma_pagamento_padrao  (:forma_pagamento_padrao template)
                 :pagador_padrao          (clj->js (:pagador_padrao template))
                 :divisao_andre           (get-in template [:divisao :andre] 0)
                 :divisao_bianca          (get-in template [:divisao :bianca] 0)
                 :divisao_fernanda        (get-in template [:divisao :fernanda] 0)
                 :divisao_bruna           (get-in template [:divisao :bruna] 0)
                 :ativo                   (:ativo template)
                 :categoria_id            (:categoria_id template)
                 :categoria_nome          (:categoria_nome template)}]
    (-> (.from client "template_despesa")
        (.upsert row)
        (.then #(callback nil))
        (.catch #(callback {:error %})))))

(defn toggle-template! [id ativo callback]
  (-> (.from client "template_despesa")
      (.update #js {:ativo ativo})
      (.eq "id" id)
      (.then #(callback nil))
      (.catch #(callback {:error %}))))

(defn deletar! [tabela id]
  (-> (.from client tabela)
      (.delete)
      (.eq "id" id)
      (.then #(js/console.log "Deletado" tabela id))
      (.catch #(js/console.error "Erro ao deletar" tabela id %))))

(defn desmarcar-pago! [id callback]
  (-> (.from client "despesa_mensal")
      (.update #js {:pago false :data_pagamento nil})
      (.eq "id" id)
      (.then #(callback nil))
      (.catch #(callback {:error %}))))

(defn deletar-entradas-auto! [despesa-id]
  (-> (.from client "entradas")
      (.delete)
      (.eq "despesa_ref" despesa-id)
      (.then #(js/console.log "Entradas auto deletadas" despesa-id))
      (.catch #(js/console.error "Erro ao deletar entradas auto" %))))

(defn buscar-todas-despesas! [callback]
  (-> (.from client "despesa_mensal")
      (.select "*")
      (.then (fn [res]
               (let [data (js->clj (.-data res) :keywordize-keys true)]
                 (callback (mapv (fn [d]
                                   (assoc d :divisao
                                          {:andre    (:divisao_andre d)
                                           :bianca   (:divisao_bianca d)
                                           :fernanda (:divisao_fernanda d)
                                           :bruna    (:divisao_bruna d)}))
                                 data)))))
      (.catch #(js/console.error "Erro ao buscar historico despesas" %))))

(defn buscar-todas-entradas! [callback]
  (-> (.from client "entradas")
      (.select "*")
      (.then (fn [res]
               (let [data (js->clj (.-data res) :keywordize-keys true)]
                 (callback (mapv (fn [e]
                                   (update e :valor #(js/parseFloat %)))
                                 data)))))
      (.catch #(js/console.error "Erro ao buscar historico entradas" %))))

(defn buscar-configuracoes! [callback]
  (-> (.from client "configuracoes")
      (.select "*")
      (.then (fn [res]
               (let [data (js->clj (.-data res) :keywordize-keys true)]
                 (callback (reduce (fn [acc item]
                                     (assoc acc (:chave item) (:valor item)))
                                   {}
                                   data)))))
      (.catch #(js/console.error "Erro ao buscar configuracoes" %))))

(defn salvar-configuracao! [chave valor callback]
  (-> (.from client "configuracoes")
      (.upsert #js {:chave chave :valor valor})
      (.then #(callback))
      (.catch #(js/console.error "Erro ao salvar configuracao" %))))


(defn buscar-categorias! [callback]
  (-> (.from client "categorias")
      (.select "*")
      (.order "ordem")
      (.then (fn [res]
               (callback (js->clj (.-data res) :keywordize-keys true))))
      (.catch #(js/console.error "Erro ao buscar categorias" %))))

(defn salvar-categoria! [categoria callback]
  (-> (.from client "categorias")
      (.insert #js {:nome  (:nome categoria)
                    :emoji (:emoji categoria)
                    :ordem (:ordem categoria)})
      (.then #(callback))
      (.catch #(js/console.error "Erro ao salvar categoria" %))))