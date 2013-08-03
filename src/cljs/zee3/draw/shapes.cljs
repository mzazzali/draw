(ns zee3.draw.shapes
  (:require [zee3.draw.defaults :as config]))

(def entities (atom []))
(def contexts (atom {}))
(def entity-id (atom 0))

;;entity functions
(defn rectangle [stage config]
  (let [mc (assoc (merge config/base config) :type "rectangle") 
       ctx (get @contexts stage)]
    (draw-rectangle ctx mc)
    (base-config stage mc)))

(defn rounded-rectangle [stage config]
  (let [mc (assoc (merge config/rounded-rectangle config) :type "rounded-rectangle") 
        ctx (get @contexts stage)]
    (draw-rounded-rectangle ctx mc)
    (base-config stage mc)))

(defn circle [stage config]
  (let [mc (assoc (merge config/circle config) :type "circle") ctx (get @contexts stage) ]
    (draw-circle ctx mc)
    (base-config stage mc)))

(defn text [stage config]
  (let [mc (assoc (merge config/circle config) :type "text" :stage stage) ctx (get @contexts stage)]
    (draw-text mc)
    (base-config stage mc)))

(defn base-config [stage config]
  (swap! entities conj (assoc config :stage stage)))

(defn apply-defaults [default config & rest]
  (apply assoc (merge default config) rest))

;;rendering functions
(defn draw-base [ctx config f]
	(let [{:keys [lineWidth fillStyle strokeStyle]} config ]
		(.beginPath ctx)
		(set! (.-fillStyle ctx) fillStyle)
		(set! (.-strokeStyle ctx) strokeStyle)
		(set! (.-lineWidth ctx) lineWidth)
		(f ctx config)
		(.fill ctx)
		(.stroke ctx)))


(defn draw-rectangle [ctx config]
  (let [{:keys [x y width height]} config]
    (draw-base ctx config 
      (fn [] (.fillRect ctx x y width height)))))

(defn draw-rounded-rectangle [ctx config]
  (let [{:keys [cornerRadius x y width height lineWidth fillStyle strokeStyle]} config]
    (draw-base ctx config (fn []
      (.moveTo ctx (+ x cornerRadius) y)
      (.lineTo ctx (- (+ x width) cornerRadius) y)
      (.quadraticCurveTo ctx (+ x width) y (+ x width) y)
      (.lineTo ctx (+ x width) (- (+ y height) cornerRadius))
      (.quadraticCurveTo ctx (+ x width) (+ y height) (- (+ x width) cornerRadius) (+ y height))
      (.lineTo ctx (+ x cornerRadius) (+ y height))
      (.quadraticCurveTo ctx x (+ y height) x (- (+ y height) cornerRadius))
      (.lineTo ctx x (+ y cornerRadius))
      (.quadraticCurveTo ctx x y (+ x cornerRadius) y)))))

(defn draw-circle [ctx config]
  (let [{:keys [centerX centerY radius]} config]
    (draw-base ctx config (fn []
    (.arc ctx centerX centerY radius 0 (* 2 (.-PI js/Math)) false )))))
      

(defn draw-text [ctx config]
  (let [{:keys [centerX centerY radius]} mc 
        ctx (get @contexts stage)]
  (draw-base ctx config (fn []
    (set! (.-fillStyle ctx) fillStyle)
    (set! (.-font ctx) font) 
    (set! (.-textBaseline ctx) textBaseline)
    (.fillText ctx text)))))

  
