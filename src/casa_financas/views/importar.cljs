(ns casa-financas.views.importar
  (:require [re-frame.core :as rf]
            [reagent.core :as r]
            [casa-financas.utils :as u]
            [casa-financas.components.comum :as c]))

(defn parse-valor [s]
  (when (and s (not= s ""))
    (-> s
        (clojure.string/replace "R$ " "")
        (clojure.string/replace "." "")
        (clojure.string/replace "," ".")
        (clojure.string/trim)
        js/parseFloat)))

(defn parse-data [s]
  (when (and s (not= s ""))
    (let [parts (clojure.string/split (clojure.string/trim s) #"/")]
      (when (= 3 (count parts))
        (let [dia (get parts 0)
              mes (get parts 1)
              ano (get parts 2)]
          (str ano "-" mes "-" dia))))))

(defn parse-mes-ano [data-str]
  (when data-str
    (let [parts (clojure.string/split data-str #"-")]
      {:ano (int (get parts 0))
       :mes (int (get parts 1))
       :dia (int (get parts 2))})))

(defn parse-pagador [s]
  (case (clojure.string/trim (clojure.string/lower-case (or s "")))
    "conjunta" "conjunta"
    "casa"     "conjunta"
    "andre"    "andre"
    "bia"      "bianca"
    "bianca"   "bianca"
    "fernanda" "fernanda"
    "bruna"    "bruna"
    "conjunta"))

(defn parse-usuario [s]
  (case (clojure.string/trim (clojure.string/lower-case (or s "")))
    "andre"    "andre"
    "bia"      "bianca"
    "bianca"   "bianca"
    "fernanda" "fernanda"
    "bruna"    "bruna"
    "andre"))

(defn parse-metodo [s]
  (let [s (clojure.string/lower-case (clojure.string/trim (or s "")))]
    (if (clojure.string/includes? s "cred") "credito" "pix")))

(defn parse-divisao [s]
  (let [s     (clojure.string/trim (or s "25/25/25/25"))
        parts (clojure.string/split s #"/")]
    (if (= 4 (count parts))
      {:andre    (int (get parts 0))
       :bianca   (int (get parts 1))
       :fernanda (int (get parts 2))
       :bruna    (int (get parts 3))}
      (u/divisao-padrao))))

(defn parse-csv [texto]
  (let [linhas (clojure.string/split-lines (clojure.string/trim texto))
        linhas (filter #(not= % "") linhas)]
    (rest linhas))) ;; remove cabeçalho

(defn parse-linha-despesa [linha]
  (let [cols (clojure.string/split linha #",(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)")
        cols (mapv #(clojure.string/replace % "\"" "") cols)
        data-str (parse-data (get cols 0))
        data-map (parse-mes-ano data-str)]
    (when (and data-str data-map)
      {:id              (u/gerar-id)
       :descricao       (clojure.string/trim (get cols 1 ""))
       :valor           (parse-valor (get cols 2))
       :forma_pagamento (parse-metodo (get cols 3))
       :pagadores       [(parse-pagador (get cols 4))]
       :divisao         (parse-divisao (get cols 5))
       :pago            (= "sim" (clojure.string/lower-case
                                  (clojure.string/trim (get cols 6 ""))))
       :ano             (:ano data-map)
       :mes             (:mes data-map)
       :dia_do_mes      (:dia data-map)})))

(defn parse-linha-entrada [linha]
  (let [cols     (clojure.string/split linha #",(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)")
        cols     (mapv #(clojure.string/replace % "\"" "") cols)
        data-str (parse-data (get cols 0))]
    (when data-str
      {:id        (u/gerar-id)
       :pessoa_id (parse-usuario (get cols 1))
       :valor     (parse-valor (get cols 2))
       :data      data-str
       :descricao ""})))

(defn tabela-preview-despesas [despesas]
  [:div {:class "overflow-x-auto"}
   [:table {:class "w-full text-xs"}
    [:thead
     [:tr {:class "border-b border-gray-200"}
      [:th {:class "text-left py-1.5 text-gray-500 font-medium"} "Data"]
      [:th {:class "text-left py-1.5 text-gray-500 font-medium"} "Descrição"]
      [:th {:class "text-right py-1.5 text-gray-500 font-medium"} "Valor"]
      [:th {:class "text-center py-1.5 text-gray-500 font-medium"} "Pago"]]]
    [:tbody
     (for [d despesas]
       ^{:key (:id d)}
       [:tr {:class "border-b border-gray-50"}
        [:td {:class "py-1.5 text-gray-600"}
         (str (:dia_do_mes d) "/" (:mes d) "/" (:ano d))]
        [:td {:class "py-1.5 text-gray-800 max-w-24 truncate"} (:descricao d)]
        [:td {:class "py-1.5 text-right text-gray-800"} (u/formatar-valor-br (:valor d))]
        [:td {:class "py-1.5 text-center"}
         (if (:pago d)
           [:span {:class "text-green-500"} "✓"]
           [:span {:class "text-gray-300"} "–"])]])]]])

(defn tabela-preview-entradas [entradas]
  [:div {:class "overflow-x-auto"}
   [:table {:class "w-full text-xs"}
    [:thead
     [:tr {:class "border-b border-gray-200"}
      [:th {:class "text-left py-1.5 text-gray-500 font-medium"} "Data"]
      [:th {:class "text-left py-1.5 text-gray-500 font-medium"} "Pessoa"]
      [:th {:class "text-right py-1.5 text-gray-500 font-medium"} "Valor"]]]
    [:tbody
     (for [e entradas]
       ^{:key (:id e)}
       [:tr {:class "border-b border-gray-50"}
        [:td {:class "py-1.5 text-gray-600"} (:data e)]
        [:td {:class "py-1.5"}
         [c/chip-pessoa (:pessoa_id e)]]
        [:td {:class "py-1.5 text-right text-green-600 font-medium"}
         (u/formatar-valor-br (:valor e))]])]]])

(defn importar []
  (let [aba          (r/atom :despesas)
        csv-texto    (r/atom "")
        preview      (r/atom nil)
        importando   (r/atom false)
        importado    (r/atom false)]
    (fn []
      [:div {:class "flex flex-col pb-24"}
       [c/seletor-mes]
       [:div {:class "p-3 space-y-3"}

        ;; Título
        [:div {:class "bg-white rounded-2xl p-4 border border-gray-100 shadow-sm"}
         [:h2 {:class "font-bold text-gray-800 mb-1"} "Importar do CSV"]
         [:p {:class "text-xs text-gray-500"}
          "Cole o conteúdo do CSV exportado do Google Sheets. Inclua o cabeçalho."]]

        ;; Toggle despesas/entradas
        [:div {:class "flex gap-2 p-1.5 bg-white rounded-2xl border border-gray-100 shadow-sm"}
         [:button {:class    (str "flex-1 py-1.5 rounded-xl text-sm font-medium transition-colors "
                                  (if (= @aba :despesas)
                                    "bg-blue-500 text-white"
                                    "text-gray-500"))
                   :on-click #(do (reset! aba :despesas)
                                  (reset! preview nil)
                                  (reset! csv-texto "")
                                  (reset! importado false))}
          "💸 Despesas"]
         [:button {:class    (str "flex-1 py-1.5 rounded-xl text-sm font-medium transition-colors "
                                  (if (= @aba :entradas)
                                    "bg-blue-500 text-white"
                                    "text-gray-500"))
                   :on-click #(do (reset! aba :entradas)
                                  (reset! preview nil)
                                  (reset! csv-texto "")
                                  (reset! importado false))}
          "💰 Entradas"]]

        ;; Área de texto CSV
        [:div {:class "bg-white rounded-2xl border border-gray-100 shadow-sm p-3"}
         [:label {:class "text-xs font-medium text-gray-500 mb-1.5 block"}
          (if (= @aba :despesas)
            "Cole o CSV de Despesas aqui:"
            "Cole o CSV de Entradas aqui:")]
         [:textarea {:class       "w-full h-32 border border-gray-200 rounded-xl px-3 py-2 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
                     :placeholder (if (= @aba :despesas)
                                    "Gastos,Descrição,Valor,Método,Pago Por,Forma de Divisão,Quitado\n23/02/2026,Mercado,\"R$ 150,00\",Crédito,Conjunta,25/25/25/25,"
                                    "Entradas,Usuário,Valor\n05/02/2026,Andre,\"R$ 3.000,00\"")
                     :value       @csv-texto
                     :on-change   #(do (reset! csv-texto (.. % -target -value))
                                       (reset! preview nil)
                                       (reset! importado false))}]]

        ;; Botão preview
        (when (not= @csv-texto "")
          [c/botao-secundario "👁 Visualizar Preview"
           #(let [linhas (parse-csv @csv-texto)
                  parsed (if (= @aba :despesas)
                           (filterv some? (mapv parse-linha-despesa linhas))
                           (filterv some? (mapv parse-linha-entrada linhas)))]
              (reset! preview parsed))
           {:class ""}])

        ;; Preview
        (when @preview
          [:div {:class "bg-white rounded-2xl border border-gray-100 shadow-sm p-3"}
           [:div {:class "flex justify-between items-center mb-2"}
            [:p {:class "text-xs font-medium text-gray-600"}
             (str (count @preview) " registros encontrados")]
            (when @importado
              [:span {:class "text-xs text-green-600 font-medium"} "✓ Importado!"])]
           (if (= @aba :despesas)
             [tabela-preview-despesas @preview]
             [tabela-preview-entradas @preview])
           ;; Botão importar
           (when (and (seq @preview) (not @importado))
             [:div {:class "mt-3"}
              [c/botao-primario
               (if @importando "Importando..." (str "⬆ Importar " (count @preview) " registros"))
               (let [tipo @aba]
                 #(when (not @importando)
                    (reset! importando true)
                    (doseq [item @preview]
                      (if (= tipo :despesas)
                        (rf/dispatch [:salvar-despesa item])
                        (rf/dispatch [:salvar-entrada item])))
                    (js/setTimeout
                     (fn []
                       (reset! importando false)
                       (reset! importado true)
                       (rf/dispatch [:carregar-dados]))
                     2000)))
               {:disabled @importando}]])])]])))