(ns casa-financas.views.modais
  (:require [re-frame.core :as rf]
            [reagent.core :as r]
            [casa-financas.utils :as u]
            [casa-financas.components.comum :as c]))

(def pessoas-ids ["andre" "bianca" "fernanda" "bruna" "conjunta"])
(def pessoas-ids-sem-conjunta ["andre" "bianca" "fernanda" "bruna"])

;; -- Divisão com presets + campos --
(def presets-divisao
  [{:label "25·25·25·25" :divisao {:andre 25 :bianca 25 :fernanda 25 :bruna 25}}
   {:label "30·30·20·20" :divisao {:andre 30 :bianca 30 :fernanda 20 :bruna 20}}])

(defn seletor-divisao [divisao on-change]
  [:div {:class "space-y-2"}
   ;; Botões preset
   [:div {:class "flex gap-2"}
    (for [p presets-divisao]
      ^{:key (:label p)}
      [:button {:class    (str "flex-1 py-2 rounded-xl text-xs font-medium border-2 transition-colors "
                               (if (= (:divisao p) divisao)
                                 "bg-blue-500 text-white border-blue-500"
                                 "text-gray-500 border-gray-200"))
                :on-click #(on-change (:divisao p))}
       (:label p)])
    [:button {:class    (str "flex-1 py-2 rounded-xl text-xs font-medium border-2 transition-colors "
                             (if (not (some #(= (:divisao %) divisao) presets-divisao))
                               "bg-blue-500 text-white border-blue-500"
                               "text-gray-500 border-gray-200"))
              :on-click #(on-change divisao)}
     "Manual"]]
   ;; Campos sempre visíveis
   [:div {:class "grid grid-cols-4 gap-1.5"}
    (for [pid pessoas-ids-sem-conjunta]
      (let [k   (keyword pid)
            pct (get divisao k 0)
            cor (u/pessoa-cor pid)]
        ^{:key pid}
        [:div {:class "flex flex-col items-center gap-1"}
         [:span {:class "text-xs font-medium" :style {:color cor}}
          (u/pessoa-inicial pid)]
         [:input {:type      "number"
                  :inputMode "numeric"
                  :pattern   "[0-9]*"
                  :min       0
                  :max       100
                  :class     "w-full border-2 rounded-lg px-1 py-1.5 text-sm text-center focus:outline-none"
                  :style     {:border-color cor}
                  :value     pct
                  :on-change #(on-change (assoc divisao k (int (.. % -target -value))))}]
         [:span {:class "text-xs text-gray-400"} "%"]]))]
   ;; Aviso soma
   (let [soma (u/soma-divisao divisao)]
     (when (not= soma 100)
       [:p {:class "text-xs text-red-500 font-medium text-center"}
        (str "⚠ Soma: " soma "% (precisa ser 100%)")]))
   ;; Preview
   [c/barra-divisao divisao]])

;; -- Seletor de data --
(defn seletor-data [valor on-change]
  [:input {:type      "date"
           :class     "w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white"
           :value     valor
           :on-change #(on-change (.. % -target -value))}])

;; -- Seletor de dia (converte para date input) --
(defn dia-para-date [dia mes ano]
  (str ano "-" (when (< mes 10) "0") mes "-" (when (< dia 10) "0") dia))

(defn date-para-dia [date-str]
  (when (and date-str (not= date-str ""))
    (int (last (clojure.string/split date-str #"-")))))

;; -- Modal escolha nova ação --
(defn modal-nova-acao []
  [:div {:class    "fixed inset-0 z-50"
         :on-click #(when (= (.-target %) (.-currentTarget %))
                      (rf/dispatch [:fechar-modal]))}
   [:div {:class "absolute bottom-24 right-4 flex flex-col gap-2 items-end"}
    [:button {:class    "flex items-center gap-2 bg-white shadow-lg rounded-2xl px-4 py-3 text-sm font-semibold text-gray-700 active:bg-gray-50 border border-gray-100"
              :on-click #(rf/dispatch [:abrir-modal :nova-despesa {}])}
     [:span "💸"] "Nova Despesa"]
    [:button {:class    "flex items-center gap-2 bg-white shadow-lg rounded-2xl px-4 py-3 text-sm font-semibold text-gray-700 active:bg-gray-50 border border-gray-100"
              :on-click #(rf/dispatch [:abrir-modal :nova-entrada {}])}
     [:span "💰"] "Nova Entrada"]
    [:button {:class    "flex items-center gap-2 bg-white shadow-lg rounded-2xl px-4 py-3 text-sm font-semibold text-gray-700 active:bg-gray-50 border border-gray-100"
              :on-click #(rf/dispatch [:abrir-modal :novo-template {}])}
     [:span "📋"] "Novo Template"]]])

;; -- Seletor quem pagou compacto --
(defn seletor-pagadores [pagadores on-change]
  [:div {:class "flex gap-1.5 flex-wrap"}
   (for [pid pessoas-ids]
     ^{:key pid}
     (let [selecionado (some #(= % pid) pagadores)
           cor         (u/pessoa-cor pid)
           label       (if (= pid "conjunta") "Casa" (u/pessoa-inicial pid))]
       [:button {:class "w-9 h-9 rounded-full text-xs font-bold border-2 transition-colors flex items-center justify-center"
                 :style (if selecionado
                          {:background-color cor :border-color cor :color "white"}
                          {:border-color "#E5E7EB" :color "#9CA3AF"})
                 :on-click #(on-change
                             (let [ps (vec pagadores)]
                               (if selecionado
                                 (vec (remove (fn [p] (= p pid)) ps))
                                 (conj ps pid))))}
        label]))])

;; -- Modal despesa --
(defn modal-despesa [dados]
  (let [mes-atual @(rf/subscribe [:mes-atual])
        aberto-cat?  (r/atom false)
        data-default (dia-para-date (u/dia-hoje) (:mes mes-atual) (:ano mes-atual))
        form (r/atom (merge {:descricao       ""
                              :valor           ""
                              :data_input      data-default
                              :dia_do_mes      (u/dia-hoje)
                              :forma_pagamento "pix"
                              :pagadores       ["conjunta"]
                              :divisao         (u/divisao-padrao)
                              :pago            false
                              :categoria_id    nil
                              :categoria_nome  nil}
                             (when (:dia_do_mes dados)
                               {:data_input (dia-para-date
                                             (:dia_do_mes dados)
                                             (or (:mes_compra dados) (:mes mes-atual))
                                             (or (:ano_compra dados) (:ano mes-atual)))})
                             dados))]
    (fn []
      (let [soma-ok?   (= (u/soma-divisao (:divisao @form)) 100)
            categorias @(rf/subscribe [:categorias])
            cat-atual  (first (filter #(= (:id %) (:categoria_id @form)) categorias))]
        [c/modal-wrapper
         (if (:id @form) "Editar Despesa" "Nova Despesa")
         [:div {:class "space-y-3"}

          ;; Descrição + Categoria
          [:div {:class "flex gap-2"}
           [:input {:type        "text"
                    :class       "flex-1 border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                    :placeholder "Descrição (ex: Mercado, Aluguel...)"
                    :value       (:descricao @form)
                    :on-change   #(swap! form assoc :descricao (.. % -target -value))}]
           [:div {:class "relative flex-shrink-0"}
            [:button {:class    "h-full px-3 border border-gray-200 rounded-xl text-sm transition-colors bg-white"
                      :on-click #(swap! aberto-cat? not)}
             (if cat-atual (:emoji cat-atual) "📂")]
            (when @aberto-cat?
              [:div {:class "absolute right-0 top-12 bg-white rounded-2xl shadow-lg border border-gray-100 p-2 z-50 w-52"}
               [:button {:class    "w-full text-left px-3 py-2 rounded-xl text-xs text-gray-500"
                         :on-click #(do (swap! form assoc :categoria_id nil :categoria_nome nil)
                                        (reset! aberto-cat? false))}
                "— Sem categoria"]
               (for [cat categorias]
                 ^{:key (:id cat)}
                 [:button {:class    (str "w-full text-left px-3 py-2 rounded-xl text-xs "
                                          (if (= (:id cat) (:categoria_id @form))
                                            "bg-blue-50 text-blue-600 font-medium"
                                            "text-gray-700"))
                           :on-click #(do (swap! form assoc
                                                 :categoria_id (:id cat)
                                                 :categoria_nome (:nome cat))
                                          (reset! aberto-cat? false))}
                  (str (:emoji cat) " " (:nome cat))])])]]

          ;; Valor + Data
          [:div {:class "flex gap-2"}
           [:div {:class "flex-1"}
            [:label {:class "text-xs font-medium text-gray-500 mb-1 block"} "Valor (R$)"]
            [:input {:type        "number"
                     :inputMode   "decimal"
                     :pattern     "[0-9]*"
                     :class       "w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                     :placeholder "0,00"
                     :value       (:valor @form)
                     :on-change   #(swap! form assoc :valor (.. % -target -value))}]]
           [:div {:class "flex-1"}
            [:label {:class "text-xs font-medium text-gray-500 mb-1 block"} "Data"]
            [seletor-data (:data_input @form)
             (fn [v]
               (swap! form assoc
                      :data_input v
                      :dia_do_mes (or (date-para-dia v) (u/dia-hoje))
                      ;; Limpa mes_compra e ano_compra para recalcular
                      :mes_compra nil
                      :ano_compra nil))]]]

          ;; Forma pagamento
          [:div
           [:label {:class "text-xs font-medium text-gray-500 mb-1.5 block"} "Forma de pagamento"]
           [:div {:class "flex gap-2"}
            [:button {:class    (str "flex-1 py-2.5 rounded-xl text-sm font-medium border-2 transition-colors flex items-center justify-center gap-1.5 "
                                     (if (= (:forma_pagamento @form) "pix")
                                       "bg-blue-500 text-white border-blue-500"
                                       "text-gray-500 border-gray-200"))
                      :on-click #(swap! form assoc :forma_pagamento "pix")}
             "💳 Pix/Débito"]
            [:button {:class    (str "flex-1 py-2.5 rounded-xl text-sm font-medium border-2 transition-colors flex items-center justify-center gap-1.5 "
                                     (if (= (:forma_pagamento @form) "credito")
                                       "bg-blue-500 text-white border-blue-500"
                                       "text-gray-500 border-gray-200"))
                      :on-click #(swap! form assoc :forma_pagamento "credito")}
             "💳 Crédito"]]]

          ;; Quem pagou + Pago na mesma linha
          [:div {:class "flex items-end justify-between"}
           [:div
            [:label {:class "text-xs font-medium text-gray-500 mb-1.5 block"} "Quem pagou?"]
            [seletor-pagadores (:pagadores @form)
             (fn [ps] (swap! form assoc :pagadores ps))]]
           [:div {:class "flex flex-col items-center gap-1"}
            [:label {:class "text-xs font-medium text-gray-500"} "Pago"]
            [:button {:class    (str "w-10 h-10 rounded-xl border-2 flex items-center justify-center transition-colors "
                                     (if (:pago @form)
                                       "bg-green-400 border-green-400 text-white"
                                       "border-gray-200 text-gray-300"))
                      :on-click #(swap! form update :pago not)}
             "✓"]]]

          ;; Divisão
          [:div
           [:label {:class "text-xs font-medium text-gray-500 mb-1.5 block"} "Divisão (%)"]
           [seletor-divisao (:divisao @form)
            (fn [nova-div] (swap! form assoc :divisao nova-div))]]

          ;; Botões
          [:div {:class "flex gap-2 pt-1"}
           (when (:id @form)
             [:button {:class    "py-2.5 px-3 rounded-xl font-semibold text-red-500 bg-red-50 active:bg-red-100 transition-colors text-sm"
                       :on-click #(do (rf/dispatch [:deletar-despesa (:id @form)])
                                      (rf/dispatch [:fechar-modal]))}
              "Deletar"])
           [c/botao-secundario "Cancelar" #(rf/dispatch [:fechar-modal]) {:class "flex-1"}]
           [:button {:class    (str "flex-1 py-2.5 px-4 rounded-xl font-semibold text-white transition-colors text-sm "
                                    (if soma-ok? "bg-blue-500 active:bg-blue-600" "bg-gray-300 cursor-not-allowed"))
                     :disabled (not soma-ok?)
                     :on-click #(when soma-ok?
                                  (let [mes @(rf/subscribe [:mes-atual])]
                                    (rf/dispatch [:salvar-despesa
                                                  (merge @form
                                                         {:id    (or (:id @form) (u/gerar-id))
                                                          :ano   (:ano mes)
                                                          :mes   (:mes mes)
                                                          :valor (js/parseFloat (:valor @form))})])))}
            "Salvar"]]]]))))

;; -- Modal entrada --
(defn modal-entrada [dados]
  (let [form (r/atom (merge {:pessoa_id "andre"
                             :valor     ""
                             :data      (let [d (js/Date.)]
                                          (str (.getFullYear d) "-"
                                               (when (< (inc (.getMonth d)) 10) "0")
                                               (inc (.getMonth d)) "-"
                                               (when (< (.getDate d) 10) "0")
                                               (.getDate d)))
                             :descricao ""}
                            dados))]
    (fn []
      [c/modal-wrapper
       (if (:id @form) "Editar Entrada" "Nova Entrada")
       [:div {:class "space-y-3"}
        ;; Pessoa
        [:div
         [:label {:class "text-xs font-medium text-gray-500 mb-1.5 block"} "Quem recebeu?"]
         [:div {:class "flex gap-1.5"}
          (for [pid pessoas-ids-sem-conjunta]
            ^{:key pid}
            (let [selecionado (= (:pessoa_id @form) pid)
                  cor         (u/pessoa-cor pid)]
              [:button {:class "flex-1 py-2 rounded-xl text-sm font-medium border-2 transition-colors"
                        :style (if selecionado
                                 {:background-color cor :border-color cor :color "white"}
                                 {:border-color "#E5E7EB" :color "#6B7280"})
                        :on-click #(swap! form assoc :pessoa_id pid)}
               (u/pessoa-nome pid)]))]]

        ;; Valor + Data
        [:div {:class "flex gap-2"}
         [:div {:class "flex-1"}
          [:label {:class "text-xs font-medium text-gray-500 mb-1 block"} "Valor (R$)"]
          [:input {:type        "number"
                   :inputMode   "decimal"
                   :pattern     "[0-9]*"
                   :class       "w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                   :placeholder "0,00"
                   :value       (:valor @form)
                   :on-change   #(swap! form assoc :valor (.. % -target -value))}]]
         [:div {:class "flex-1"}
          [:label {:class "text-xs font-medium text-gray-500 mb-1 block"} "Data"]
          [seletor-data (:data @form)
           #(swap! form assoc :data %)]]]

        ;; Descrição
        [:input {:type        "text"
                 :class       "w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                 :placeholder "Descrição (ex: Salário, Freelance...)"
                 :value       (:descricao @form)
                 :on-change   #(swap! form assoc :descricao (.. % -target -value))}]

        ;; Botões
        [:div {:class "flex gap-2 pt-1"}
         (when (:id @form)
           [:button {:class    "py-2.5 px-3 rounded-xl font-semibold text-red-500 bg-red-50 active:bg-red-100 transition-colors text-sm"
                     :on-click #(do (rf/dispatch [:deletar-entrada (:id @form)])
                                    (rf/dispatch [:fechar-modal]))}
            "Deletar"])
         [c/botao-secundario "Cancelar" #(rf/dispatch [:fechar-modal]) {:class "flex-1"}]
         [c/botao-primario "Salvar"
          #(rf/dispatch [:salvar-entrada
                         (merge @form
                                {:id    (or (:id @form) (u/gerar-id))
                                 :valor (js/parseFloat (:valor @form))})])
          {:class "flex-1"}]]]])))

(defn modal-template [dados]
  (let [mes-atual @(rf/subscribe [:mes-atual])
        aberto-cat? (r/atom false)
        form (r/atom (merge {:descricao              ""
                             :valor_padrao           ""
                             :forma_pagamento_padrao "pix"
                             :pagador_padrao         ["conjunta"]
                             :divisao                (u/divisao-padrao)
                             :data_input             (dia-para-date 1 (:mes mes-atual) (:ano mes-atual))
                             :dia_padrao             1
                             :ativo                  true
                             :categoria_id           nil
                             :categoria_nome         nil}
                            dados))]
    (fn []
      (let [soma-ok?   (= (u/soma-divisao (:divisao @form)) 100)
            categorias @(rf/subscribe [:categorias])
            cat-atual  (first (filter #(= (:id %) (:categoria_id @form)) categorias))]
        [c/modal-wrapper
         (if (:id @form) "Editar Template" "Novo Template")
         [:div {:class "space-y-3"}

          ;; Descrição + Categoria
          [:div {:class "flex gap-2"}
           [:input {:type        "text"
                    :class       "flex-1 border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                    :placeholder "Descrição (ex: Aluguel, Internet...)"
                    :value       (:descricao @form)
                    :on-change   #(swap! form assoc :descricao (.. % -target -value))}]
           [:div {:class "relative flex-shrink-0"}
            [:button {:class    "h-full px-3 border border-gray-200 rounded-xl text-sm bg-white"
                      :on-click #(swap! aberto-cat? not)}
             (if cat-atual (:emoji cat-atual) "📂")]
            (when @aberto-cat?
              [:div {:class "absolute right-0 top-12 bg-white rounded-2xl shadow-lg border border-gray-100 p-2 z-50 w-52"}
               [:button {:class    "w-full text-left px-3 py-2 rounded-xl text-xs text-gray-500"
                         :on-click #(do (swap! form assoc :categoria_id nil :categoria_nome nil)
                                        (reset! aberto-cat? false))}
                "— Sem categoria"]
               (for [cat categorias]
                 ^{:key (:id cat)}
                 [:button {:class    (str "w-full text-left px-3 py-2 rounded-xl text-xs "
                                          (if (= (:id cat) (:categoria_id @form))
                                            "bg-blue-50 text-blue-600 font-medium"
                                            "text-gray-700"))
                           :on-click #(do (swap! form assoc
                                                 :categoria_id (:id cat)
                                                 :categoria_nome (:nome cat))
                                          (reset! aberto-cat? false))}
                  (str (:emoji cat) " " (:nome cat))])])]]

          ;; Valor + Data
          [:div {:class "flex gap-2"}
           [:div {:class "flex-1"}
            [:label {:class "text-xs font-medium text-gray-500 mb-1 block"} "Valor (R$)"]
            [:input {:type        "number"
                     :inputMode   "decimal"
                     :pattern     "[0-9]*"
                     :class       "w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                     :placeholder "0,00"
                     :value       (:valor_padrao @form)
                     :on-change   #(swap! form assoc :valor_padrao (.. % -target -value))}]]
           [:div {:class "flex-1"}
            [:label {:class "text-xs font-medium text-gray-500 mb-1 block"} "Dia previsto"]
            [seletor-data (:data_input @form)
             (fn [v]
               (swap! form assoc
                      :data_input v
                      :dia_padrao (or (date-para-dia v) 1)))]]]

          ;; Forma pagamento
          [:div
           [:label {:class "text-xs font-medium text-gray-500 mb-1.5 block"} "Forma de pagamento"]
           [:div {:class "flex gap-2"}
            [:button {:class    (str "flex-1 py-2.5 rounded-xl text-sm font-medium border-2 transition-colors flex items-center justify-center gap-1.5 "
                                     (if (= (:forma_pagamento_padrao @form) "pix")
                                       "bg-blue-500 text-white border-blue-500"
                                       "text-gray-500 border-gray-200"))
                      :on-click #(swap! form assoc :forma_pagamento_padrao "pix")}
             "💳 Pix/Débito"]
            [:button {:class    (str "flex-1 py-2.5 rounded-xl text-sm font-medium border-2 transition-colors flex items-center justify-center gap-1.5 "
                                     (if (= (:forma_pagamento_padrao @form) "credito")
                                       "bg-blue-500 text-white border-blue-500"
                                       "text-gray-500 border-gray-200"))
                      :on-click #(swap! form assoc :forma_pagamento_padrao "credito")}
             "💳 Crédito"]]]

          ;; Quem paga + Ativo
          [:div {:class "flex items-end justify-between"}
           [:div
            [:label {:class "text-xs font-medium text-gray-500 mb-1.5 block"} "Quem paga?"]
            [seletor-pagadores (:pagador_padrao @form)
             (fn [ps] (swap! form assoc :pagador_padrao ps))]]
           [:div {:class "flex flex-col items-center gap-1"}
            [:label {:class "text-xs font-medium text-gray-500"} "Ativo"]
            [:button {:class    (str "w-10 h-10 rounded-xl border-2 flex items-center justify-center transition-colors "
                                     (if (:ativo @form)
                                       "bg-green-400 border-green-400 text-white"
                                       "border-gray-200 text-gray-300"))
                      :on-click #(swap! form update :ativo not)}
             "✓"]]]

          ;; Divisão
          [:div
           [:label {:class "text-xs font-medium text-gray-500 mb-1.5 block"} "Divisão (%)"]
           [seletor-divisao (:divisao @form)
            (fn [nova-div] (swap! form assoc :divisao nova-div))]]

          ;; Botões
          [:div {:class "flex gap-2 pt-1"}
           (when (:id @form)
             [:button {:class    "py-2.5 px-3 rounded-xl font-semibold text-red-500 bg-red-50 active:bg-red-100 transition-colors text-sm"
                       :on-click #(do (rf/dispatch [:deletar-template (:id @form)])
                                      (rf/dispatch [:fechar-modal]))}
              "Deletar"])
           [c/botao-secundario "Cancelar" #(rf/dispatch [:fechar-modal]) {:class "flex-1"}]
           [:button {:class    (str "flex-1 py-2.5 px-4 rounded-xl font-semibold text-white transition-colors text-sm "
                                    (if soma-ok? "bg-blue-500 active:bg-blue-600" "bg-gray-300 cursor-not-allowed"))
                     :disabled (not soma-ok?)
                     :on-click #(when soma-ok?
                                  (rf/dispatch [:salvar-template
                                                (merge @form
                                                       {:id           (or (:id @form) (u/gerar-id))
                                                        :valor_padrao (js/parseFloat (:valor_padrao @form))})]))}
            "Salvar"]]]]))))

(defn modal-pagamento-fatura [fatura]
  (let [total-credito @(rf/subscribe [:total-credito-mes])
        form (r/atom {:valor_pago (str (or (:valor_pago fatura) ""))})]
    (fn []
      [c/modal-wrapper "💳 Pagar Fatura"
       [:div {:class "space-y-3"}
        [:div {:class "bg-gray-50 rounded-xl p-3"}
         [:p {:class "text-xs text-gray-500 mb-1"} "Total da fatura"]
         [:p {:class "text-xl font-bold text-gray-800"}
          (u/formatar-valor-br total-credito)]]
        [:div
         [:label {:class "text-xs font-medium text-gray-500 mb-1 block"} "Valor pago (R$)"]
         [:input {:type        "number"
                  :inputMode   "decimal"
                  :class       "w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                  :placeholder "0,00"
                  :value       (:valor_pago @form)
                  :on-change   #(swap! form assoc :valor_pago (.. % -target -value))}]]
        [:div {:class "flex gap-2"}
         [:button {:class    "flex-1 py-2 rounded-xl text-xs font-medium bg-gray-50 text-gray-600 border border-gray-200"
                   :on-click #(swap! form assoc :valor_pago (str total-credito))}
          "Pagar total"]
         [:button {:class    "flex-1 py-2 rounded-xl text-xs font-medium bg-gray-50 text-gray-600 border border-gray-200"
                   :on-click #(swap! form assoc :valor_pago "")}
          "Limpar"]]
        ;; Botão remover pagamento (quando já tem pagamento)
        (when (and fatura (:valor_pago fatura) (> (:valor_pago fatura) 0))
          [:button {:class    "w-full py-2 rounded-xl text-xs font-medium text-red-500 bg-red-50 border border-red-100"
                    :on-click #(do (rf/dispatch [:desmarcar-fatura])
                                   (rf/dispatch [:fechar-modal]))}
           "Remover pagamento"])
        [:div {:class "flex gap-2 pt-1"}
         [c/botao-secundario "Cancelar" #(rf/dispatch [:fechar-modal]) {:class "flex-1"}]
         [c/botao-primario "Salvar"
          #(rf/dispatch [:salvar-pagamento-fatura
                         (js/parseFloat (:valor_pago @form))])
          {:class "flex-1"}]]]])))

;; -- Dispatcher --
(defn modais []
  (let [modal @(rf/subscribe [:modal])]
    (when modal
      (case (:tipo modal)
        :nova-acao       [modal-nova-acao]
        :nova-despesa    [modal-despesa (:dados modal)]
        :editar-despesa  [modal-despesa (:dados modal)]
        :nova-entrada    [modal-entrada (:dados modal)]
        :editar-entrada  [modal-entrada (:dados modal)]
        :novo-template   [modal-template (:dados modal)]
        :editar-template [modal-template (:dados modal)]
        :pagamento-fatura [modal-pagamento-fatura (:dados modal)]
        nil))))

