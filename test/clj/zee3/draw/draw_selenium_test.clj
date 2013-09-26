(ns zee3.draw.draw-selenium-test
   (:use clojure.test))

(use 'clj-webdriver.taxi)

(defn setup [f]
   (set-driver! {:browser :chrome})
   (to (str "file://" (-> (java.io.File. ".") .getAbsolutePath) "/resources/public/selenium-tests.htm"))
   (f)
   (quit))

(defn test-output []
   ;retrieve the test output
   (text (find-element {:id "test_output"})))

(defn mouse-click [x y]  
   (let [act (:actions *driver*)] 
      (.moveToElement act (:webelement (element {:tag :canvas})) x y) 
      (.click act) 
      (.perform act)))

(use-fixtures :once setup)

(deftest circle-mouseup
   (let [act (:actions *driver*)] 
      (.moveToElement act (:webelement (element {:tag :canvas})) 25 25) 
      (.click act) 
      (.perform act))
   (is (= (test-output) "crcl-mouseup")))

(deftest circle-mousemove
   (let [act (:actions *driver*)] 
      (.moveToElement act (:webelement (element {:tag :canvas})) 75 25)
      (.perform act))
   (is (= (test-output) "crcl-mousemove")))

(deftest circle-mousedown
   (let [act (:actions *driver*)] 
      (.moveToElement act (:webelement (element {:tag :canvas})) 125 25) 
      (.click act) 
      (.perform act))
   (is (= (test-output) "crcl-mousedown")))

(deftest circle-bounds-test 
   (mouse-click 25 2)
   (is (= (test-output) "crcl-mouseup"))
   (mouse-click 125 75)
   (mouse-click 2 25)
   (is (= (test-output) "crcl-mouseup"))
   (mouse-click 125 75)
   (mouse-click 25 48)
   (is (= (test-output) "crcl-mouseup"))
   (mouse-click 125 75)
   (mouse-click 48 25)
   (is (= (test-output) "crcl-mouseup")))


(deftest rectangle-mouseup
   (let [act (:actions *driver*)] 
      (.moveToElement act (:webelement (element {:tag :canvas})) 25 75) 
      (.click act) 
      (.perform act))
   (is (= (test-output) "rect-mouseup")))

(deftest rectangle-mousemove
   (let [act (:actions *driver*)] 
      (.moveToElement act (:webelement (element {:tag :canvas})) 75 75) 
      (.perform act))
   (is (= (test-output) "rect-mousemove")))

(deftest rectangle-mousedown
   (let [act (:actions *driver*)] 
      (.moveToElement act (:webelement (element {:tag :canvas})) 125 75) 
      (.click act) 
      (.perform act))
   (is (= (test-output) "rect-mousedown")))

(deftest rectangle-bounds-test 
   (mouse-click 48 51)
   (is (= (test-output) "rect-mouseup"))
   (mouse-click 125 75)
   (mouse-click 1 51)
   (is (= (test-output) "rect-mouseup"))
   (mouse-click 125 75)
   (mouse-click 48 98)
   (is (= (test-output) "rect-mouseup"))
   (mouse-click 125 75)
   (mouse-click 48 98)
   (is (= (test-output) "rect-mouseup")))


