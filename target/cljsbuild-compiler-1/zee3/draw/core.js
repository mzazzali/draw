goog.provide('zee3.draw.core');
goog.require('cljs.core');
goog.require('zee3.draw.shapes');
goog.require('zee3.draw.defaults');
zee3.draw.core.stage = (function stage(config){
var map__5777 = config;
var map__5777__$1 = ((cljs.core.seq_QMARK_.call(null,map__5777))?cljs.core.apply.call(null,cljs.core.hash_map,map__5777):map__5777);
var height = cljs.core._lookup.call(null,map__5777__$1,"\uFDD0'height",null);
var width = cljs.core._lookup.call(null,map__5777__$1,"\uFDD0'width",null);
var id = cljs.core._lookup.call(null,map__5777__$1,"\uFDD0'id",null);
var e = document.createElement("canvas");
e.id = id;
e.width = width;
e.height = height;
(document.getElementsByTagName("body")[0]).appendChild(e);
zee3.draw.core.setupEvents.call(null,e);
cljs.core.swap_BANG_.call(null,zee3.draw.shapes.entities,cljs.core.conj,cljs.core.assoc.call(null,config,"\uFDD0'type","stage","\uFDD0'ref",e));
var ctx = e.getContext("2d");
cljs.core.swap_BANG_.call(null,zee3.draw.shapes.contexts,cljs.core.assoc,id,ctx);
return ctx;
});
zee3.draw.core.setupEvents = (function setupEvents(stage){
stage.addEventListener("mouseup",zee3.draw.core.handle_mouse_up);
stage.addEventListener("mousemove",(function (event){
return null;
}));
stage.addEventListener("mousedown",(function (event){
return null;
}));
stage.addEventListener("touchstart",(function (event){
return null;
}));
stage.addEventListener("touchend",zee3.draw.core.handle_mouse_up);
return stage.addEventListener("touchmove",(function (event){
return null;
}));
});
zee3.draw.core.handle_mouse_up = (function handle_mouse_up(event){
var x = event.clientX;
var y = event.clientY;
var k = cljs.core.filter.call(null,(function (p1__5778_SHARP_){
var and__3822__auto__ = cljs.core.not_EQ_.call(null,"stage",cljs.core._lookup.call(null,p1__5778_SHARP_,"\uFDD0'type",null));
if(and__3822__auto__)
{var and__3822__auto____$1 = zee3.draw.core.intersects.call(null,p1__5778_SHARP_,cljs.core.ObjMap.fromObject(["\uFDD0'x","\uFDD0'y"],{"\uFDD0'x":x,"\uFDD0'y":y}));
if(cljs.core.truth_(and__3822__auto____$1))
{return cljs.core.contains_QMARK_.call(null,p1__5778_SHARP_,"\uFDD0'mouseup");
} else
{return and__3822__auto____$1;
}
} else
{return and__3822__auto__;
}
}),cljs.core.deref.call(null,zee3.draw.shapes.entities));
var G__5783 = cljs.core.seq.call(null,k);
while(true){
if(G__5783)
{var map__5784 = cljs.core.first.call(null,G__5783);
var map__5784__$1 = ((cljs.core.seq_QMARK_.call(null,map__5784))?cljs.core.apply.call(null,cljs.core.hash_map,map__5784):map__5784);
var mouseup = cljs.core._lookup.call(null,map__5784__$1,"\uFDD0'mouseup",null);
mouseup.call(null);
{
var G__5785 = cljs.core.next.call(null,G__5783);
G__5783 = G__5785;
continue;
}
} else
{return null;
}
break;
}
});
zee3.draw.core.mouse_down = (function mouse_down(entities,point){
var k = cljs.core.filter.call(null,(function (p1__5779_SHARP_){
var and__3822__auto__ = zee3.draw.core.intersects.call(null,p1__5779_SHARP_,point);
if(cljs.core.truth_(and__3822__auto__))
{return cljs.core.contains_QMARK_.call(null,p1__5779_SHARP_,"\uFDD0'mouse-down");
} else
{return and__3822__auto__;
}
}),cljs.core.deref.call(null,zee3.draw.shapes.entities));
return cljs.core.map.call(null,(function (p1__5780_SHARP_){
return cljs.core._lookup.call(null,p1__5780_SHARP_,"\uFDD0'mouse-down",null).call(null);
}),k);
});
zee3.draw.core.intersects = (function intersects(shape,point){
if(cljs.core.contains_QMARK_.call(null,shape,"\uFDD0'width"))
{return zee3.draw.core.intersects_rectangle.call(null,shape,zee3.draw.core.absolute_point.call(null,cljs.core._lookup.call(null,shape,"\uFDD0'stage",null),point),zee3.draw.core.intersects_circle.call(null,shape,zee3.draw.core.absolute_point.call(null,cljs.core._lookup.call(null,shape,"\uFDD0'stage",null),point)));
} else
{return null;
}
});
zee3.draw.core.intersects_circle = (function intersects_circle(shape,point){
var map__5788 = shape;
var map__5788__$1 = ((cljs.core.seq_QMARK_.call(null,map__5788))?cljs.core.apply.call(null,cljs.core.hash_map,map__5788):map__5788);
var radius = cljs.core._lookup.call(null,map__5788__$1,"\uFDD0'radius",null);
var centerY = cljs.core._lookup.call(null,map__5788__$1,"\uFDD0'centerY",null);
var centerX = cljs.core._lookup.call(null,map__5788__$1,"\uFDD0'centerX",null);
var map__5789 = point;
var map__5789__$1 = ((cljs.core.seq_QMARK_.call(null,map__5789))?cljs.core.apply.call(null,cljs.core.hash_map,map__5789):map__5789);
var y = cljs.core._lookup.call(null,map__5789__$1,"\uFDD0'y",null);
var x = cljs.core._lookup.call(null,map__5789__$1,"\uFDD0'x",null);
var distX = (x - centerX);
var distY = (y - centerY);
return (((distX * distX) + (distY * distY)) < (radius * radius));
});
zee3.draw.core.intersects_rectangle = (function intersects_rectangle(shape,point){
var map__5792 = shape;
var map__5792__$1 = ((cljs.core.seq_QMARK_.call(null,map__5792))?cljs.core.apply.call(null,cljs.core.hash_map,map__5792):map__5792);
var height = cljs.core._lookup.call(null,map__5792__$1,"\uFDD0'height",null);
var width = cljs.core._lookup.call(null,map__5792__$1,"\uFDD0'width",null);
var y = cljs.core._lookup.call(null,map__5792__$1,"\uFDD0'y",null);
var x = cljs.core._lookup.call(null,map__5792__$1,"\uFDD0'x",null);
var map__5793 = point;
var map__5793__$1 = ((cljs.core.seq_QMARK_.call(null,map__5793))?cljs.core.apply.call(null,cljs.core.hash_map,map__5793):map__5793);
var mouse_x = cljs.core._lookup.call(null,map__5793__$1,"\uFDD0'x",null);
var mouse_y = cljs.core._lookup.call(null,map__5793__$1,"\uFDD0'y",null);
var and__3822__auto__ = (mouse_x > x);
if(and__3822__auto__)
{var and__3822__auto____$1 = (mouse_x < (x + width));
if(and__3822__auto____$1)
{var and__3822__auto____$2 = (mouse_y > y);
if(and__3822__auto____$2)
{return (mouse_y < (y + height));
} else
{return and__3822__auto____$2;
}
} else
{return and__3822__auto____$1;
}
} else
{return and__3822__auto__;
}
});
zee3.draw.core.intersects_rounded_rectangle = (function intersects_rounded_rectangle(shape,point){
if(cljs.core.truth_(zee3.draw.core.intersects_rectangle.call(null,shape,point)))
{return true.call(null);
} else
{return false.call(null);
}
});
zee3.draw.core.absolute_point = (function absolute_point(stage,point){
var map__5797 = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__5794_SHARP_){
var and__3822__auto__ = cljs.core._EQ_.call(null,stage,cljs.core._lookup.call(null,p1__5794_SHARP_,"\uFDD0'id",null));
if(and__3822__auto__)
{return cljs.core._EQ_.call(null,"stage",cljs.core._lookup.call(null,p1__5794_SHARP_,"\uFDD0'type",null));
} else
{return and__3822__auto__;
}
}),cljs.core.deref.call(null,zee3.draw.shapes.entities)));
var map__5797__$1 = ((cljs.core.seq_QMARK_.call(null,map__5797))?cljs.core.apply.call(null,cljs.core.hash_map,map__5797):map__5797);
var ref = cljs.core._lookup.call(null,map__5797__$1,"\uFDD0'ref",null);
var map__5798 = point;
var map__5798__$1 = ((cljs.core.seq_QMARK_.call(null,map__5798))?cljs.core.apply.call(null,cljs.core.hash_map,map__5798):map__5798);
var y = cljs.core._lookup.call(null,map__5798__$1,"\uFDD0'y",null);
var x = cljs.core._lookup.call(null,map__5798__$1,"\uFDD0'x",null);
var obj = ref;
var cl = 0;
var ct = 0;
while(true){
if(cljs.core.truth_(obj.offsetParent))
{{
var G__5799 = obj.offsetParent;
var G__5800 = (obj.offsetLeft + cl);
var G__5801 = (obj.offsetTop + ct);
obj = G__5799;
cl = G__5800;
ct = G__5801;
continue;
}
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'x","\uFDD0'y"],{"\uFDD0'x":((x - obj.offsetLeft) - cl),"\uFDD0'y":((y - obj.offsetTop) - ct)});
}
break;
}
});
zee3.draw.core.entity_id = (function entity_id(config){
if(cljs.core.contains_QMARK_.call(null,"\uFDD0'id",config))
{return cljs.core._lookup.call(null,config,"\uFDD0'id",null);
} else
{return cljs.core.assoc.call(null,config,"\uFDD0'id",cljs.core.swap_BANG_.call(null,entity_id,cljs.core.inc));
}
});
zee3.draw.core.get_entity = (function get_entity(id){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__5802_SHARP_){
return cljs.core._EQ_.call(null,id,cljs.core._lookup.call(null,p1__5802_SHARP_,"\uFDD0'id",null));
}),cljs.core.deref.call(null,zee3.draw.shapes.entities)));
});
