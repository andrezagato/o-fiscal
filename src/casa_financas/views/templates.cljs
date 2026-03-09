(ns casa-financas.views.templates
  (:require [re-frame.core :as rf]
            [casa-financas.utils :as u]
            [casa-financas.components.comum :as c]))

(defn item-template [template]
  (let [categorias @(rf/subscribe [:categorias])
        cat        (first (filter #(= (:id %) (:categoria_id template)) categorias))]
    [:div {:class "rounded-xl border overflow-hidden mb-2 shadow-sm bg-white border-gray-100"}
     [c/barra-divisao (:divisao template)]
     [:div {:class    "flex items-center gap-2 px-3 py-2.5"
            :on-click #(rf/dispatch [:abrir-modal :editar-template template])}
      [:div {:class "flex flex-col items-center w-6 flex-shrink-0"}
       [:span {:class "text-xs font-bold text-gray-700 leading-none"} (or (:dia_padrao template) 1)]]
      [:div {:class "w-px h-8 bg-gray-200 flex-shrink-0"}]
      [:div {:class "flex-1 min-w-0"}
       [:p {:class "font-semibold text-sm truncate mb-0.5 text-gray-800 text-lg"}
        (:descricao template)]
       [:div {:class "flex items-center gap-1.5"}
        (for [pid (:pagador_padrao template)]
          ^{:key pid}
          [:span {:class "text-xs px-1.5 py-0.5 rounded-full font-medium"
                  :style {:background-color (str (u/pessoa-cor pid) "20")
                          :color            (u/pessoa-cor pid)}}
           (if (= pid "conjunta") "Casa" (u/pessoa-inicial pid))])
        (when cat [:span {:class "text-xs"} (:emoji cat)])
        [:span {:class "text-xs text-gray-400"} (:forma_pagamento_padrao template)]]]
      [:div {:class "flex items-center gap-2 flex-shrink-0"}
       [:span {:class "font-semibold text-sm text-gray-800"}
        (u/formatar-valor-br (:valor_padrao template))]
       [:div {:class    (str "w-10 h-5 rounded-full transition-colors flex items-center px-0.5 "
                             (if (:ativo template) "bg-green-400" "bg-gray-200"))
              :on-click (fn [e]
                          (.stopPropagation e)
                          (rf/dispatch [:toggle-template (:id template)]))}
        [:div {:class (str "w-4 h-4 rounded-full bg-white shadow transition-transform "
                           (if (:ativo template) "translate-x-5" "translate-x-0"))}]]]]]))

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
        (for [t (sort-by #(or (:dia_padrao %) 1) templates)]
          ^{:key (:id t)}
          [item-template t]))]]))
