(ns hello-clojurescript
    (:require [zee3.draw.core :as draw]))
(def cnt (atom 0))
(defn handle-click []
      (draw/stage {:id (str "myStage" (swap! cnt inc)) :x 0 :y 0 :width 300 :height 300})
      (let [id (str "myStage" @cnt)]
       (draw/rectangle id {:mouseup (fn [] (js/alert "test"))})))

(def clickable (.getElementById js/document "clickable"))
(.addEventListener clickable "click" handle-click)
