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
             :style {:background-color @(rf/subscribe [:cor-pessoa pid])}}]])])

(defn secao-conta []
  [:div {:class "bg-white rounded-2xl border border-gray-100 p-4 mb-4"}
   [:h2 {:class "font-semibold text-gray-700 mb-3"} "Conta"]
   [:button {:class    "w-full py-3 px-4 rounded-xl font-semibold text-blue-600 bg-blue-50 active:bg-blue-100 transition-colors mb-2"
             :on-click #(rf/dispatch [:set-aba :importar])}
    "⬆ Importar CSV"]
   [:button {:class    "w-full py-3 px-4 rounded-xl font-semibold text-red-500 bg-red-50 active:bg-red-100 transition-colors"
             :on-click #(rf/dispatch [:logout])}
    "Sair da conta"]])

(def paleta-cores
  ["#3B82F6" "#EC4899" "#14B8A6" "#F97316" "#8B5CF6"
   "#EF4444" "#10B981" "#F59E0B" "#6366F1" "#84CC16"
   "#06B6D4" "#E11D48" "#7C3AED" "#059669" "#DC2626"])

(defn seletor-cor [pessoa-id aberto-atom]
  (fn []
    (let [cor-atual @(rf/subscribe [:cor-pessoa pessoa-id])
          aberto?   (= @aberto-atom pessoa-id)]
      [:div {:class "flex items-center gap-3 py-2"}
       [c/avatar pessoa-id {:size "sm"}]
       [:span {:class "flex-1 text-sm font-medium text-gray-700"} (u/pessoa-nome pessoa-id)]
       [:div {:class "relative"}
        [:button {:class "w-8 h-8 rounded-full border-2 border-gray-200 transition-all"
                  :style {:background-color cor-atual}
                  :on-click #(reset! aberto-atom (if aberto? nil pessoa-id))}]
        (when aberto?
          [:div {:class "absolute right-0 top-10 bg-white rounded-2xl shadow-lg border border-gray-100 p-2 z-50"}
           [:div {:class "grid grid-cols-5 gap-1.5"}
            (for [cor paleta-cores]
              ^{:key cor}
              [:button {:class    (str "w-7 h-7 rounded-full border-2 transition-all "
                                       (if (= cor cor-atual)
                                         "border-gray-800 scale-110"
                                         "border-transparent"))
                        :style    {:background-color cor}
                        :on-click (fn []
                                    (rf/dispatch [:salvar-cor-pessoa pessoa-id cor])
                                    (reset! aberto-atom nil))}])]])]])))

(defn secao-cores []
  (let [aberto (r/atom nil)]
    (fn []
      [:div {:class "bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-3"}
       [:h3 {:class "font-bold text-gray-800 mb-3"} "Cores dos Usuários"]
       [:div {:class "divide-y divide-gray-50"}
        [seletor-cor "andre" aberto]
        [seletor-cor "bianca" aberto]
        [seletor-cor "fernanda" aberto]
        [seletor-cor "bruna" aberto]]])))

(defn settings []
  [:div {:class "flex flex-col pb-24"}
   [:div {:class "px-4 py-3 bg-white border-b border-gray-100"}
    [:h1 {:class "font-bold text-gray-800 text-lg"} "Configurações"]]
   [:div {:class "p-4"}
    [secao-cores] 
    [secao-conta]]])