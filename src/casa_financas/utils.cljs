(ns casa-financas.utils)

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

(defn pessoa-cor [pessoa-id]
  (case pessoa-id
    "andre"      "#3B82F6"
    "bianca"     "#EC4899"
    "fernanda"   "#14B8A6"
    "bruna"      "#F97316"
    "conjunta"   "#8B5CF6"
    "#9CA3AF"))

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