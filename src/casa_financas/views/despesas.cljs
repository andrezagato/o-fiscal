(ns casa-financas.views.despesas
  (:require [re-frame.core :as rf]
            [reagent.core :as r]
            [casa-financas.utils :as u]
            [casa-financas.components.comum :as c]))

(defn item-despesa [despesa]
  (let [status (u/despesa-status despesa)
        cor-bg (u/status-cor status)]
    [:div {:class (str "rounded-xl border p-3 mb-2 " cor-bg)}
     [:div {:class    "flex items-center gap-3"
            :on-click #(rf/dispatch [:abrir-modal :editar-despesa despesa])}
      [:div {:class "flex flex-col items-center w-7 flex-shrink-0"}
       [:span {:class "text-xs text-gray-400"} "dia"]
       [:span {:class "font-bold text-gray-700 text-sm"} (:dia_do_mes despesa)]]
      [:div {:class "flex-1 min-w-0"}
       [:p {:class "font-medium text-gray-800 text-sm truncate"} (:descricao despesa)]
       [:div {:class "flex items-center gap-1 mt-0.5 flex-wrap"}
        (for [pid (:pagadores despesa)]
          ^{:key pid}
          [c/chip-pessoa pid])
        [:span {:class "text-xs text-gray-400"} (:forma_pagamento despesa)]]]
      [:div {:class "flex flex-col items-end gap-1.5"}
       [:span {:class "font-bold text-gray-800 text-sm"} (u/formatar-valor-br (:valor despesa))]
       ;; Botão toggle pago/não pago — sem abrir modal
       [:button {:class    (str "w-7 h-7 rounded-full border-2 flex items-center justify-center transition-colors "
                                (if (:pago despesa)
                                  "bg-green-400 border-green-400"
                                  "border-gray-300 active:bg-green-100"))
                 :on-click (fn [e]
                             (.stopPropagation e)
                             (if (:pago despesa)
                               (rf/dispatch [:desmarcar-pago (:id despesa)])
                               (rf/dispatch [:marcar-pago (:id despesa)])))}
        [:span {:class (str "text-xs font-bold "
                            (if (:pago despesa) "text-white" "text-gray-400"))} "✓"]]]]
     [:div {:class "mt-1.5"}
      [c/barra-divisao (:divisao despesa)]]]))

(defn despesas []
  (let [filtro (r/atom :todas)]
    (fn []
      (let [despesas-mes       @(rf/subscribe [:despesas-do-mes])
            templates          @(rf/subscribe [:templates])
            despesas-filtradas (case @filtro
                                 :todas     despesas-mes
                                 :pendentes (filter #(not (:pago %)) despesas-mes)
                                 :pagas     (filter :pago despesas-mes))]
        [:div {:class "flex flex-col pb-24"}
         [c/seletor-mes]

         
         ;; Filtro toggle
         [:div {:class "p-3"}
          [:div {:class "flex gap-1 p-1.5 bg-white rounded-2xl border border-gray-100 shadow-sm"}
           (for [[k label] [[:todas "Todas"] [:pendentes "Pendentes"] [:pagas "Pagas"]]]
             ^{:key k}
             [:button {:class    (str "flex-1 py-1.5 rounded-xl text-sm font-medium transition-colors "
                                      (if (= @filtro k)
                                        "bg-blue-500 text-white"
                                        "text-gray-500 hover:bg-gray-100"))
                       :on-click #(reset! filtro k)}
              label])]]
         
         ;; Lista
         [:div {:class "p-3"}
          (if (empty? despesas-filtradas)
            [:div {:class "flex flex-col items-center justify-center py-12 text-gray-400"}
             [:span {:class "text-4xl mb-3"} "💸"]
             [:p {:class "font-medium"} "Nenhuma despesa"]
             [:p {:class "text-sm mb-4"} "Toque no + para adicionar"]
             (when (seq templates)
               [:button {:class    "px-4 py-2 bg-blue-50 text-blue-600 rounded-xl text-sm font-medium active:bg-blue-100"
                         :on-click #(rf/dispatch [:importar-templates])}
                "📋 Importar Templates"])]
            [:div
             (for [d (sort-by :dia_do_mes despesas-filtradas)]
               ^{:key (:id d)}
               [item-despesa d])
             (when (seq templates)
               [:button {:class    "w-full mt-2 py-2.5 rounded-xl text-sm font-medium text-blue-600 bg-blue-50 active:bg-blue-100 border border-blue-100"
                         :on-click #(rf/dispatch [:importar-templates])}
                "📋 Importar Templates do Mês"])])]]))))