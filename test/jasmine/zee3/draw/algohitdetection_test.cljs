(ns zee3.draw.algohitdetection_test
  (:require [zee3.draw.algohitdetection :as hd])
  (:require-macros [jsm :as j]))


(j/describe "test rectangle intersection"
            (j/it "should intersect"
                  (= true (hd/intersects-rectangle {:x 10 :y 10 :width 100 :height 100} {:x 90 :y 90})))
            (j/it "should not intersect"
                  (= false (hd/intersects-rectangle {:x 10 :y 10 :width 100 :height 100} {:x 120 :y 120}))))

(j/describe "test circle intersection"
            (j/it "should intersect"
                  (= true (hd/intersects-circle {:centerX 30 :centerY 30 :radius 20} {:x 30 :y 30})))
            (j/it "should not intersect"
                  (= false (hd/intersects-circle  {:centerX 30 :centerY 30 :radius 20} {:x 120 :y 120}))))



