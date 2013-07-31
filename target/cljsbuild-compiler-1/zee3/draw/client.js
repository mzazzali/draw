goog.provide('hello_clojurescript');
goog.require('cljs.core');
goog.require('zee3.draw.core');
hello_clojurescript.cnt = cljs.core.atom.call(null,0);
hello_clojurescript.handle_click = (function handle_click(){
zee3.draw.core.stage.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'x","\uFDD0'y","\uFDD0'width","\uFDD0'height"],{"\uFDD0'id":[cljs.core.str("myStage"),cljs.core.str(cljs.core.swap_BANG_.call(null,hello_clojurescript.cnt,cljs.core.inc))].join(''),"\uFDD0'x":0,"\uFDD0'y":0,"\uFDD0'width":300,"\uFDD0'height":300}));
var id = [cljs.core.str("myStage"),cljs.core.str(cljs.core.deref.call(null,hello_clojurescript.cnt))].join('');
return zee3.draw.core.rectangle.call(null,id,cljs.core.ObjMap.fromObject(["\uFDD0'mouseup"],{"\uFDD0'mouseup":(function (){
return alert("test");
})}));
});
hello_clojurescript.clickable = document.getElementById("clickable");
hello_clojurescript.clickable.addEventListener("click",hello_clojurescript.handle_click);
