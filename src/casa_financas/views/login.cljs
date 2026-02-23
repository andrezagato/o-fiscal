(ns casa-financas.views.login
  (:require [re-frame.core :as rf]
            [reagent.core :as r]
            [casa-financas.components.comum :as c]))

(defn login []
  (let [form  (r/atom {:email "" :senha ""})
        erro  @(rf/subscribe [:erro])
        loading @(rf/subscribe [:loading])]
    (fn []
      [:div {:class "min-h-screen bg-gradient-to-br from-blue-500 to-blue-700 flex flex-col items-center justify-center p-6"}
       [:div {:class "w-full max-w-sm"}
        ;; Logo
        [:div {:class "text-center mb-8"}
         [:img {:src   "/icons/icon-192.png"
                :class "w-20 h-20 rounded-2xl shadow-lg mb-3 mx-auto"}]
         [:h1 {:class "text-3xl font-bold text-white"} "O Fiscal"]
         [:p {:class "text-blue-200 mt-1"} "Controle de Gastos Compartilhados"]]

        ;; Card de login
        [:div {:class "bg-white rounded-2xl p-6 shadow-xl"}
         [:h2 {:class "font-bold text-gray-800 text-lg mb-4"} "Entrar"]

         ;; Erro
         (when erro
           [:div {:class "bg-red-50 border border-red-200 rounded-xl p-3 mb-4"}
            [:p {:class "text-red-600 text-sm"} erro]])

         ;; Email
         [:div {:class "mb-4"}
          [:label {:class "text-sm font-medium text-gray-700"} "Email"]
          [:input {:type        "email"
                   :class       "mt-1 w-full border border-gray-200 rounded-xl px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                   :placeholder "seu@email.com"
                   :value       (:email @form)
                   :on-change   #(swap! form assoc :email (.. % -target -value))}]]

         ;; Senha
         [:div {:class "mb-6"}
          [:label {:class "text-sm font-medium text-gray-700"} "Senha"]
          [:input {:type        "password"
                   :class       "mt-1 w-full border border-gray-200 rounded-xl px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                   :placeholder "••••••••"
                   :value       (:senha @form)
                   :on-change   #(swap! form assoc :senha (.. % -target -value))
                   :on-key-down #(when (= (.-key %) "Enter")
                                   (rf/dispatch [:login (:email @form) (:senha @form)]))}]]

         ;; Botão
         [c/botao-primario
          (if loading "Entrando..." "Entrar")
          #(rf/dispatch [:login (:email @form) (:senha @form)])
          {:disabled loading}]]

        ;; Rodapé
        [:p {:class "text-center text-blue-200 text-xs mt-6"}
         "André · Bianca · Fernanda · Bruna"]]])))