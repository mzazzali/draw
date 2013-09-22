(defproject zee3.draw "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :dependencies [[org.clojure/clojure "1.4.0"]
                 [ring "1.1.8"]
		 [clj-webdriver "0.6.0"]]
  :plugins [[lein-cljsbuild "0.3.0"]
            [lein-ring "0.8.3"]]
  :hooks [leiningen.cljsbuild]
  :source-paths ["src/clj"]
  :cljsbuild { 
    :builds {
      :main {
             :source-paths ["src/cljs"]
             :compiler {:output-to "resources/public/js/cljs.js"
                   :optimizations :simple
                   :pretty-print true}
             :jar true}
      :jasmin-test {
             :source-paths ["test/jasmine/zee3/draw"]
             :compiler {:output-to "resources/private/js/unit-test.js"
                  :optimizations :simple
                  :pretty-print true}}
      :selenium-test {
             :source-paths ["src/cljs" "test/selenium"]
             :compiler {:output-to "resources/private/js/selenium-test.js"
                  :optimizations :simple                  
                  :pretty-print true}}}}
  :test-paths ["test/clj"]
  :test-commands
      ; Test command for running the unit tests in "test-cljs" (see below).
      ;     $ lein cljsbuild test
      {"draw-tests" ["firefox"
               "phantom/unit-test.js"
               "resources/private/html/unit-test.html"]}
  :main zee3.draw.server
  :ring {:handler zee3.draw.server/app})
