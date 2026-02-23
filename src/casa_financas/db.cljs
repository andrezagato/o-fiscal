(ns casa-financas.db)

(def default-db
  {:usuario-atual        nil
   :pessoa-ativa         nil
   :aba-ativa            :dashboard
   :mes-atual            {:ano  (.getFullYear (js/Date.))
                          :mes  (inc (.getMonth (js/Date.)))}
   :despesas             []
   :entradas             []
   :templates            []
   :categorias           []
   :despesas-historico   []
   :entradas-historico   []
   :modal                nil
   :loading              false
   :erro                 nil})