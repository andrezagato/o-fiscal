(ns casa-financas.components.comum
  (:require [re-frame.core :as rf]
            [casa-financas.utils :as u]))

(defn avatar [pessoa-id & [{:keys [size] :or {size "md"}}]]
  (let [cor     (u/pessoa-cor pessoa-id)
        inicial (u/pessoa-inicial pessoa-id)
        sz      (case size
                  "sm" "w-6 h-6 text-xs"
                  "lg" "w-10 h-10 text-base"
                  "w-8 h-8 text-sm")]
    [:div {:class (str "rounded-full flex items-center justify-center font-bold text-white flex-shrink-0 " sz)
           :style {:background-color cor}}
     inicial]))

(defn chip-pessoa [pessoa-id]
  (let [cor  (u/pessoa-cor pessoa-id)
        nome (u/pessoa-nome pessoa-id)]
    [:span {:class "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium text-white"
            :style {:background-color cor}}
     nome]))

(defn barra-divisao [divisao]
  (let [{:keys [andre bianca fernanda bruna]} divisao]
    [:div {:class "flex rounded-full overflow-hidden h-1.5 w-full"}
     (when (and andre (> andre 0))
       [:div {:class "h-full" :style {:width (str andre "%") :background-color "#3B82F6"}}])
     (when (and bianca (> bianca 0))
       [:div {:class "h-full" :style {:width (str bianca "%") :background-color "#EC4899"}}])
     (when (and fernanda (> fernanda 0))
       [:div {:class "h-full" :style {:width (str fernanda "%") :background-color "#14B8A6"}}])
     (when (and bruna (> bruna 0))
       [:div {:class "h-full" :style {:width (str bruna "%") :background-color "#F97316"}}])]))

(defn seletor-mes []
  (let [mes-atual @(rf/subscribe [:mes-atual])]
    [:div {:class "flex items-center justify-between mx-3 my-2 px-4 py-2 bg-white rounded-2xl border border-gray-100 shadow-sm"}
     [:button {:class    "p-1.5 rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors"
               :on-click #(rf/dispatch [:mes-anterior])}
      [:span {:class "text-gray-500 text-xl font-light"} "‹"]]
     [:span {:class "font-semibold text-gray-800 text-sm"}
      (str (u/mes-nome (:mes mes-atual)) " " (:ano mes-atual))]
     [:button {:class    "p-1.5 rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors"
               :on-click #(rf/dispatch [:mes-proximo])}
      [:span {:class "text-gray-500 text-xl font-light"} "›"]]]))

(defn botao-primario [texto on-click & [{:keys [disabled class]}]]
  [:button {:class    (str "w-full py-2.5 px-4 rounded-xl font-semibold text-white bg-blue-500 "
                           "active:bg-blue-600 transition-colors disabled:opacity-50 " class)
            :disabled disabled
            :on-click on-click}
   texto])

(defn botao-secundario [texto on-click & [{:keys [class]}]]
  [:button {:class    (str "w-full py-2.5 px-4 rounded-xl font-semibold text-gray-700 bg-gray-100 "
                           "active:bg-gray-200 transition-colors " class)
            :on-click on-click}
   texto])

(defn botao-perigo [texto on-click & [{:keys [class]}]]
  [:button {:class    (str "w-full py-2.5 px-4 rounded-xl font-semibold text-red-600 bg-red-50 "
                           "active:bg-red-100 transition-colors " class)
            :on-click on-click}
   texto])

(defn modal-wrapper [titulo conteudo & [{:keys [on-close]}]]
  [:div {:class    "fixed inset-0 z-50 flex items-end justify-center bg-black/40"
         :on-click (fn [e]
                     (when (= (.-target e) (.-currentTarget e))
                       (rf/dispatch [:fechar-modal])))}
   [:div {:class "bg-white rounded-t-2xl w-full max-w-lg max-h-[92vh] overflow-y-auto"}
    [:div {:class "flex items-center justify-between px-4 py-3 border-b border-gray-100 sticky top-0 bg-white"}
     [:h2 {:class "font-bold text-gray-800"} titulo]
     [:button {:class    "p-1.5 rounded-full hover:bg-gray-100 text-gray-400"
               :on-click #(rf/dispatch [:fechar-modal])}
      "✕"]]
    [:div {:class "p-4"}
     conteudo]]])