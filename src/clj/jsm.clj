(ns jsm)

(defmacro describe [description & body]
  `(~'js/describe ~description (fn [] ~@body)))

(defmacro it [description test-form]
  `(~'js/it ~description
     (fn []
       (. (~'js/expect ~test-form) (~'toBeTruthy)))))

(defmacro aftereach [& body]
  `(~'js/afterEach (fn [] ~@body)))

(defmacro beforeeach [& body]
  `(~'js/beforeEach (fn [] ~@body)))
