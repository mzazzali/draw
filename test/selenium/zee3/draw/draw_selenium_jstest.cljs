(ns zee3.draw.draw-selenium-jstest
   (:require [zee3.draw.core :as draw]
             [zee3.draw.shapes :as shapes]))

(defn setup-selenium-tests []
   (draw/stage {:id "stage" :x 0 :y 0 :width 600 :height 400})
   (setup-circle-mouseup)
   (setup-circle-mousemove)
   (setup-circle-mousedown)
   (setup-rectangle-mouseup)
   (setup-rectangle-mousemove)
   (setup-rectangle-mousedown)
   (setup-text-mouseup)
   (setup-text-mouseover)
   (setup-text-mousedown))

(defn set-output [v]
      (set! (.-innerHTML (.getElementById js/document "test_output")) v))

(defn setup-circle-mouseup []
   (shapes/circle "stage" {:id "crcl-mouseup"
                       :centerX 25
                       :centerY 25
                       :radius 24
                       :fillStyle "#6611AA"
                       :mouseup (fn[] (set-output "crcl-mouseup"))}))

(defn setup-circle-mousemove []
   (shapes/circle "stage" {:id "crcl-mousemove"
                       :centerX 75
                       :centerY 25
                       :radius 24
                       :fillStyle "#6622BB"
                       :mousemove (fn[] (set-output "crcl-mousemove"))}))

(defn setup-circle-mousedown []
   (shapes/circle "stage" {:id "crcl-mousedown"
                       :centerX 125
                       :centerY 25
                       :radius 24
                       :fillStyle "#6633CC"
                       :mousedown (fn[] (set-output "crcl-mousedown"))}))

(defn setup-rectangle-mouseup []
      (shapes/rectangle "stage" {:id "rect-mouseup"
                                 :x 0
                                 :y 50
                                 :width 49
                                 :height 49
                                 :fillStyle "#6644DD"
                                 :mouseup (fn[] (set-output "rect-mouseup"))}))

(defn setup-rectangle-mousemove []
      (shapes/rectangle "stage" {:id "rect-mousemove"
                                 :x 50
                                 :y 50
                                 :width 49
                                 :height 49
                                 :fillStyle "#6655EE"
                                 :mousemove (fn[] (set-output "rect-mousemove"))}))

(defn setup-rectangle-mousedown []
      (shapes/rectangle "stage" {:id "rect-mousedown"
                                 :x 100
                                 :y 50
                                 :width 49
                                 :height 49
                                 :fillStyle "#6666FF"
                                 :mousedown (fn[] (set-output "rect-mousedown"))}))

(defn setup-text-mouseup []
      (shapes/rectangle "stage" {:id "text-mouseup"
                                 :x 0
                                 :y 100
                                 :font "bold 49px Arial"
                                 :fillStyle "#6666FF"
                                 :mousedown (fn[] (set-output "text-mouseup"))}))

(defn setup-text-mouseover []
      (shapes/rectangle "stage" {:id "text-mouseover"
                                 :x 50
                                 :y 100
                                 :font "bold 49px Arial"
                                 :fillStyle "#6666FF"
                                 :mousedown (fn[] (set-output "text-mouseover"))}))
(defn setup-text-mousedown []
      (shapes/rectangle "stage" {:id "text-mousedown"
                                 :x 100
                                 :y 100
                                 :font "bold 49px Arial"
                                 :fillStyle "#6666FF"
                                 :mousedown (fn[] (set-output "text-mousedownp"))}))
