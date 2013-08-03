(ns hello-clojurescript
    (:require [zee3.draw.core :as draw]
              [zee3.draw.shapes :as shape]
              [zee3.draw.defaults :as config]))

(def cnt (atom 0))
(defn handle-click []
  (draw/stage {:id (str "myStage" (swap! cnt inc)) :x 0 :y 0 :width 600 :height 300})
  (let [stage (str "myStage" @cnt)]
    (shape/rectangle stage {:mouseup (fn [] (js/alert "test rectangle"))})
    (shape/circle stage {:centerX 500 :centerY 200 :mouseup (fn [] (js/alert "test circle"))})
    (shape/circle stage {:centerX 200 :centerY 200 :mousemove (fn [] (js/alert "test"))})
))

(def clickable (.getElementById js/document "clickable"))
(.addEventListener clickable "click" handle-click)
