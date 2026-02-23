(ns casa-financas.views.dashboard
  (:require [re-frame.core :as rf]
            [casa-financas.utils :as u]
            [casa-financas.components.comum :as c]))

(def pessoas-ids ["andre" "bianca" "fernanda" "bruna"])

(defn calcular-saldo-pessoa [pessoa-id despesas entradas]
  (let [entradas-pessoa (filter #(= (:pessoa_id %) pessoa-id) entradas)
        total-entradas  (reduce + 0 (map :valor entradas-pessoa))
        debitos         (reduce + 0
                                (map (fn [d]
                                       (let [pct (get (:divisao d) (keyword pessoa-id) 0)]
                                         (* (:valor d) (/ pct 100))))
                                     despesas))]
    (- total-entradas debitos)))

(defn card-pessoa [pessoa-id despesas-mes entradas-mes]
  (let [cor        (u/pessoa-cor pessoa-id)
        saldo-mes  (calcular-saldo-pessoa pessoa-id despesas-mes entradas-mes)
        saldo-ant  @(rf/subscribe [:saldo-acumulado-anterior-pessoa pessoa-id])
        saldo-total (+ saldo-mes saldo-ant)
        entradas-p (reduce + 0 (map :valor (filter #(= (:pessoa_id %) pessoa-id) entradas-mes)))
        previsto   (reduce + 0
                           (map (fn [d]
                                  (* (:valor d)
                                     (/ (get (:divisao d) (keyword pessoa-id) 0) 100)))
                                despesas-mes))
        pago       (reduce + 0
                           (map (fn [d]
                                  (if (:pago d)
                                    (* (:valor d)
                                       (/ (get (:divisao d) (keyword pessoa-id) 0) 100))
                                    0))
                                despesas-mes))
        pct        (if (> previsto 0) (min 100 (int (* 100 (/ pago previsto)))) 0)]
    [:div {:class "rounded-xl p-3 shadow-sm border"
           :style {:background-color (str (u/pessoa-cor pessoa-id) "0D")
                   :border-color     (str (u/pessoa-cor pessoa-id) "66")}}
     ;; Header — avatar + saldo total
     [:div {:class "flex items-center gap-2 mb-2"}
      [c/avatar pessoa-id {:size "sm"}]
      [:p {:class (str "text-base font-bold "
                       (if (>= saldo-total 0) "text-green-600" "text-red-500"))}
       (u/formatar-valor-br saldo-total)]]
     ;; Detalhes
     [:div {:class "space-y-1.5 text-xs"}
      [:div {:class "flex justify-between text-gray-500"}
       [:span "Entradas"] [:span {:class "text-green-600"} (u/formatar-valor-br entradas-p)]]
      [:div {:class "flex justify-between text-gray-500"}
       [:span "Previsto"] [:span (u/formatar-valor-br previsto)]]
      [:div {:class "flex justify-between text-gray-400"}
       [:span "Saldo Anterior"] [:span {:class (if (>= saldo-ant 0) "text-green-600" "text-red-500")}
        (u/formatar-valor-br saldo-ant)]]]]))

(defn dashboard []
  (let [despesas-mes @(rf/subscribe [:despesas-do-mes])
        entradas-mes @(rf/subscribe [:entradas-do-mes])
        total-prev   @(rf/subscribe [:total-previsto-mes])
        total-pago   @(rf/subscribe [:total-pago-mes])
        total-entr   @(rf/subscribe [:total-entradas-mes])
        saldo-ant    @(rf/subscribe [:saldo-acumulado-anterior])
        saldo-total  (+ (- total-entr total-pago) saldo-ant)
        pct-pago     (if (> total-prev 0)
                       (min 100 (int (* 100 (/ total-pago total-prev))))
                       0)]
    [:div {:class "flex flex-col pb-24"}
     [c/seletor-mes]
     [:div {:class "flex flex-col gap-3 p-3"}
      ;; Card principal
      [:div {:class "bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-4 text-white shadow-md"}
       [:p {:class "text-blue-100 text-xs mb-0.5"} "Saldo Total"]
       [:p {:class "text-3xl font-bold mb-3"} (u/formatar-valor-br saldo-total)]
       ;; Barra de progresso
       [:div {:class "w-full bg-blue-400 rounded-full h-1.5 mb-3"}
        [:div {:class "h-1.5 rounded-full bg-white transition-all"
               :style {:width (str pct-pago "%")}}]]
       ;; 3 números em linha
       [:div {:class "grid grid-cols-3 gap-2 text-center"}
        [:div
         [:p {:class "text-blue-100 text-xs"} "Entradas"]
         [:p {:class "text-white font-semibold text-sm"} (u/formatar-valor-br total-entr)]]
        [:div
         [:p {:class "text-blue-100 text-xs"} "Pago"]
         [:p {:class "text-white font-semibold text-sm"} (str (u/formatar-valor-br total-pago) " (" pct-pago "%)")]]
        [:div
         [:p {:class "text-blue-100 text-xs"} "Previsto"]
         [:p {:class "text-white font-semibold text-sm"} (u/formatar-valor-br total-prev)]]]
       ;; Meses anteriores
       [:div {:class "mt-2 pt-2 border-t border-blue-400 flex justify-between"}
        [:p {:class "text-blue-100 text-xs"} "Meses anteriores"]
        [:p {:class "text-white text-xs font-medium"} (u/formatar-valor-br saldo-ant)]]]

      ;; Cards por pessoa
      [:div {:class "grid grid-cols-2 gap-2"}
       (for [pid pessoas-ids]
         ^{:key pid}
         [card-pessoa pid despesas-mes entradas-mes])]]]))