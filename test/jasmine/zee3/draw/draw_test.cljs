(ns zee3.draw.core_test
  (:require [zee3.draw.core :as draw]
            [zee3.draw.shapes :as shape])
  (:require-macros [jsm :as j]))

(j/describe "testing the tests"
            (j/it "should be equal"
                  (= 1 1)))

(j/describe "create stage"
            (j/beforeeach (draw/stage {:id "test-stage" :x 0 :y 0 :width 300 :height 300}))
            (j/aftereach (.removeChild
                          (aget (.getElementsByTagName js/document "body") 0)
                          (.getElementById js/document "test-stage")))
            (j/it "test that the stage was created"
                  (not= nil (.getElementById js/document "test-stage")))
            (j/it "test that the entity was created"
                  (not= nil (draw/get-entity "test-stage"))))

(j/describe "create rectangle"
            (j/beforeeach
             (draw/stage {:id "test-stage2" :x 0 :y 0 :width 300 :height 300})
             (shape/rectangle "test-stage2" {:id "my-rectangle" :x 10 :y 10 :width 300 :height 300}))
            (j/aftereach (let [body (aget (.getElementsByTagName js/document "body") 0)]
                           (.removeChild body (.getElementById js/document "test-stage2"))))
            (j/it "test that the rectangle was created"
                  (not= nil (draw/get-entity "my-rectangle"))))


(j/describe "create rounded-rectangle"
            (j/beforeeach
             (draw/stage {:id "test-stage" :x 0 :y 0 :width 300 :height 300})
             (shape/rounded-rectangle "test-stage" {:id "my-rounded-rectangle" :x 10 :y 10 :width 300 :height 300}))
            (j/aftereach (let [body (aget (.getElementsByTagName js/document "body") 0)]
                           (.removeChild body (.getElementById js/document "test-stage"))))
            (j/it "test that the rounded-rectangle was created"
                  (not= nil (draw/get-entity "my-rounded-rectangle"))))

(j/describe "create circle"
            (j/beforeeach
             (draw/stage {:id "test-stage1" :x 0 :y 0 :width 300 :height 300})
             (shape/circle "test-stage1" {:id "my-circle" :centerX 100 :centerY 100 :radius 10}))
            (j/aftereach (let [body (aget (.getElementsByTagName js/document "body") 0)]
                           (.removeChild body (.getElementById js/document "test-stage1"))))
            (j/it "test that the circle was created"
                  (not= nil (draw/get-entity "my-circle"))))


(j/describe "create text"
            (j/beforeeach
             (draw/stage {:id "test-stage1" :x 0 :y 0 :width 300 :height 300})
             (shape/text "test-stage1" {:id "my-text" :fillStyle "#FFFFFF" :x 0 :y 0 :font "bold 16px Arial" :text ""}))
            (j/aftereach (let [body (aget (.getElementsByTagName js/document "body") 0)]
                           (.removeChild body (.getElementById js/document "test-stage1"))))
            (j/it "test that the text was created"
                  (not= nil (draw/get-entity "my-text"))))




