(ns zee3.draw.colormap_test
  (:require [zee3.draw.colormap :as cmap]
            [zee3.draw.shapes :as shape]
            [zee3.draw.defaults :as defaults])
  (:require-macros [jsm :as j]))

(def STAGE-NAME "test-stage2")

(j/describe "test build-name"
            (j/it "test that the build name prepends the hit-test prefix"
                  (= (str "test" defaults/HIT-TEST-STAGE) (cmap/build-name "test"))))

(j/describe "test get-by-id"
            (let [ z (cmap/draw-stage {:id STAGE-NAME :x 0 :y 0 :width 300 :height 300})]
            (j/it "test that we can retrieve an entity by id"
                  (not (nil? (cmap/get-by-id STAGE-NAME))))))

(j/describe "test"
             (j/it "retrieve first green color hash"
                   (= 2 (last (repeatedly  255 #(+ 1 1))))))

(j/describe "test to-hex"
             (j/it "test convert 1 to hex"
                   (= "01" (cmap/to-hex 1)))
            (j/it "test convert 10 to hex"
                   (= "0a" (cmap/to-hex 10)))
            (j/it "test convert 28 to hex"
                   (= "1c" (cmap/to-hex 28))))

(j/describe "test color-generator"
             (j/it "retrieve unique color hash"
                   (= "#030000" (cmap/color-generator)))
             (j/it "retrieve next unique color hash"
                   (= "#040000" (cmap/color-generator)))
             (j/it "retrieve first green color hash"
                   (= "#000100" (last (repeatedly 252 #(cmap/color-generator)))))
             (j/it "retrieve first blue color hash"
                   (= "#000001" (last (repeatedly (+ 255 (* 255 255)) #(cmap/color-generator))))))

(j/describe "test draw-stage"
  (let [ z (cmap/draw-stage {:id STAGE-NAME :x 0 :y 0 :width 300 :height 300})
         stage (first (filter #(= (cmap/build-name STAGE-NAME) (get % :id)) @shape/entities))]
    (j/it "draw the stage"
          (not (nil? stage)))
    (j/it "Check the stages type"
          (= "stage" (get stage :type)))
    (j/it "Check it has a reference to the dom element"
          (not (nil? (get stage :ref))))))


