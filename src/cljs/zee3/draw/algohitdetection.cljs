(ns zee3.draw.algohitdetection
   (:require [zee3.draw.shapes :as shape]
             [zee3.draw.defaults :as defaults]))

(defn intersects-circle [shape point]
	(let [{:keys [centerX centerY radius]} shape {:keys [x y]} point]
		(let [ distX (- x centerX) distY (- y centerY)]
		(< (+ (* distX distX) (* distY distY)) (* radius radius))
	)))

(defn intersects-rectangle [shape point]
	(let [{:keys [x y width height]} shape {mouse-x :x mouse-y :y} point]
		(and (> mouse-x x) (< mouse-x (+ x width)) (> mouse-y y) (< mouse-y (+ y height))
	)))

(defn intersects-rounded-rectangle [shape point]
      (comment "should eventually try to detected round corners as well")
      (if (intersects-rectangle shape point)
      	  (true)
	  (false)))
