(ns zee3.draw.core
  (:require [zee3.draw.defaults :as config]
            [zee3.draw.shapes :as shape]))

(defn stage [config]
  (let [ {:keys [id width height]} config e (.createElement js/document "canvas")]
    (set! (.-id e) id)
    (set! (.-width e) width)
    (set! (.-height e) height)
    (.appendChild (aget (.getElementsByTagName js/document "body") 0) e)
    (setupEvents e)
    (swap! shape/entities conj (assoc config :type "stage" :ref e))
    (let [ctx (.getContext e "2d")]
      (swap! shape/contexts assoc id ctx)
      ctx)))


(defn setupEvents [stage]
      (.addEventListener stage "mouseup" handle-mouse-up)
      (.addEventListener stage "mousemove" (fn[event]))
      (.addEventListener stage "mousedown" (fn[event]))
      (.addEventListener stage "touchstart" (fn[event]))
      (.addEventListener stage "touchend" handle-mouse-up)
      (.addEventListener stage "touchmove" (fn[event])))

(defn handle-mouse-up [event]
      (let [x (.-clientX event) y (.-clientY event)]
      	(let [k (filter #(and (not= "stage" (get % :type)) (intersects % {:x x :y y}) (contains? % :mouseup)) @shape/entities)]
		(doseq [{:keys [mouseup]} k] (mouseup)))))

(defn mouse-down [entities, point] 
	(let [k (filter #(and (intersects % point) (contains? % :mouse-down)) @shape/entities)]
		(map #((get % :mouse-down)) k)))

(defn intersects [shape point]
	(if (contains? shape :width)
		(intersects-rectangle shape (absolute-point (get shape :stage) point)
		(intersects-circle shape (absolute-point (get shape :stage) point)))))

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

(defn absolute-point [stage point]
      (let [{:keys [ref]} (first (filter #(and (= stage (get % :id)) (= "stage" (get % :type))) @shape/entities)) {:keys [x y]} point]
      	   (loop [obj ref cl 0 ct 0]
  	   	 (if (.-offsetParent obj)
    		     (recur (.-offsetParent obj) (+ (.-offsetLeft obj) cl) (+ (.-offsetTop obj) ct))
		     {:x (- x (.-offsetLeft obj) cl) :y (- y (.-offsetTop obj) ct)}))))

(defn entity-id [config]
      (if (contains? :id config)
      	  (get config :id)
	  (assoc config :id (swap! entity-id inc))))

(defn get-entity [id]
      (first (filter #(= id (get % :id)) @shape/entities)))
