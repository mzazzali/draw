(ns zee3.draw.shapes
  (:require [zee3.draw.defaults :as config]))

(def entities (atom []))
(def contexts (atom {}))
(def entity-id (atom 0))

(defn init-config [type renderer config]
  (assoc
      (merge config/rounded-rectangle config)
      :type type
      :renderer renderer))

;;entity functions
(defn rectangle [stage config]
  (let [mc (init-config "rectangle" draw-rectangle config) ctx (get @contexts stage)]
    (render ctx (base-config stage mc))))

(defn rounded-rectangle [stage config]
  (let [mc (init-config "rounded-rectangle" draw-rounded-rectangle config) ctx (get @contexts stage)]

    (render ctx (base-config stage mc))))

(defn circle [stage config]
  (let [mc (init-config "circle" draw-circle config) ctx (get @contexts stage) ]
    (base-config stage mc)
    (render ctx (base-config stage mc))))

(defn text [stage config]
  (let [mc (init-config "text" draw-text config) ctx (get @contexts stage)]
    (render ctx (base-config stage mc))))

(defn base-config [stage config]
  (let [b-config (assoc config :stage stage)]
    (.log js/console (clj->js b-config))
    (swap! entities conj b-config)
     b-config))

(defn apply-defaults [default config & rest]
  (apply assoc (merge default config) rest))

;;rendering functions
(defn render [ctx config]
  (doseq [f (vec [render-shape zee3.draw.colormap/render-shape])] (f ctx config)))

(defn render-shape [ctx config]
   ((:renderer config) ctx config))

(defn draw-base [ctx config f]
   (let [{:keys [lineWidth fillStyle strokeStyle]} config ]
      (.beginPath ctx)
      (set! (.-fillStyle ctx) fillStyle)
      (set! (.-strokeStyle ctx) strokeStyle)
      (set! (.-lineWidth ctx) lineWidth)
      (f ctx config)
      (.fill ctx)
      (.stroke ctx))
   (doseq [f (:base-init zee3.draw.defaults/cfg)] (f config)))


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





