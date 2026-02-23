(ns casa-financas.views.settings
  (:require [re-frame.core :as rf]
            [reagent.core :as r]
            [casa-financas.utils :as u]
            [casa-financas.components.comum :as c]))

(def pessoas-ids ["andre" "bianca" "fernanda" "bruna"])

(defn secao-perfis []
  [:div {:class "bg-white rounded-2xl border border-gray-100 p-4 mb-4"}
   [:h2 {:class "font-semibold text-gray-700 mb-3"} "Perfis"]
   (for [pid pessoas-ids]
     ^{:key pid}
     [:div {:class "flex items-center gap-3 py-2"}
      [c/avatar pid {:size "md"}]
      [:span {:class "flex-1 font-medium text-gray-800"} (u/pessoa-nome pid)]
      [:div {:class "w-8 h-8 rounded-full border-2 border-gray-200"
             :style {:background-color (u/pessoa-cor pid)}}]])])

(defn secao-conta []
  [:div {:class "bg-white rounded-2xl border border-gray-100 p-4 mb-4"}
   [:h2 {:class "font-semibold text-gray-700 mb-3"} "Conta"]
   [:button {:class    "w-full py-3 px-4 rounded-xl font-semibold text-blue-600 bg-blue-50 active:bg-blue-100 transition-colors mb-2"
             :on-click #(rf/dispatch [:set-aba :importar])}
    "⬆ Importar CSV"]
   [:button {:class    "w-full py-3 px-4 rounded-xl font-semibold text-red-500 bg-red-50 active:bg-red-100 transition-colors"
             :on-click #(rf/dispatch [:logout])}
    "Sair da conta"]])

(defn settings []
  [:div {:class "flex flex-col pb-24"}
   [:div {:class "px-4 py-3 bg-white border-b border-gray-100"}
    [:h1 {:class "font-bold text-gray-800 text-lg"} "Configurações"]]
   [:div {:class "p-4"}
    [secao-perfis]
    [secao-conta]]])