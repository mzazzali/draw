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
  
(use-fixtures :once setup)

(deftest circle-mouseup
   (let [act (:actions *driver*)] 
      (.moveToElement act (:webelement (element {:tag :canvas})) 50 50) 
      (.click act) 
      (.perform act))
   (is (= (test-output) "crcl1")))

(deftest rectangle-mouseup
   (let [act (:actions *driver*)] 
      (.moveToElement act (:webelement (element {:tag :canvas})) 125 25) 
      (.click act) 
      (.perform act))
   (is (= (test-output) "rect1")))
