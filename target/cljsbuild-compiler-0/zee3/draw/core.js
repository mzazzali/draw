goog.provide('zee3.draw.core');
goog.require('cljs.core');
goog.require('zee3.draw.colormap');
goog.require('zee3.draw.shapes');
goog.require('zee3.draw.defaults');
zee3.draw.core.HIT_TEST_STAGE = "hit-test-stage";
zee3.draw.core.stage = (function stage(config){
zee3.draw.core.draw_stage.call(null,config);
return zee3.draw.colormap.draw_stage.call(null,config);
});
zee3.draw.core.draw_stage = (function draw_stage(config){
var map__2939 = config;
var map__2939__$1 = ((cljs.core.seq_QMARK_.call(null,map__2939))?cljs.core.apply.call(null,cljs.core.hash_map,map__2939):map__2939);
var height = cljs.core._lookup.call(null,map__2939__$1,"\uFDD0'height",null);
var width = cljs.core._lookup.call(null,map__2939__$1,"\uFDD0'width",null);
var id = cljs.core._lookup.call(null,map__2939__$1,"\uFDD0'id",null);
var e = document.createElement("canvas");
e.id = id;
e.width = width;
e.height = height;
(document.getElementsByTagName("body")[0]).appendChild(e);
zee3.draw.core.setupEvents.call(null,e);
var ctx = e.getContext("2d");
cljs.core.swap_BANG_.call(null,zee3.draw.shapes.contexts,cljs.core.assoc,id,ctx);
return cljs.core.swap_BANG_.call(null,zee3.draw.shapes.entities,cljs.core.conj,cljs.core.assoc.call(null,config,"\uFDD0'type","stage","\uFDD0'ref",e,"\uFDD0'context",ctx));
});
zee3.draw.core.setupEvents = (function setupEvents(stage){
stage.addEventListener("mouseup",zee3.draw.core.handle_mouseup);
stage.addEventListener("mousemove",zee3.draw.core.handle_mousemove);
stage.addEventListener("mousedown",zee3.draw.core.handle_mousedown);
stage.addEventListener("touchstart",zee3.draw.core.handle_mousedown);
stage.addEventListener("touchend",zee3.draw.core.handle_mouseup);
return stage.addEventListener("touchmove",zee3.draw.core.handle_mousemove);
});
zee3.draw.core.handle_mouseup = (function handle_mouseup(event){
var x = event.clientX;
var y = event.clientY;
var k = cljs.core.filter.call(null,(function (p1__2940_SHARP_){
var and__3941__auto__ = cljs.core.not_EQ_.call(null,"stage",cljs.core._lookup.call(null,p1__2940_SHARP_,"\uFDD0'type",null));
if(and__3941__auto__)
{var and__3941__auto____$1 = zee3.draw.core.intersects.call(null,p1__2940_SHARP_,cljs.core.ObjMap.fromObject(["\uFDD0'x","\uFDD0'y"],{"\uFDD0'x":x,"\uFDD0'y":y}));
if(cljs.core.truth_(and__3941__auto____$1))
{return cljs.core.contains_QMARK_.call(null,p1__2940_SHARP_,"\uFDD0'mouseup");
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
}),cljs.core.deref.call(null,zee3.draw.shapes.entities));
var G__2944 = cljs.core.seq.call(null,k);
while(true){
if(G__2944)
{var map__2945 = cljs.core.first.call(null,G__2944);
var map__2945__$1 = ((cljs.core.seq_QMARK_.call(null,map__2945))?cljs.core.apply.call(null,cljs.core.hash_map,map__2945):map__2945);
var mouseup = cljs.core._lookup.call(null,map__2945__$1,"\uFDD0'mouseup",null);
mouseup.call(null);
{
var G__2946 = cljs.core.next.call(null,G__2944);
G__2944 = G__2946;
continue;
}
} else
{return null;
}
break;
}
});
zee3.draw.core.handle_mousemove = (function handle_mousemove(event){
var x = event.clientX;
var y = event.clientY;
var k = cljs.core.filter.call(null,(function (p1__2941_SHARP_){
var and__3941__auto__ = cljs.core.not_EQ_.call(null,"stage",cljs.core._lookup.call(null,p1__2941_SHARP_,"\uFDD0'type",null));
if(and__3941__auto__)
{var and__3941__auto____$1 = zee3.draw.core.intersects.call(null,p1__2941_SHARP_,cljs.core.ObjMap.fromObject(["\uFDD0'x","\uFDD0'y"],{"\uFDD0'x":x,"\uFDD0'y":y}));
if(cljs.core.truth_(and__3941__auto____$1))
{return cljs.core.contains_QMARK_.call(null,p1__2941_SHARP_,"\uFDD0'mousemove");
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
}),cljs.core.deref.call(null,zee3.draw.shapes.entities));
var G__2950 = cljs.core.seq.call(null,k);
while(true){
if(G__2950)
{var map__2951 = cljs.core.first.call(null,G__2950);
var map__2951__$1 = ((cljs.core.seq_QMARK_.call(null,map__2951))?cljs.core.apply.call(null,cljs.core.hash_map,map__2951):map__2951);
var mousemove = cljs.core._lookup.call(null,map__2951__$1,"\uFDD0'mousemove",null);
mousemove.call(null);
{
var G__2952 = cljs.core.next.call(null,G__2950);
G__2950 = G__2952;
continue;
}
} else
{return null;
}
break;
}
});
zee3.draw.core.handle_mousedown = (function handle_mousedown(event){
var x = event.clientX;
var y = event.clientY;
var k = cljs.core.filter.call(null,(function (p1__2947_SHARP_){
var and__3941__auto__ = cljs.core.not_EQ_.call(null,"stage",cljs.core._lookup.call(null,p1__2947_SHARP_,"\uFDD0'type",null));
if(and__3941__auto__)
{var and__3941__auto____$1 = zee3.draw.core.intersects.call(null,p1__2947_SHARP_,cljs.core.ObjMap.fromObject(["\uFDD0'x","\uFDD0'y"],{"\uFDD0'x":x,"\uFDD0'y":y}));
if(cljs.core.truth_(and__3941__auto____$1))
{return cljs.core.contains_QMARK_.call(null,p1__2947_SHARP_,"\uFDD0'mousedown");
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
}),cljs.core.deref.call(null,zee3.draw.shapes.entities));
var G__2955 = cljs.core.seq.call(null,k);
while(true){
if(G__2955)
{var map__2956 = cljs.core.first.call(null,G__2955);
var map__2956__$1 = ((cljs.core.seq_QMARK_.call(null,map__2956))?cljs.core.apply.call(null,cljs.core.hash_map,map__2956):map__2956);
var mousedown = cljs.core._lookup.call(null,map__2956__$1,"\uFDD0'mousedown",null);
mousedown.call(null);
{
var G__2957 = cljs.core.next.call(null,G__2955);
G__2955 = G__2957;
continue;
}
} else
{return null;
}
break;
}
});
zee3.draw.core.intersects = (function intersects(shape,point){
if(cljs.core._EQ_.call(null,cljs.core._lookup.call(null,shape,"\uFDD0'type",null),"circle"))
{return zee3.draw.core.intersects_circle.call(null,shape,zee3.draw.core.absolute_point.call(null,cljs.core._lookup.call(null,shape,"\uFDD0'stage",null),point));
} else
{return zee3.draw.core.intersects_rectangle.call(null,shape,zee3.draw.core.absolute_point.call(null,cljs.core._lookup.call(null,shape,"\uFDD0'stage",null),point));
}
});
zee3.draw.core.intersects_circle = (function intersects_circle(shape,point){
var map__2960 = shape;
var map__2960__$1 = ((cljs.core.seq_QMARK_.call(null,map__2960))?cljs.core.apply.call(null,cljs.core.hash_map,map__2960):map__2960);
var radius = cljs.core._lookup.call(null,map__2960__$1,"\uFDD0'radius",null);
var centerY = cljs.core._lookup.call(null,map__2960__$1,"\uFDD0'centerY",null);
var centerX = cljs.core._lookup.call(null,map__2960__$1,"\uFDD0'centerX",null);
var map__2961 = point;
var map__2961__$1 = ((cljs.core.seq_QMARK_.call(null,map__2961))?cljs.core.apply.call(null,cljs.core.hash_map,map__2961):map__2961);
var y = cljs.core._lookup.call(null,map__2961__$1,"\uFDD0'y",null);
var x = cljs.core._lookup.call(null,map__2961__$1,"\uFDD0'x",null);
var distX = (x - centerX);
var distY = (y - centerY);
return (((distX * distX) + (distY * distY)) < (radius * radius));
});
zee3.draw.core.intersects_rectangle = (function intersects_rectangle(shape,point){
var map__2964 = shape;
var map__2964__$1 = ((cljs.core.seq_QMARK_.call(null,map__2964))?cljs.core.apply.call(null,cljs.core.hash_map,map__2964):map__2964);
var height = cljs.core._lookup.call(null,map__2964__$1,"\uFDD0'height",null);
var width = cljs.core._lookup.call(null,map__2964__$1,"\uFDD0'width",null);
var y = cljs.core._lookup.call(null,map__2964__$1,"\uFDD0'y",null);
var x = cljs.core._lookup.call(null,map__2964__$1,"\uFDD0'x",null);
var map__2965 = point;
var map__2965__$1 = ((cljs.core.seq_QMARK_.call(null,map__2965))?cljs.core.apply.call(null,cljs.core.hash_map,map__2965):map__2965);
var mouse_x = cljs.core._lookup.call(null,map__2965__$1,"\uFDD0'x",null);
var mouse_y = cljs.core._lookup.call(null,map__2965__$1,"\uFDD0'y",null);
var and__3941__auto__ = (mouse_x > x);
if(and__3941__auto__)
{var and__3941__auto____$1 = (mouse_x < (x + width));
if(and__3941__auto____$1)
{var and__3941__auto____$2 = (mouse_y > y);
if(and__3941__auto____$2)
{return (mouse_y < (y + height));
} else
{return and__3941__auto____$2;
}
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
});
zee3.draw.core.intersects_rounded_rectangle = (function intersects_rounded_rectangle(shape,point){
if(cljs.core.truth_(zee3.draw.core.intersects_rectangle.call(null,shape,point)))
{return true.call(null);
} else
{return false.call(null);
}
});
zee3.draw.core.absolute_point_old = (function absolute_point_old(stage,point){
var map__2970 = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__2966_SHARP_){
var and__3941__auto__ = cljs.core._EQ_.call(null,stage,cljs.core._lookup.call(null,p1__2966_SHARP_,"\uFDD0'id",null));
if(and__3941__auto__)
{return cljs.core._EQ_.call(null,"stage",cljs.core._lookup.call(null,p1__2966_SHARP_,"\uFDD0'type",null));
} else
{return and__3941__auto__;
}
}),cljs.core.deref.call(null,zee3.draw.shapes.entities)));
var map__2970__$1 = ((cljs.core.seq_QMARK_.call(null,map__2970))?cljs.core.apply.call(null,cljs.core.hash_map,map__2970):map__2970);
var ref = cljs.core._lookup.call(null,map__2970__$1,"\uFDD0'ref",null);
var map__2971 = point;
var map__2971__$1 = ((cljs.core.seq_QMARK_.call(null,map__2971))?cljs.core.apply.call(null,cljs.core.hash_map,map__2971):map__2971);
var y = cljs.core._lookup.call(null,map__2971__$1,"\uFDD0'y",null);
var x = cljs.core._lookup.call(null,map__2971__$1,"\uFDD0'x",null);
var obj = ref;
var cl = 0;
var ct = 0;
while(true){
if(cljs.core.truth_(obj.offsetParent))
{{
var G__2972 = obj.offsetParent;
var G__2973 = (obj.offsetLeft + cl);
var G__2974 = (obj.offsetTop + ct);
obj = G__2972;
cl = G__2973;
ct = G__2974;
continue;
}
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'x","\uFDD0'y"],{"\uFDD0'x":((x - obj.offsetLeft) - cl),"\uFDD0'y":((y - obj.offsetTop) - ct)});
}
break;
}
});
zee3.draw.core.absolute_point = (function absolute_point(stage,point){
var map__2977 = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__2967_SHARP_){
var and__3941__auto__ = cljs.core._EQ_.call(null,stage,cljs.core._lookup.call(null,p1__2967_SHARP_,"\uFDD0'id",null));
if(and__3941__auto__)
{return cljs.core._EQ_.call(null,"stage",cljs.core._lookup.call(null,p1__2967_SHARP_,"\uFDD0'type",null));
} else
{return and__3941__auto__;
}
}),cljs.core.deref.call(null,zee3.draw.shapes.entities)));
var map__2977__$1 = ((cljs.core.seq_QMARK_.call(null,map__2977))?cljs.core.apply.call(null,cljs.core.hash_map,map__2977):map__2977);
var ref = cljs.core._lookup.call(null,map__2977__$1,"\uFDD0'ref",null);
var map__2978 = point;
var map__2978__$1 = ((cljs.core.seq_QMARK_.call(null,map__2978))?cljs.core.apply.call(null,cljs.core.hash_map,map__2978):map__2978);
var y = cljs.core._lookup.call(null,map__2978__$1,"\uFDD0'y",null);
var x = cljs.core._lookup.call(null,map__2978__$1,"\uFDD0'x",null);
var box = ref.getBoundingClientRect();
var docElement = document.documentElement;
var clientTop = docElement.clientTop;
var clientLeft = docElement.clientLeft;
var top = (box.top - clientTop);
var left = (box.left - clientLeft);
return cljs.core.ObjMap.fromObject(["\uFDD0'y","\uFDD0'x"],{"\uFDD0'y":(y - Math.round(top)),"\uFDD0'x":(x - Math.round(left))});
});
zee3.draw.core.entity_id = (function entity_id(config){
if(cljs.core.contains_QMARK_.call(null,"\uFDD0'id",config))
{return cljs.core._lookup.call(null,config,"\uFDD0'id",null);
} else
{return cljs.core.assoc.call(null,config,"\uFDD0'id",cljs.core.swap_BANG_.call(null,entity_id,cljs.core.inc));
}
});
zee3.draw.core.get_entity = (function get_entity(id){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__2979_SHARP_){
return cljs.core._EQ_.call(null,id,cljs.core._lookup.call(null,p1__2979_SHARP_,"\uFDD0'id",null));
}),cljs.core.deref.call(null,zee3.draw.shapes.entities)));
});
