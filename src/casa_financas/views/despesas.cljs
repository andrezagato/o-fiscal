(ns casa-financas.views.despesas
  (:require [re-frame.core :as rf]
            [reagent.core :as r]
            [casa-financas.utils :as u]
            [casa-financas.components.comum :as c]))

(defn item-despesa-credito [despesa fatura]
  (let [total-pago (or (:valor_pago fatura) 0)
        total      (or (:valor_total fatura) 0)
        status     (cond
                     (and (> total 0) (>= total-pago total)) :paga
                     (> total-pago 0)                        :parcial
                     :else                                    :pendente)]
    [:div {:class    "flex items-center gap-2 px-3 py-2 border-b border-gray-100 last:border-0"
           :on-click #(rf/dispatch [:abrir-modal :editar-despesa despesa])}
     [:div {:class "flex flex-col items-center w-8 flex-shrink-0"}
      [:span {:class "text-xs font-bold text-gray-500 leading-none"}
       (str (or (:mes_compra despesa) (:mes despesa)) "/" (:dia_do_mes despesa))]]
     [:div {:class "w-px h-6 bg-gray-200 flex-shrink-0"}]
     [:div {:class "flex-1 min-w-0"}
      [:p {:class (str "text-sm truncate "
                       (if (= status :paga) "line-through text-gray-400" "text-gray-700"))}
       (:descricao despesa)]]
     [:span {:class "text-xs font-semibold text-gray-600 flex-shrink-0"}
      (u/formatar-valor-br (:valor despesa))]]))

(defn card-fatura [fatura total-credito despesas-credito]
  (let [valor-pago  (or (:valor_pago fatura) 0)
        status      (cond
                      (and (> total-credito 0) (>= valor-pago total-credito)) :paga
                      (> valor-pago 0)                                         :parcial
                      :else                                                    :pendente)
        expandido?  (r/atom false)]
    (fn []
      [:div {:class (str "rounded-xl border overflow-hidden mb-2 shadow-sm "
                         (case status
                           :paga    "bg-green-50 border-green-200"
                           :parcial "bg-amber-50 border-amber-200"
                           :pendente "bg-white border-gray-100"))}
       [:div {:class "h-1 bg-blue-400"}]
       ;; Header da fatura
       [:div {:class "flex items-center gap-2 px-3 py-2.5"}
        ;; Expandir/colapsar
        [:button {:class    "flex flex-col items-center w-6 flex-shrink-0"
                  :on-click #(swap! expandido? not)}
         [:span {:class "text-xs font-bold text-blue-500 leading-none"}
          (if @expandido? "▲" "▼")]]
        [:div {:class "w-px h-8 bg-gray-200 flex-shrink-0"}]
        ;; Info — clica para pagar
        [:div {:class    "flex-1 min-w-0"
               :on-click #(rf/dispatch [:abrir-modal :pagamento-fatura fatura])}
         [:p {:class "font-semibold text-sm text-gray-800 text-lg"} "💳 Fatura Cartão"]
         [:div {:class "flex items-center gap-1.5"}
          (case status
            :paga    [:span {:class "text-xs text-green-600 font-medium"} "pago"]
            :parcial [:span {:class "text-xs text-amber-600 font-medium"}
                      (str "pago " (u/formatar-valor-br valor-pago))]
            [:span {:class "text-xs text-gray-400"} "pendente"])
          [:span {:class "text-xs text-gray-400"}
           (str "· " (count despesas-credito) " itens")]]]
        [:div {:class    "flex items-center gap-2 flex-shrink-0"
               :on-click #(rf/dispatch [:abrir-modal :pagamento-fatura fatura])}
         [:span {:class "font-semibold text-sm text-gray-800"}
          (u/formatar-valor-br total-credito)]
         [:button {:class    (str "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors "
                                  (case status
                                    :paga    "bg-green-400 border-green-400"
                                    :parcial "bg-amber-400 border-amber-400"
                                    "border-gray-300"))
                   :on-click (fn [e]
                               (.stopPropagation e)
                               (rf/dispatch [:abrir-modal :pagamento-fatura fatura]))}
          (when (= status :paga)
            [:span {:class "text-white text-xs font-bold"} "✓"])]]]
       ;; Lista colapsável de despesas de crédito
       (when @expandido?
         [:div {:class "border-t border-gray-100"}
          (for [d (sort-by (fn [d] [(or (:ano_compra d) (:ano d))
                                    (or (:mes_compra d) (:mes d))
                                    (:dia_do_mes d)])
                           despesas-credito)]
            ^{:key (:id d)}
            [item-despesa-credito d fatura])])])))

(defn item-despesa [despesa]
  (let [status (u/despesa-status despesa)
        [bg-class border-class] (case status
                                  :paga     ["bg-green-50" "border-green-100"]
                                  :vencida  ["bg-red-50"   "border-red-200"]
                                  :pendente ["bg-white"    "border-gray-100"])]
    [:div {:class (str "rounded-xl border overflow-hidden mb-2 shadow-sm " bg-class " " border-class)}
     [c/barra-divisao (:divisao despesa)]
     [:div {:class    "flex items-center gap-2 px-3 py-2.5"
            :on-click #(rf/dispatch [:abrir-modal :editar-despesa despesa])}
      [:div {:class "flex flex-col items-center w-6 flex-shrink-0"}
       [:span {:class "text-xs font-bold text-gray-700 leading-none"} (:dia_do_mes despesa)]]
      [:div {:class "w-px h-8 bg-gray-200 flex-shrink-0"}]
      [:div {:class "flex-1 min-w-0"}
       [:p {:class (str "font-semibold text-sm truncate mb-0.5 "
                        (if (= status :paga) "line-through text-gray-400 text-lg" "text-gray-800 text-lg"))}
        (:descricao despesa)]
       [:div {:class "flex items-center gap-1.5"}
        (for [pid (:pagadores despesa)]
          ^{:key pid}
          [:span {:class "text-xs px-1.5 py-0.5 rounded-full font-medium"
                  :style {:background-color (str (u/pessoa-cor pid) "20")
                          :color            (u/pessoa-cor pid)}}
           (if (= pid "conjunta") "Casa" (u/pessoa-inicial pid))])
        [:span {:class "text-xs text-gray-400"} "pix"]
        (when (= status :vencida)
          [:span {:class "text-xs text-red-500 font-medium"} "atrasada"])]]
      [:div {:class "flex items-center gap-2 flex-shrink-0"}
       [:span {:class (str "font-semibold text-sm "
                           (if (= status :vencida) "text-red-600" "text-gray-800"))}
        (u/formatar-valor-br (:valor despesa))]
       [:button {:class    (str "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors "
                                (case status
                                  :paga    "bg-green-400 border-green-400"
                                  :vencida "border-red-300"
                                  "border-gray-300"))
                 :on-click (fn [e]
                             (.stopPropagation e)
                             (if (:pago despesa)
                               (rf/dispatch [:desmarcar-pago (:id despesa)])
                               (rf/dispatch [:marcar-pago (:id despesa)])))}
        (when (= status :paga)
          [:span {:class "text-white text-xs font-bold"} "✓"])]]]]))

(defn despesas []
  (let [filtro (r/atom :todas)]
    (fn []
      (let [despesas-mes      @(rf/subscribe [:despesas-do-mes])
            fatura            @(rf/subscribe [:fatura])
            total-credito     @(rf/subscribe [:total-credito-mes])
            templates         @(rf/subscribe [:templates])
            despesas-credito  (sort-by (fn [d] [(or (:ano_compra d) (:ano d))
                                                (or (:mes_compra d) (:mes d))
                                                (:dia_do_mes d)])
                                       (filter #(= (:forma_pagamento %) "credito") despesas-mes))
            despesas-debito   (filter #(not= (:forma_pagamento %) "credito") despesas-mes)
            despesas-filtradas (case @filtro
                                 :todas     despesas-debito
                                 :pendentes (filter #(not (:pago %)) despesas-debito)
                                 :pagas     (filter :pago despesas-debito))
            despesas-ordenadas (sort-by :dia_do_mes despesas-filtradas)]
        [:div {:class "flex flex-col pb-24"}
         [c/seletor-mes]
         [:div {:class "p-3"}
          [:div {:class "flex gap-1 p-1.5 bg-white rounded-2xl border border-gray-100 shadow-sm mb-3"}
           (for [[k label] [[:todas "Todas"] [:pendentes "Pendentes"] [:pagas "Pagas"]]]
             ^{:key k}
             [:button {:class    (str "flex-1 py-1.5 rounded-xl text-sm font-medium transition-colors "
                                      (if (= @filtro k)
                                        "bg-blue-500 text-white"
                                        "text-gray-500"))
                       :on-click #(reset! filtro k)}
              label])]
          [:div
           ;; Fatura sempre primeiro
           [card-fatura fatura total-credito despesas-credito]
           ;; Despesas de débito/pix
           (if (empty? despesas-ordenadas)
             [:div {:class "flex flex-col items-center justify-center py-8 text-gray-400"}
              [:span {:class "text-3xl mb-2"} "💸"]
              [:p {:class "text-sm"} "Nenhuma despesa"]
              (when (seq templates)
                [:button {:class    "mt-3 px-4 py-2 bg-blue-50 text-blue-600 rounded-xl text-sm font-medium"
                          :on-click #(rf/dispatch [:importar-templates])}
                 "📋 Importar Templates"])]
             [:<>
              (for [d despesas-ordenadas]
                ^{:key (:id d)}
                [item-despesa d])
              (when (seq templates)
                [:button {:class    "w-full mt-2 py-2.5 rounded-xl text-sm font-medium text-blue-600 bg-blue-50 border border-blue-100"
                          :on-click #(rf/dispatch [:importar-templates])}
                 "📋 Importar Templates do Mês"])])]]]))))