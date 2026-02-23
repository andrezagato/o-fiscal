(ns casa-financas.views.entradas
  (:require [re-frame.core :as rf]
            [casa-financas.utils :as u]
            [casa-financas.components.comum :as c]))

(defn formatar-data-curta [data-str]
  (when data-str
    (let [d (js/Date. data-str)
          dia (.getDate d)
          mes (inc (.getMonth d))]
      (str (when (< dia 10) "0") dia "/" (when (< mes 10) "0") mes))))

(defn item-entrada [entrada]
  (let [cor (u/pessoa-cor (:pessoa_id entrada))]
    [:div {:class    "rounded-xl p-3 mb-2 border"
           :style    {:background-color (str cor "15")
                      :border-color     (str cor "40")}
           :on-click #(rf/dispatch [:abrir-modal :editar-entrada entrada])}
     [:div {:class "flex items-center gap-3"}
      [c/avatar (:pessoa_id entrada) {:size "sm"}]
      [:div {:class "flex-1 min-w-0"}
       [:p {:class "font-semibold text-gray-800 text-sm"}
        (u/pessoa-nome (:pessoa_id entrada))]
       (when (and (:descricao entrada) (not= (:descricao entrada) ""))
         [:p {:class "text-xs text-gray-500 truncate"} (:descricao entrada)])]
      [:div {:class "text-right"}
       [:p {:class "font-bold text-green-600 text-sm"} (u/formatar-valor-br (:valor entrada))]
       [:p {:class "text-xs text-gray-400"} (formatar-data-curta (:data entrada))]]]]))

(defn entradas []
  (let [entradas-mes @(rf/subscribe [:entradas-do-mes])
        total        @(rf/subscribe [:total-entradas-mes])
        divisao-barr (reduce (fn [acc e]
                               (let [pid (keyword (:pessoa_id e))
                                     pct (if (> total 0)
                                           (* 100 (/ (:valor e) total))
                                           0)]
                                 (update acc pid #(+ (or % 0) pct))))
                             {:andre 0 :bianca 0 :fernanda 0 :bruna 0}
                             entradas-mes)]
    [:div {:class "flex flex-col pb-24"}
     [c/seletor-mes]

     [:div {:class "p-3"}
      ;; Resumo
      [:div {:class "bg-white rounded-xl border border-gray-100 p-3 shadow-sm mb-3"}
       [:p {:class "text-xs text-gray-500 mb-0.5"} "Total de Entradas"]
       [:p {:class "text-xl font-bold text-green-600 mb-2"} (u/formatar-valor-br total)]
       [c/barra-divisao divisao-barr]]

      ;; Lista
      (if (empty? entradas-mes)
        [:div {:class "flex flex-col items-center justify-center py-16 text-gray-400"}
         [:span {:class "text-4xl mb-3"} "💰"]
         [:p {:class "font-medium"} "Nenhuma entrada"]
         [:p {:class "text-sm"} "Toque no + para adicionar"]]
        (for [e (sort-by :data entradas-mes)]
          ^{:key (:id e)}
          [item-entrada e]))]]))