(ns casa-financas.config)

(def pessoas
  [{:id "andre"    :nome "André"    :cor "#3B82F6" :inicial "A"}
   {:id "bianca"   :nome "Bianca"   :cor "#EC4899" :inicial "B"}
   {:id "fernanda" :nome "Fernanda" :cor "#14B8A6" :inicial "F"}
   {:id "bruna"    :nome "Bruna"    :cor "#F97316" :inicial "B"}])

(def pessoas-map
  (into {} (map (fn [p] [(:id p) p]) pessoas)))

(def supabase-url "https://tilsvgujcjrexrmoktgv.supabase.co")
(def supabase-anon-key "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRpbHN2Z3VqY2pyZXhybW9rdGd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE2NDM2MTksImV4cCI6MjA4NzIxOTYxOX0.4Dd-68_2kx4sqgVH8qBFc8pvhgTczZtgQnTsSyAeIkA")