(ns zee3.draw.core
  (:require [zee3.draw.defaults :as config]
            [zee3.draw.shapes :as shape]
            [zee3.draw.colormap :as color-map]))

(def HIT-TEST-STAGE "hit-test-stage")

(defn stage [config]
  (draw-stage config)
  (color-map/draw-stage config))

(defn draw-stage [config]
  (let [ {:keys [id width height]} config e (.createElement js/document "canvas")]
    (set! (.-id e) id)
    (set! (.-width e) width)
    (set! (.-height e) height)
    (.appendChild (aget (.getElementsByTagName js/document "body") 0) e)
    (setupEvents e)
    (let [ctx (.getContext e "2d")]
      (swap! shape/contexts assoc id ctx)
      (swap! shape/entities conj (assoc config :type "stage" :ref e :context ctx)))))

(defn setupEvents [stage]
      (.addEventListener stage "mouseup" handle-mouseup)
      (.addEventListener stage "mousemove" handle-mousemove)
      (.addEventListener stage "mousedown" handle-mousedown)
      (.addEventListener stage "touchstart" handle-mousedown)
      (.addEventListener stage "touchend" handle-mouseup)
      (.addEventListener stage "touchmove" handle-mousemove))

(defn handle-mouseup [event]
  (handle-event event :mouseup))

(defn handle-mousemove [event]
  (handle-event event :mousemove))

(defn handle-mousedown [event]
  (handle-event event :mousedown))

(defn handle-event
  "Handles all stage events"
  [event event-type]
  (let [x (.-clientX event) y (.-clientY event)
        k (filter #(and (not (nil? (event-type %))) (not= "stage" (get % :type)) (intersects % {:x x :y y}) ) @shape/entities)]
    (doseq [config k] ((get config event-type)))))

(defn intersects [shape point]
	(color-map/intersects shape (absolute-point (:stage shape) point)))

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

(defn absolute-point-old [stage point]
      (let [{:keys [ref]} (first (filter #(and (= stage (get % :id)) (= "stage" (get % :type))) @shape/entities)) {:keys [x y]} point]
      	   (loop [obj ref cl 0 ct 0]
  	   	 (if (.-offsetParent obj)
    		     (recur (.-offsetParent obj) (+ (.-offsetLeft obj) cl) (+ (.-offsetTop obj) ct))
		     {:x (- x (.-offsetLeft obj) cl) :y (- y (.-offsetTop obj) ct)}))))

(defn absolute-point [stage point]
  (let [{:keys [ref]} (first (filter #(and (= stage (get % :id)) (= "stage" (get % :type))) @shape/entities))         {:keys [x y]} point
        box (.getBoundingClientRect ref)
        docElement (.-documentElement js/document)
        clientTop (.-clientTop docElement )
        clientLeft (.-clientLeft docElement )
        top (- (.-top box) clientTop)
        left (- (.-left box) clientLeft)]
     {:y (- y (.round js/Math top))
       :x  (- x (.round js/Math left))}))


(defn entity-id [config]
      (if (contains? :id config)
      	  (get config :id)
	  (assoc config :id (swap! entity-id inc))))

(defn get-entity [id]
      (first (filter #(= id (get % :id)) @shape/entities)))







