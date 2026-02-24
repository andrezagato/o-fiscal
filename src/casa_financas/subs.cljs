(ns casa-financas.subs
  (:require [re-frame.core :as rf]))

(rf/reg-sub :aba-ativa     (fn [db _] (:aba-ativa db)))
(rf/reg-sub :mes-atual     (fn [db _] (:mes-atual db)))
(rf/reg-sub :usuario-atual (fn [db _] (:usuario-atual db)))
(rf/reg-sub :pessoa-ativa  (fn [db _] (:pessoa-ativa db)))
(rf/reg-sub :modal         (fn [db _] (:modal db)))
(rf/reg-sub :loading       (fn [db _] (:loading db)))
(rf/reg-sub :erro          (fn [db _] (:erro db)))
(rf/reg-sub :despesas      (fn [db _] (:despesas db)))
(rf/reg-sub :entradas      (fn [db _] (:entradas db)))
(rf/reg-sub :templates     (fn [db _] (:templates db)))
(rf/reg-sub :categorias    (fn [db _] (:categorias db)))
(rf/reg-sub :despesas-historico (fn [db _] (:despesas-historico db)))
(rf/reg-sub :entradas-historico (fn [db _] (:entradas-historico db)))

(defn mes-estritamente-anterior? [ano mes ano-ref mes-ref]
  (or (< ano ano-ref)
      (and (= ano ano-ref) (< mes mes-ref))))

(rf/reg-sub
 :despesas-do-mes
 :<- [:despesas]
 :<- [:mes-atual]
 (fn [[despesas mes] _]
   (filter (fn [d]
             (and (= (:ano d) (:ano mes))
                  (= (:mes d) (:mes mes))))
           despesas)))

(rf/reg-sub
 :entradas-do-mes
 :<- [:entradas]
 :<- [:mes-atual]
 (fn [[entradas mes] _]
   (filter (fn [e]
             (when (:data e)
               (let [parts (clojure.string/split (:data e) #"-")
                     ano   (int (first parts))
                     m     (int (second parts))]
                 (and (= ano (:ano mes))
                      (= m (:mes mes))))))
           entradas)))

(rf/reg-sub
 :total-previsto-mes
 :<- [:despesas-do-mes]
 (fn [despesas _]
   (reduce + 0 (map :valor despesas))))

(rf/reg-sub
 :total-pago-mes
 :<- [:despesas-do-mes]
 (fn [despesas _]
   (reduce + 0 (map :valor (filter :pago despesas)))))

(rf/reg-sub
 :total-entradas-mes
 :<- [:entradas-do-mes]
 (fn [entradas _]
   (reduce + 0 (map :valor entradas))))

(rf/reg-sub
 :saldo-acumulado-anterior
 :<- [:despesas-historico]
 :<- [:entradas-historico]
 :<- [:mes-atual]
 (fn [[despesas entradas mes] _]
   (let [desp-ant (filter #(mes-estritamente-anterior?
                             (:ano %) (:mes %)
                             (:ano mes) (:mes mes))
                          despesas)
         entr-ant (filter (fn [e]
                            (when (:data e)
                              (let [parts (clojure.string/split (:data e) #"-")
                                    ano   (int (first parts))
                                    m     (int (second parts))]
                                (mes-estritamente-anterior?
                                  ano m (:ano mes) (:mes mes)))))
                          entradas)
         total-entr (reduce + 0 (map :valor entr-ant))
         total-desp (reduce + 0 (map :valor desp-ant))]
     (- total-entr total-desp))))

(rf/reg-sub
 :saldo-acumulado-anterior-pessoa
 (fn [db [_ pessoa-id]]
   (let [mes      (:mes-atual db)
         despesas (filter #(mes-estritamente-anterior?
                            (:ano %) (:mes %)
                            (:ano mes) (:mes mes))
                          (:despesas-historico db))
         entradas (filter (fn [e]
                            (when (:data e)
                              (let [parts (clojure.string/split (:data e) #"-")
                                    ano   (int (first parts))
                                    m     (int (second parts))]
                                (mes-estritamente-anterior?
                                 ano m (:ano mes) (:mes mes)))))
                          (:entradas-historico db))
         total-entr (reduce + 0
                            (map :valor
                                 (filter #(= (:pessoa_id %) pessoa-id) entradas)))
         debitos    (reduce + 0
                            (map (fn [d]
                                   (let [pct (get (:divisao d) (keyword pessoa-id) 0)]
                                     (* (:valor d) (/ pct 100))))
                                 despesas))]
     (- total-entr debitos))))

(rf/reg-sub
 :configuracoes
 (fn [db _]
   (:configuracoes db)))

(rf/reg-sub
 :cor-pessoa
 :<- [:configuracoes]
 (fn [configs [_ pessoa-id]]
   (get configs (str "cor_" pessoa-id)
        (case pessoa-id
          "andre"    "#3B82F6"
          "bianca"   "#EC4899"
          "fernanda" "#14B8A6"
          "bruna"    "#F97316"
          "#9CA3AF"))))