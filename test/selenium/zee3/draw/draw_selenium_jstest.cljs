(ns zee3.draw.draw-selenium-jstest
   (:require [zee3.draw.core :as draw]
             [zee3.draw.shapes :as shapes]))

(defn setup-selenium-tests []
   (draw/stage {:id "stage" :x 0 :y 0 :width 600 :height 400})
   (setup-circle)
   (setup-rectangle))

(defn set-output [v]
      (set! (.-innerHTML (.getElementById js/document "test_output")) v))

(defn setup-circle []
   (shapes/circle "stage" {:id "crcl1" 
                       :centerX 50 
                       :centerY 50 
                       :radius 50
                       :fillStyle "#6666CC"
                       :mouseup (fn[] (set-output "crcl1"))}))

(defn setup-rectangle []
      (shapes/rectangle "stage" {:id "rect1"
                                 :x 100
                                 :y 0
                                 :width 50
                                 :height 50
                                 :fillStyle "#6666CC"
                                 :mouseup (fn[] (set-output "rect1"))}))
