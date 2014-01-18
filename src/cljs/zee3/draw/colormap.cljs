(ns zee3.draw.colormap
   (:require [zee3.draw.shapes :as shape]
             [zee3.draw.defaults :as defaults]))

(def color-map (atom {}))

(defn build-name
  "append HIT-TEST-STAGE content to stage id"
  [id]
  (str id defaults/HIT-TEST-STAGE))

(defn get-by-id
  "get the entity by id"
  [id]
  (first (filter #(= id (get % :id)) @shape/entities)))

(defn get-hit-context
  "retrieve the hit stage context for the given shape config"
  [config]
  (let [stage (get config :stage)
        hit-stage (build-name stage)]
    (:context (get-by-id hit-stage))))

(defn to-hex [s]
  (let [ hex (.toString s 16)]
    (str (.substr "00" 0, (- 2 (.-length hex))) hex)))

(defn from-hex [s]
  (let [r (subs s 1 3) g (subs s 3 5) b (subs s 5 7)]
    [(js/parseInt r 16) (js/parseInt g 16) (js/parseInt b 16)]))

(defn color-hash []
   (let [r (atom 1) g (atom 0) b (atom 0)]
      (fn []
         (let [hex-color (str "#" (to-hex @r) (to-hex @g) (to-hex @b))]
            (swap! r inc)
		    (if (> @r 255) (do (reset! r 1) (swap! g inc)))
		    (if (> @g 255) (do (reset! g 0) (swap! b inc)))
		    (if (> @b 255) (reset! b 0))
		    hex-color))))

(def color-generator (color-hash))

(defn create-canvas [config stage-id]
    (let [ {:keys [id width height]} config e (.createElement js/document "canvas")]
      (set! (.-id e) stage-id)
      (set! (.-width e) width)
      (set! (.-height e) height)
      e))

(defn draw-stage [config]
  (let [ {:keys [id width height]} config
         hit-stage-id (build-name id)
         e (create-canvas config hit-stage-id) ]

    (let [ctx (.getContext e "2d")]
      (swap! shape/entities conj (assoc config :type "stage" :ref e :context ctx :id hit-stage-id :parent id)))))

(defn render-text
  "Custom text renderer for color map"
  [ctx config]
  (let [{:keys [x y text font textBaseline]} config]
    (shape/draw-base ctx config (fn []
      (set! (.-fillStyle ctx) "#050505")
      (set! (.-font ctx) font)
      (set! (.-textBaseline ctx) textBaseline)
      (.fillText ctx text x y)))))

(defn transpose-text
  "transfers the text without anti-alias to the color map context"
  [d1 d2 rgb]
  (let [len (.-length d1)]
    (dotimes [n (/ len 4)]
      (let [i (* n 4)
            r (aget d1 i)
            g (aget d1 (+ i 1))
            b (aget d1 (+ i 2))]
        (cond (and (= r 5) (= g 5) (= b 5))
              (do
                (aset d2 i (rgb 0))
                (aset d2 (+ i 1) (rgb 1))
                (aset d2 (+ i 2) (rgb 2))
                (aset d2 (+ i 3) 255)
                (.log js/console (str "index:" (* n 4))))))))
    d2)

(defn draw-text [ctx config]
  (let [hit-stage (.-id (.-canvas ctx))
        ctx-config (get-by-id hit-stage)
        tmp-ctx (.getContext (create-canvas ctx-config "tmp") "2d")]
    (render-text tmp-ctx config)
    (let [d1 (.-data (.getImageData tmp-ctx 0 0 (.-width (.-canvas tmp-ctx)) (.-height (.-canvas tmp-ctx))))
          imgData2 (.getImageData ctx 0 0 (.-width (.-canvas ctx)) (.-height (.-canvas ctx)))
          d2 (.-data imgData2)
          len (.-length d1)
          color (:fillStyle config)
          rgb (from-hex color)]
      (transpose-text d1 d2 rgb)
        (.putImageData ctx imgData2 0 0))))

(defn render-shape [ctx config]
   (let [color (color-generator)
          hit-config (assoc config :strokeStyle color :fillStyle color)
         hit-context (get-hit-context config)]
      (swap! color-map assoc color config)
     (cond (= "text" (:type config))
           (draw-text hit-context hit-config)
           :else
          ((:renderer config) hit-context hit-config))))

(defn intersects
  "Tests for intersection using the colormap"
  [config point]
  (let [stage (get config :stage)
        hit-stage (build-name stage)
        hit-ctx (:context (get-by-id hit-stage))
        color (pixel-color hit-ctx (:x point) (:y point))
        color-map-config (get @color-map color)]

    (if (= (:id color-map-config) (:id config))
      (do
        (.log js/console (str "hit-color:" color ))
        true)
      false)))

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

(defn handle-event
  "handles all color map events"
  [event event-type]
  (let [currentTarget (.-currentTarget event)
        stage (.-id currentTarget)
        {:keys [x y]} (absolute-point stage {:x (.-clientX event) :y (.-clientY event)})
        hit-stage (build-name stage)
        hit-ctx (:context (get-by-id hit-stage))
        color (pixel-color hit-ctx x y)
        color-map-config (get @color-map color)]
    (cond (= event-type :mouseup)
          (do (.log js/console (str ":mousemove"))
            (.log js/console (str "color:" color))
            (.log js/console (str "alpha:" (.-globalAlpha hit-ctx)))
            (.log js/console (str "x:" x " y:" y))))
    (cond (not(nil? color-map-config))
          (let [f (get color-map-config event-type)]
            (cond (not (nil? f))
              (f))))))

(defn pixel-color [ctx x y]
  (let [d (.-data (.getImageData ctx x y 1 1))]
    (str "#" (to-hex (aget d 0)) (to-hex (aget d 1)) (to-hex (aget d 2)))))








