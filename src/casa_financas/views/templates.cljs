(ns casa-financas.views.templates
  (:require [re-frame.core :as rf]
            [casa-financas.utils :as u]
            [casa-financas.components.comum :as c]))

(defn item-template [template]
  [:div {:class    "bg-white rounded-xl border border-gray-100 p-3 mb-2"
         :on-click #(rf/dispatch [:abrir-modal :editar-template template])}
   [:div {:class "flex items-center gap-3"}
    [:div {:class "flex-1 min-w-0"}
     [:p {:class "font-medium text-gray-800"} (:descricao template)]
     [:div {:class "flex items-center gap-2 mt-1"}
      (for [pid (:pagador_padrao template)]
        ^{:key pid}
        [c/chip-pessoa pid])
      [:span {:class "text-xs text-gray-400"} (:forma_pagamento_padrao template)]]]
    [:div {:class "flex flex-col items-end gap-2"}
     [:span {:class "font-semibold text-gray-700"} (u/formatar-valor-br (:valor_padrao template))]
     [:div {:class (str "w-10 h-5 rounded-full transition-colors flex items-center px-0.5 "
                        (if (:ativo template) "bg-green-400" "bg-gray-200"))
            :on-click (fn [e]
                        (.stopPropagation e)
                        (rf/dispatch [:toggle-template (:id template)]))}
      [:div {:class (str "w-4 h-4 rounded-full bg-white shadow transition-transform "
                         (if (:ativo template) "translate-x-5" "translate-x-0"))}]]]]
   [:div {:class "mt-2"}
    [c/barra-divisao (:divisao template)]]])

(defn templates []
  (let [templates @(rf/subscribe [:templates])]
    [:div {:class "flex flex-col pb-24"}
     [:div {:class "px-4 py-3 bg-white border-b border-gray-100"}
      [:h1 {:class "font-bold text-gray-800 text-lg"} "Templates"]]

     [:div {:class "px-4 pt-4"}
      (if (empty? templates)
        [:div {:class "flex flex-col items-center justify-center py-16 text-gray-400"}
         [:span {:class "text-4xl mb-3"} "📋"]
         [:p {:class "font-medium"} "Nenhum template"]
         [:p {:class "text-sm"} "Toque no + para criar"]]
        (for [t templates]
          ^{:key (:id t)}
          [item-template t]))]]))