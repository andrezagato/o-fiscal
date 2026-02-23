(ns casa-financas.core
  (:require [reagent.dom :as rdom]
            [re-frame.core :as rf]
            ["lucide-react" :refer [Home Receipt Wallet FileText Settings]]
            [casa-financas.events]
            [casa-financas.subs]
            [casa-financas.views.login :as login]
            [casa-financas.views.dashboard :as dashboard]
            [casa-financas.views.despesas :as despesas]
            [casa-financas.views.entradas :as entradas]
            [casa-financas.views.templates :as templates]
            [casa-financas.views.modais :as modais]
            [casa-financas.views.settings :as settings]
            [casa-financas.views.importar :as importar]))

(defn nav-item [aba icone label]
  (let [aba-ativa @(rf/subscribe [:aba-ativa])
        ativo?    (= aba-ativa aba)
        cor       (if ativo? "#3B82F6" "#9CA3AF")]
    [:button {:class    "flex flex-col items-center justify-center flex-1 py-2 transition-colors"
              :on-click #(rf/dispatch [:set-aba aba])}
     [:> icone {:size 22 :color cor :strokeWidth 1.8}]
     [:span {:class (str "text-xs mt-0.5 font-medium "
                         (if ativo? "text-blue-500" "text-gray-400"))}
      label]]))

(defn nav-bottom []
  [:div {:class "fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex items-center z-40 shadow-sm"
         :style {:padding-bottom "calc(env(safe-area-inset-bottom) + 16px)"
                  :padding-top "8px"}}
   [nav-item :dashboard Home "Início"]
   [nav-item :despesas Receipt "Despesas"]
   [nav-item :entradas Wallet "Entradas"]
   [nav-item :templates FileText "Templates"]
   [nav-item :settings Settings "Config"]])

(defn botao-flutuante []
  [:button {:class    "fixed bottom-24 right-4 w-12 h-12 bg-blue-500 rounded-full shadow-lg flex items-center justify-center text-white text-2xl z-40 active:bg-blue-600 transition-colors"
            :on-click #(rf/dispatch [:abrir-modal :nova-acao {}])}
   "+"])

(defn tela-ativa []
  (let [aba @(rf/subscribe [:aba-ativa])]
    (case aba
      :dashboard [dashboard/dashboard]
      :despesas  [despesas/despesas]
      :entradas  [entradas/entradas]
      :templates [templates/templates]
      :importar  [importar/importar]
      :settings  [settings/settings]
      [dashboard/dashboard])))

(defn app-autenticado []
  [:div {:class "min-h-screen bg-gray-50 max-w-lg mx-auto relative"}
   [tela-ativa]
   [nav-bottom]
   [botao-flutuante]
   [modais/modais]])

(defn app []
  (let [usuario @(rf/subscribe [:usuario-atual])
        loading @(rf/subscribe [:loading])]
    (cond
      loading
      [:div {:class "min-h-screen flex items-center justify-center bg-blue-500"}
       [:div {:class "flex flex-col items-center gap-4"}
        [:div {:class "w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"}]
        [:p {:class "text-white font-medium"} "Carregando..."]]]

      usuario
      [app-autenticado]

      :else
      [login/login])))

(defn init []
  (rf/dispatch-sync [:initialize-db])
  (rdom/render [app] (.getElementById js/document "app")))