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
   :erro                 nil
   :configuracoes {"cor_andre"    "#3B82F6"
                   "cor_bianca"   "#EC4899"
                   "cor_fernanda" "#14B8A6"
                   "cor_bruna"    "#F97316"}})