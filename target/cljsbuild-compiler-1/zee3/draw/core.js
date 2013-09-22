goog.provide('zee3.draw.core');
goog.require('cljs.core');
goog.require('zee3.draw.shapes');
goog.require('zee3.draw.defaults');
zee3.draw.core.stage = (function stage(config){
var map__3107 = config;
var map__3107__$1 = ((cljs.core.seq_QMARK_.call(null,map__3107))?cljs.core.apply.call(null,cljs.core.hash_map,map__3107):map__3107);
var height = cljs.core._lookup.call(null,map__3107__$1,"\uFDD0'height",null);
var width = cljs.core._lookup.call(null,map__3107__$1,"\uFDD0'width",null);
var id = cljs.core._lookup.call(null,map__3107__$1,"\uFDD0'id",null);
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
var k = cljs.core.filter.call(null,(function (p1__3108_SHARP_){
var and__3822__auto__ = cljs.core.not_EQ_.call(null,"stage",cljs.core._lookup.call(null,p1__3108_SHARP_,"\uFDD0'type",null));
if(and__3822__auto__)
{var and__3822__auto____$1 = zee3.draw.core.intersects.call(null,p1__3108_SHARP_,cljs.core.ObjMap.fromObject(["\uFDD0'x","\uFDD0'y"],{"\uFDD0'x":x,"\uFDD0'y":y}));
if(cljs.core.truth_(and__3822__auto____$1))
{return cljs.core.contains_QMARK_.call(null,p1__3108_SHARP_,"\uFDD0'mouseup");
} else
{return and__3822__auto____$1;
}
} else
{return and__3822__auto__;
}
}),cljs.core.deref.call(null,zee3.draw.shapes.entities));
var G__3112 = cljs.core.seq.call(null,k);
while(true){
if(G__3112)
{var map__3113 = cljs.core.first.call(null,G__3112);
var map__3113__$1 = ((cljs.core.seq_QMARK_.call(null,map__3113))?cljs.core.apply.call(null,cljs.core.hash_map,map__3113):map__3113);
var mouseup = cljs.core._lookup.call(null,map__3113__$1,"\uFDD0'mouseup",null);
mouseup.call(null);
{
var G__3114 = cljs.core.next.call(null,G__3112);
G__3112 = G__3114;
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
var k = cljs.core.filter.call(null,(function (p1__3109_SHARP_){
var and__3822__auto__ = cljs.core.not_EQ_.call(null,"stage",cljs.core._lookup.call(null,p1__3109_SHARP_,"\uFDD0'type",null));
if(and__3822__auto__)
{var and__3822__auto____$1 = zee3.draw.core.intersects.call(null,p1__3109_SHARP_,cljs.core.ObjMap.fromObject(["\uFDD0'x","\uFDD0'y"],{"\uFDD0'x":x,"\uFDD0'y":y}));
if(cljs.core.truth_(and__3822__auto____$1))
{return cljs.core.contains_QMARK_.call(null,p1__3109_SHARP_,"\uFDD0'mousemove");
} else
{return and__3822__auto____$1;
}
} else
{return and__3822__auto__;
}
}),cljs.core.deref.call(null,zee3.draw.shapes.entities));
var G__3118 = cljs.core.seq.call(null,k);
while(true){
if(G__3118)
{var map__3119 = cljs.core.first.call(null,G__3118);
var map__3119__$1 = ((cljs.core.seq_QMARK_.call(null,map__3119))?cljs.core.apply.call(null,cljs.core.hash_map,map__3119):map__3119);
var mousemove = cljs.core._lookup.call(null,map__3119__$1,"\uFDD0'mousemove",null);
mousemove.call(null);
{
var G__3120 = cljs.core.next.call(null,G__3118);
G__3118 = G__3120;
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
var k = cljs.core.filter.call(null,(function (p1__3115_SHARP_){
var and__3822__auto__ = cljs.core.not_EQ_.call(null,"stage",cljs.core._lookup.call(null,p1__3115_SHARP_,"\uFDD0'type",null));
if(and__3822__auto__)
{var and__3822__auto____$1 = zee3.draw.core.intersects.call(null,p1__3115_SHARP_,cljs.core.ObjMap.fromObject(["\uFDD0'x","\uFDD0'y"],{"\uFDD0'x":x,"\uFDD0'y":y}));
if(cljs.core.truth_(and__3822__auto____$1))
{return cljs.core.contains_QMARK_.call(null,p1__3115_SHARP_,"\uFDD0'mousedown");
} else
{return and__3822__auto____$1;
}
} else
{return and__3822__auto__;
}
}),cljs.core.deref.call(null,zee3.draw.shapes.entities));
var G__3123 = cljs.core.seq.call(null,k);
while(true){
if(G__3123)
{var map__3124 = cljs.core.first.call(null,G__3123);
var map__3124__$1 = ((cljs.core.seq_QMARK_.call(null,map__3124))?cljs.core.apply.call(null,cljs.core.hash_map,map__3124):map__3124);
var mousedown = cljs.core._lookup.call(null,map__3124__$1,"\uFDD0'mousedown",null);
mousedown.call(null);
{
var G__3125 = cljs.core.next.call(null,G__3123);
G__3123 = G__3125;
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
var map__3128 = shape;
var map__3128__$1 = ((cljs.core.seq_QMARK_.call(null,map__3128))?cljs.core.apply.call(null,cljs.core.hash_map,map__3128):map__3128);
var radius = cljs.core._lookup.call(null,map__3128__$1,"\uFDD0'radius",null);
var centerY = cljs.core._lookup.call(null,map__3128__$1,"\uFDD0'centerY",null);
var centerX = cljs.core._lookup.call(null,map__3128__$1,"\uFDD0'centerX",null);
var map__3129 = point;
var map__3129__$1 = ((cljs.core.seq_QMARK_.call(null,map__3129))?cljs.core.apply.call(null,cljs.core.hash_map,map__3129):map__3129);
var y = cljs.core._lookup.call(null,map__3129__$1,"\uFDD0'y",null);
var x = cljs.core._lookup.call(null,map__3129__$1,"\uFDD0'x",null);
var distX = (x - centerX);
var distY = (y - centerY);
return (((distX * distX) + (distY * distY)) < (radius * radius));
});
zee3.draw.core.intersects_rectangle = (function intersects_rectangle(shape,point){
var map__3132 = shape;
var map__3132__$1 = ((cljs.core.seq_QMARK_.call(null,map__3132))?cljs.core.apply.call(null,cljs.core.hash_map,map__3132):map__3132);
var height = cljs.core._lookup.call(null,map__3132__$1,"\uFDD0'height",null);
var width = cljs.core._lookup.call(null,map__3132__$1,"\uFDD0'width",null);
var y = cljs.core._lookup.call(null,map__3132__$1,"\uFDD0'y",null);
var x = cljs.core._lookup.call(null,map__3132__$1,"\uFDD0'x",null);
var map__3133 = point;
var map__3133__$1 = ((cljs.core.seq_QMARK_.call(null,map__3133))?cljs.core.apply.call(null,cljs.core.hash_map,map__3133):map__3133);
var mouse_x = cljs.core._lookup.call(null,map__3133__$1,"\uFDD0'x",null);
var mouse_y = cljs.core._lookup.call(null,map__3133__$1,"\uFDD0'y",null);
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
zee3.draw.core.absolute_point_old = (function absolute_point_old(stage,point){
var map__3138 = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__3134_SHARP_){
var and__3822__auto__ = cljs.core._EQ_.call(null,stage,cljs.core._lookup.call(null,p1__3134_SHARP_,"\uFDD0'id",null));
if(and__3822__auto__)
{return cljs.core._EQ_.call(null,"stage",cljs.core._lookup.call(null,p1__3134_SHARP_,"\uFDD0'type",null));
} else
{return and__3822__auto__;
}
}),cljs.core.deref.call(null,zee3.draw.shapes.entities)));
var map__3138__$1 = ((cljs.core.seq_QMARK_.call(null,map__3138))?cljs.core.apply.call(null,cljs.core.hash_map,map__3138):map__3138);
var ref = cljs.core._lookup.call(null,map__3138__$1,"\uFDD0'ref",null);
var map__3139 = point;
var map__3139__$1 = ((cljs.core.seq_QMARK_.call(null,map__3139))?cljs.core.apply.call(null,cljs.core.hash_map,map__3139):map__3139);
var y = cljs.core._lookup.call(null,map__3139__$1,"\uFDD0'y",null);
var x = cljs.core._lookup.call(null,map__3139__$1,"\uFDD0'x",null);
var obj = ref;
var cl = 0;
var ct = 0;
while(true){
if(cljs.core.truth_(obj.offsetParent))
{{
var G__3140 = obj.offsetParent;
var G__3141 = (obj.offsetLeft + cl);
var G__3142 = (obj.offsetTop + ct);
obj = G__3140;
cl = G__3141;
ct = G__3142;
continue;
}
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'x","\uFDD0'y"],{"\uFDD0'x":((x - obj.offsetLeft) - cl),"\uFDD0'y":((y - obj.offsetTop) - ct)});
}
break;
}
});
zee3.draw.core.absolute_point = (function absolute_point(stage,point){
var map__3145 = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__3135_SHARP_){
var and__3822__auto__ = cljs.core._EQ_.call(null,stage,cljs.core._lookup.call(null,p1__3135_SHARP_,"\uFDD0'id",null));
if(and__3822__auto__)
{return cljs.core._EQ_.call(null,"stage",cljs.core._lookup.call(null,p1__3135_SHARP_,"\uFDD0'type",null));
} else
{return and__3822__auto__;
}
}),cljs.core.deref.call(null,zee3.draw.shapes.entities)));
var map__3145__$1 = ((cljs.core.seq_QMARK_.call(null,map__3145))?cljs.core.apply.call(null,cljs.core.hash_map,map__3145):map__3145);
var ref = cljs.core._lookup.call(null,map__3145__$1,"\uFDD0'ref",null);
var map__3146 = point;
var map__3146__$1 = ((cljs.core.seq_QMARK_.call(null,map__3146))?cljs.core.apply.call(null,cljs.core.hash_map,map__3146):map__3146);
var y = cljs.core._lookup.call(null,map__3146__$1,"\uFDD0'y",null);
var x = cljs.core._lookup.call(null,map__3146__$1,"\uFDD0'x",null);
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
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__3147_SHARP_){
return cljs.core._EQ_.call(null,id,cljs.core._lookup.call(null,p1__3147_SHARP_,"\uFDD0'id",null));
}),cljs.core.deref.call(null,zee3.draw.shapes.entities)));
});
