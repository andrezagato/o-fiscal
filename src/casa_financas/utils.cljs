(ns casa-financas.utils
  (:require [reagent.core :as r]))

(def meses-nomes
  ["" "Janeiro" "Fevereiro" "Março" "Abril" "Maio" "Junho"
   "Julho" "Agosto" "Setembro" "Outubro" "Novembro" "Dezembro"])

(defn mes-nome [m]
  (get meses-nomes m ""))

(defn formatar-valor-br [v]
  (let [formatted (.toLocaleString (or v 0) "pt-BR"
                                   #js {:minimumFractionDigits 2
                                        :maximumFractionDigits 2})]
    (str "R$ " formatted)))

(defn dia-hoje []
  (.getDate (js/Date.)))

(defn mes-hoje []
  (inc (.getMonth (js/Date.))))

(defn ano-hoje []
  (.getFullYear (js/Date.)))

(defn despesa-status [despesa]
  (cond
    (:pago despesa) :paga
    (< (:dia_do_mes despesa) (dia-hoje)) :vencida
    :else :pendente))

(defn status-cor [status]
  (case status
    :paga     "bg-green-50 border-green-200"
    :vencida  "bg-red-50 border-red-200"
    :pendente "bg-amber-50 border-amber-200"))

(def cores-pessoas (r/atom {"cor_andre"    "#3B82F6"
                                "cor_bianca"   "#EC4899"
                                "cor_fernanda" "#14B8A6"
                                "cor_bruna"    "#F97316"}))

(defn reset-cores! [configs]
  (reset! cores-pessoas configs))

(defn pessoa-cor [pessoa-id]
  (case pessoa-id
    "conjunta" "#8B5CF6"
    (get @cores-pessoas (str "cor_" pessoa-id)
         (case pessoa-id
           "andre"    "#3B82F6"
           "bianca"   "#EC4899"
           "fernanda" "#14B8A6"
           "bruna"    "#F97316"
           "#9CA3AF"))))

(defn pessoa-nome [pessoa-id]
  (case pessoa-id
    "andre"    "André"
    "bianca"   "Bianca"
    "fernanda" "Fernanda"
    "bruna"    "Bruna"
    "conjunta" "Conta Conjunta"
    "?"))

(defn pessoa-inicial [pessoa-id]
  (case pessoa-id
    "andre"    "A"
    "bianca"   "Bi"
    "fernanda" "F"
    "bruna"    "Br"
    "conjunta" "CC"
    "?"))

(defn gerar-id []
  (str (random-uuid)))

(defn divisao-padrao []
  {:andre 25 :bianca 25 :fernanda 25 :bruna 25})

(defn soma-divisao [divisao]
  (reduce + 0 (vals divisao)))

(defn mes-fatura [dia mes ano]
  (if (<= dia 15)
    {:mes mes :ano ano :mes_compra mes :ano_compra ano}
    (if (= mes 12)
      {:mes 1 :ano (inc ano) :mes_compra mes :ano_compra ano}
      {:mes (inc mes) :ano ano :mes_compra mes :ano_compra ano})))