(ns casa-financas.views.despesas
  (:require [re-frame.core :as rf]
            [reagent.core :as r]
            [casa-financas.utils :as u]
            [casa-financas.components.comum :as c]))

(defn item-despesa [despesa]
  (let [status (u/despesa-status despesa)
        [bg-class border-class] (case status
                                  :paga     ["bg-green-30" "border-green-100"]
                                  :vencida  ["bg-red-50"   "border-red-200"]
                                  :pendente ["bg-white"    "border-gray-100"])]
    [:div {:class (str "rounded-xl border overflow-hidden mb-2 shadow-sm " bg-class " " border-class)}
     ;; Barra divisão no topo
     [c/barra-divisao (:divisao despesa)]
     ;; Conteúdo
     [:div {:class    "flex items-center gap-2 px-3 py-2.5"
            :on-click #(rf/dispatch [:abrir-modal :editar-despesa despesa])}
      ;; Dia
      [:div {:class "flex flex-col items-center w-6 flex-shrink-0"}
       [:span {:class "text-xs font-bold text-gray-700 leading-none"} (:dia_do_mes despesa)]]
      [:div {:class "w-px h-8 bg-gray-200 flex-shrink-0"}]
      ;; Info principal
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
        [:span {:class "text-xs text-gray-400"}
         (if (= (:forma_pagamento despesa) "credito") "cred" "pix")]
        (when (= status :vencida)
          [:span {:class "text-xs text-red-500 font-medium"} "atrasada"])]]
      ;; Valor + checkbox
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
      (let [despesas-mes       @(rf/subscribe [:despesas-do-mes])
            templates          @(rf/subscribe [:templates])
            despesas-filtradas (case @filtro
                                 :todas     despesas-mes
                                 :pendentes (filter #(not (:pago %)) despesas-mes)
                                 :pagas     (filter :pago despesas-mes))]
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
          (if (empty? despesas-filtradas)
            [:div {:class "flex flex-col items-center justify-center py-12 text-gray-400"}
             [:span {:class "text-4xl mb-3"} "💸"]
             [:p {:class "font-medium"} "Nenhuma despesa"]
             [:p {:class "text-sm mb-4"} "Toque no + para adicionar"]
             (when (seq templates)
               [:button {:class    "px-4 py-2 bg-blue-50 text-blue-600 rounded-xl text-sm font-medium"
                         :on-click #(rf/dispatch [:importar-templates])}
                "📋 Importar Templates"])]
            [:div
             (for [d (sort-by :dia_do_mes despesas-filtradas)]
               ^{:key (:id d)}
               [item-despesa d])
             (when (seq templates)
               [:button {:class    "w-full mt-2 py-2.5 rounded-xl text-sm font-medium text-blue-600 bg-blue-50 border border-blue-100"
                         :on-click #(rf/dispatch [:importar-templates])}
                "📋 Importar Templates do Mês"])])]]))))