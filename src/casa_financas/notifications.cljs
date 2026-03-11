(ns casa-financas.notifications
  (:require [casa-financas.config :as cfg]))

(defn url-b64->uint8array [base64-string]
  (let [padding (apply str (repeat (mod (- 4 (mod (count base64-string) 4)) 4) "="))
        base64  (-> (str base64-string padding)
                    (.replace #"-" "+")
                    (.replace #"_" "/"))
        raw     (.atob js/window base64)
        arr     (js/Uint8Array. (.-length raw))]
    (doseq [i (range (.-length raw))]
      (aset arr i (.charCodeAt raw i)))
    arr))

(defn supported? []
  (and (exists? js/navigator)
       (.-serviceWorker js/navigator)
       (exists? js/Notification)
       (exists? js/PushManager)))

(defn permission []
  (when (exists? js/Notification)
    (.-permission js/Notification)))

(defn setup-push! [on-success on-error]
  (if-not (supported?)
    (on-error "não suportado")
    (-> (.requestPermission js/Notification)
        (.then (fn [result]
                 (if (not= result "granted")
                   (on-error (str "Permissão negada: " result))
                   (-> (.register (.-serviceWorker js/navigator) "/sw.js")
                       (.then (fn [reg]
                                (-> (.subscribe (.-pushManager reg)
                                                #js {:userVisibleOnly      true
                                                     :applicationServerKey (url-b64->uint8array cfg/vapid-public-key)})
                                    (.then (fn [sub]
                                             (on-success (js->clj (.toJSON sub) :keywordize-keys false))))
                                    (.catch on-error))))
                       (.catch on-error)))))
        (.catch on-error))))
