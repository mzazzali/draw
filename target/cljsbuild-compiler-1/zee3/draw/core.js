goog.provide('zee3.draw.core');
goog.require('cljs.core');
goog.require('zee3.draw.shapes');
goog.require('zee3.draw.defaults');
zee3.draw.core.stage = (function stage(config){
var map__2864 = config;
var map__2864__$1 = ((cljs.core.seq_QMARK_.call(null,map__2864))?cljs.core.apply.call(null,cljs.core.hash_map,map__2864):map__2864);
var height = cljs.core._lookup.call(null,map__2864__$1,"\uFDD0'height",null);
var width = cljs.core._lookup.call(null,map__2864__$1,"\uFDD0'width",null);
var id = cljs.core._lookup.call(null,map__2864__$1,"\uFDD0'id",null);
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
zee3.draw.core.handle_mouseup = (function handle_mouseup(event){
var x = event.clientX;
var y = event.clientY;
var k = cljs.core.filter.call(null,(function (p1__2865_SHARP_){
var and__3822__auto__ = cljs.core.not_EQ_.call(null,"stage",cljs.core._lookup.call(null,p1__2865_SHARP_,"\uFDD0'type",null));
if(and__3822__auto__)
{var and__3822__auto____$1 = zee3.draw.core.intersects.call(null,p1__2865_SHARP_,cljs.core.ObjMap.fromObject(["\uFDD0'x","\uFDD0'y"],{"\uFDD0'x":x,"\uFDD0'y":y}));
if(cljs.core.truth_(and__3822__auto____$1))
{return cljs.core.contains_QMARK_.call(null,p1__2865_SHARP_,"\uFDD0'mouseup");
} else
{return and__3822__auto____$1;
}
} else
{return and__3822__auto__;
}
}),cljs.core.deref.call(null,zee3.draw.shapes.entities));
var G__2869 = cljs.core.seq.call(null,k);
while(true){
if(G__2869)
{var map__2870 = cljs.core.first.call(null,G__2869);
var map__2870__$1 = ((cljs.core.seq_QMARK_.call(null,map__2870))?cljs.core.apply.call(null,cljs.core.hash_map,map__2870):map__2870);
var mouseup = cljs.core._lookup.call(null,map__2870__$1,"\uFDD0'mouseup",null);
mouseup.call(null);
{
var G__2871 = cljs.core.next.call(null,G__2869);
G__2869 = G__2871;
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
var k = cljs.core.filter.call(null,(function (p1__2866_SHARP_){
var and__3822__auto__ = cljs.core.not_EQ_.call(null,"stage",cljs.core._lookup.call(null,p1__2866_SHARP_,"\uFDD0'type",null));
if(and__3822__auto__)
{var and__3822__auto____$1 = zee3.draw.core.intersects.call(null,p1__2866_SHARP_,cljs.core.ObjMap.fromObject(["\uFDD0'x","\uFDD0'y"],{"\uFDD0'x":x,"\uFDD0'y":y}));
if(cljs.core.truth_(and__3822__auto____$1))
{return cljs.core.contains_QMARK_.call(null,p1__2866_SHARP_,"\uFDD0'mousemove");
} else
{return and__3822__auto____$1;
}
} else
{return and__3822__auto__;
}
}),cljs.core.deref.call(null,zee3.draw.shapes.entities));
var G__2876 = cljs.core.seq.call(null,k);
while(true){
if(G__2876)
{var map__2877 = cljs.core.first.call(null,G__2876);
var map__2877__$1 = ((cljs.core.seq_QMARK_.call(null,map__2877))?cljs.core.apply.call(null,cljs.core.hash_map,map__2877):map__2877);
var mousemove = cljs.core._lookup.call(null,map__2877__$1,"\uFDD0'mousemove",null);
mousemove.call(null);
{
var G__2878 = cljs.core.next.call(null,G__2876);
G__2876 = G__2878;
continue;
}
} else
{return null;
}
break;
}
});
zee3.draw.core.mouse_down = (function mouse_down(entities,point){
var k = cljs.core.filter.call(null,(function (p1__2872_SHARP_){
var and__3822__auto__ = zee3.draw.core.intersects.call(null,p1__2872_SHARP_,point);
if(cljs.core.truth_(and__3822__auto__))
{return cljs.core.contains_QMARK_.call(null,p1__2872_SHARP_,"\uFDD0'mouse-down");
} else
{return and__3822__auto__;
}
}),cljs.core.deref.call(null,zee3.draw.shapes.entities));
return cljs.core.map.call(null,(function (p1__2873_SHARP_){
return cljs.core._lookup.call(null,p1__2873_SHARP_,"\uFDD0'mouse-down",null).call(null);
}),k);
});
zee3.draw.core.intersects = (function intersects(shape,point){
if(cljs.core._EQ_.call(null,cljs.core._lookup.call(null,shape,"\uFDD0'type",null),"circle"))
{return zee3.draw.core.intersects_circle.call(null,shape,zee3.draw.core.absolute_point.call(null,cljs.core._lookup.call(null,shape,"\uFDD0'stage",null),point));
} else
{return zee3.draw.core.intersects_rectangle.call(null,shape,zee3.draw.core.absolute_point.call(null,cljs.core._lookup.call(null,shape,"\uFDD0'stage",null),point));
}
});
zee3.draw.core.intersects_circle = (function intersects_circle(shape,point){
var map__2881 = shape;
var map__2881__$1 = ((cljs.core.seq_QMARK_.call(null,map__2881))?cljs.core.apply.call(null,cljs.core.hash_map,map__2881):map__2881);
var radius = cljs.core._lookup.call(null,map__2881__$1,"\uFDD0'radius",null);
var centerY = cljs.core._lookup.call(null,map__2881__$1,"\uFDD0'centerY",null);
var centerX = cljs.core._lookup.call(null,map__2881__$1,"\uFDD0'centerX",null);
var map__2882 = point;
var map__2882__$1 = ((cljs.core.seq_QMARK_.call(null,map__2882))?cljs.core.apply.call(null,cljs.core.hash_map,map__2882):map__2882);
var y = cljs.core._lookup.call(null,map__2882__$1,"\uFDD0'y",null);
var x = cljs.core._lookup.call(null,map__2882__$1,"\uFDD0'x",null);
var distX = (x - centerX);
var distY = (y - centerY);
return (((distX * distX) + (distY * distY)) < (radius * radius));
});
zee3.draw.core.intersects_rectangle = (function intersects_rectangle(shape,point){
var map__2885 = shape;
var map__2885__$1 = ((cljs.core.seq_QMARK_.call(null,map__2885))?cljs.core.apply.call(null,cljs.core.hash_map,map__2885):map__2885);
var height = cljs.core._lookup.call(null,map__2885__$1,"\uFDD0'height",null);
var width = cljs.core._lookup.call(null,map__2885__$1,"\uFDD0'width",null);
var y = cljs.core._lookup.call(null,map__2885__$1,"\uFDD0'y",null);
var x = cljs.core._lookup.call(null,map__2885__$1,"\uFDD0'x",null);
var map__2886 = point;
var map__2886__$1 = ((cljs.core.seq_QMARK_.call(null,map__2886))?cljs.core.apply.call(null,cljs.core.hash_map,map__2886):map__2886);
var mouse_x = cljs.core._lookup.call(null,map__2886__$1,"\uFDD0'x",null);
var mouse_y = cljs.core._lookup.call(null,map__2886__$1,"\uFDD0'y",null);
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
var map__2891 = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__2887_SHARP_){
var and__3822__auto__ = cljs.core._EQ_.call(null,stage,cljs.core._lookup.call(null,p1__2887_SHARP_,"\uFDD0'id",null));
if(and__3822__auto__)
{return cljs.core._EQ_.call(null,"stage",cljs.core._lookup.call(null,p1__2887_SHARP_,"\uFDD0'type",null));
} else
{return and__3822__auto__;
}
}),cljs.core.deref.call(null,zee3.draw.shapes.entities)));
var map__2891__$1 = ((cljs.core.seq_QMARK_.call(null,map__2891))?cljs.core.apply.call(null,cljs.core.hash_map,map__2891):map__2891);
var ref = cljs.core._lookup.call(null,map__2891__$1,"\uFDD0'ref",null);
var map__2892 = point;
var map__2892__$1 = ((cljs.core.seq_QMARK_.call(null,map__2892))?cljs.core.apply.call(null,cljs.core.hash_map,map__2892):map__2892);
var y = cljs.core._lookup.call(null,map__2892__$1,"\uFDD0'y",null);
var x = cljs.core._lookup.call(null,map__2892__$1,"\uFDD0'x",null);
var obj = ref;
var cl = 0;
var ct = 0;
while(true){
if(cljs.core.truth_(obj.offsetParent))
{{
var G__2893 = obj.offsetParent;
var G__2894 = (obj.offsetLeft + cl);
var G__2895 = (obj.offsetTop + ct);
obj = G__2893;
cl = G__2894;
ct = G__2895;
continue;
}
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'x","\uFDD0'y"],{"\uFDD0'x":((x - obj.offsetLeft) - cl),"\uFDD0'y":((y - obj.offsetTop) - ct)});
}
break;
}
});
zee3.draw.core.absolute_point = (function absolute_point(stage,point){
var map__2898 = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__2888_SHARP_){
var and__3822__auto__ = cljs.core._EQ_.call(null,stage,cljs.core._lookup.call(null,p1__2888_SHARP_,"\uFDD0'id",null));
if(and__3822__auto__)
{return cljs.core._EQ_.call(null,"stage",cljs.core._lookup.call(null,p1__2888_SHARP_,"\uFDD0'type",null));
} else
{return and__3822__auto__;
}
}),cljs.core.deref.call(null,zee3.draw.shapes.entities)));
var map__2898__$1 = ((cljs.core.seq_QMARK_.call(null,map__2898))?cljs.core.apply.call(null,cljs.core.hash_map,map__2898):map__2898);
var ref = cljs.core._lookup.call(null,map__2898__$1,"\uFDD0'ref",null);
var map__2899 = point;
var map__2899__$1 = ((cljs.core.seq_QMARK_.call(null,map__2899))?cljs.core.apply.call(null,cljs.core.hash_map,map__2899):map__2899);
var y = cljs.core._lookup.call(null,map__2899__$1,"\uFDD0'y",null);
var x = cljs.core._lookup.call(null,map__2899__$1,"\uFDD0'x",null);
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
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__2900_SHARP_){
return cljs.core._EQ_.call(null,id,cljs.core._lookup.call(null,p1__2900_SHARP_,"\uFDD0'id",null));
}),cljs.core.deref.call(null,zee3.draw.shapes.entities)));
});
