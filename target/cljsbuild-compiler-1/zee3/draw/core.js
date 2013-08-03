goog.provide('zee3.draw.core');
goog.require('cljs.core');
goog.require('zee3.draw.shapes');
goog.require('zee3.draw.defaults');
zee3.draw.core.stage = (function stage(config){
var map__19745 = config;
var map__19745__$1 = ((cljs.core.seq_QMARK_.call(null,map__19745))?cljs.core.apply.call(null,cljs.core.hash_map,map__19745):map__19745);
var height = cljs.core._lookup.call(null,map__19745__$1,"\uFDD0'height",null);
var width = cljs.core._lookup.call(null,map__19745__$1,"\uFDD0'width",null);
var id = cljs.core._lookup.call(null,map__19745__$1,"\uFDD0'id",null);
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
var k = cljs.core.filter.call(null,(function (p1__19746_SHARP_){
var and__3822__auto__ = cljs.core.not_EQ_.call(null,"stage",cljs.core._lookup.call(null,p1__19746_SHARP_,"\uFDD0'type",null));
if(and__3822__auto__)
{var and__3822__auto____$1 = zee3.draw.core.intersects.call(null,p1__19746_SHARP_,cljs.core.ObjMap.fromObject(["\uFDD0'x","\uFDD0'y"],{"\uFDD0'x":x,"\uFDD0'y":y}));
if(cljs.core.truth_(and__3822__auto____$1))
{return cljs.core.contains_QMARK_.call(null,p1__19746_SHARP_,"\uFDD0'mouseup");
} else
{return and__3822__auto____$1;
}
} else
{return and__3822__auto__;
}
}),cljs.core.deref.call(null,zee3.draw.shapes.entities));
var G__19750 = cljs.core.seq.call(null,k);
while(true){
if(G__19750)
{var map__19751 = cljs.core.first.call(null,G__19750);
var map__19751__$1 = ((cljs.core.seq_QMARK_.call(null,map__19751))?cljs.core.apply.call(null,cljs.core.hash_map,map__19751):map__19751);
var mouseup = cljs.core._lookup.call(null,map__19751__$1,"\uFDD0'mouseup",null);
mouseup.call(null);
{
var G__19752 = cljs.core.next.call(null,G__19750);
G__19750 = G__19752;
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
var k = cljs.core.filter.call(null,(function (p1__19747_SHARP_){
var and__3822__auto__ = cljs.core.not_EQ_.call(null,"stage",cljs.core._lookup.call(null,p1__19747_SHARP_,"\uFDD0'type",null));
if(and__3822__auto__)
{var and__3822__auto____$1 = zee3.draw.core.intersects.call(null,p1__19747_SHARP_,cljs.core.ObjMap.fromObject(["\uFDD0'x","\uFDD0'y"],{"\uFDD0'x":x,"\uFDD0'y":y}));
if(cljs.core.truth_(and__3822__auto____$1))
{return cljs.core.contains_QMARK_.call(null,p1__19747_SHARP_,"\uFDD0'mousemove");
} else
{return and__3822__auto____$1;
}
} else
{return and__3822__auto__;
}
}),cljs.core.deref.call(null,zee3.draw.shapes.entities));
var G__19757 = cljs.core.seq.call(null,k);
while(true){
if(G__19757)
{var map__19758 = cljs.core.first.call(null,G__19757);
var map__19758__$1 = ((cljs.core.seq_QMARK_.call(null,map__19758))?cljs.core.apply.call(null,cljs.core.hash_map,map__19758):map__19758);
var mousemove = cljs.core._lookup.call(null,map__19758__$1,"\uFDD0'mousemove",null);
mousemove.call(null);
{
var G__19759 = cljs.core.next.call(null,G__19757);
G__19757 = G__19759;
continue;
}
} else
{return null;
}
break;
}
});
zee3.draw.core.mouse_down = (function mouse_down(entities,point){
var k = cljs.core.filter.call(null,(function (p1__19753_SHARP_){
var and__3822__auto__ = zee3.draw.core.intersects.call(null,p1__19753_SHARP_,point);
if(cljs.core.truth_(and__3822__auto__))
{return cljs.core.contains_QMARK_.call(null,p1__19753_SHARP_,"\uFDD0'mouse-down");
} else
{return and__3822__auto__;
}
}),cljs.core.deref.call(null,zee3.draw.shapes.entities));
return cljs.core.map.call(null,(function (p1__19754_SHARP_){
return cljs.core._lookup.call(null,p1__19754_SHARP_,"\uFDD0'mouse-down",null).call(null);
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
var map__19762 = shape;
var map__19762__$1 = ((cljs.core.seq_QMARK_.call(null,map__19762))?cljs.core.apply.call(null,cljs.core.hash_map,map__19762):map__19762);
var radius = cljs.core._lookup.call(null,map__19762__$1,"\uFDD0'radius",null);
var centerY = cljs.core._lookup.call(null,map__19762__$1,"\uFDD0'centerY",null);
var centerX = cljs.core._lookup.call(null,map__19762__$1,"\uFDD0'centerX",null);
var map__19763 = point;
var map__19763__$1 = ((cljs.core.seq_QMARK_.call(null,map__19763))?cljs.core.apply.call(null,cljs.core.hash_map,map__19763):map__19763);
var y = cljs.core._lookup.call(null,map__19763__$1,"\uFDD0'y",null);
var x = cljs.core._lookup.call(null,map__19763__$1,"\uFDD0'x",null);
var distX = (x - centerX);
var distY = (y - centerY);
return (((distX * distX) + (distY * distY)) < (radius * radius));
});
zee3.draw.core.intersects_rectangle = (function intersects_rectangle(shape,point){
var map__19766 = shape;
var map__19766__$1 = ((cljs.core.seq_QMARK_.call(null,map__19766))?cljs.core.apply.call(null,cljs.core.hash_map,map__19766):map__19766);
var height = cljs.core._lookup.call(null,map__19766__$1,"\uFDD0'height",null);
var width = cljs.core._lookup.call(null,map__19766__$1,"\uFDD0'width",null);
var y = cljs.core._lookup.call(null,map__19766__$1,"\uFDD0'y",null);
var x = cljs.core._lookup.call(null,map__19766__$1,"\uFDD0'x",null);
var map__19767 = point;
var map__19767__$1 = ((cljs.core.seq_QMARK_.call(null,map__19767))?cljs.core.apply.call(null,cljs.core.hash_map,map__19767):map__19767);
var mouse_x = cljs.core._lookup.call(null,map__19767__$1,"\uFDD0'x",null);
var mouse_y = cljs.core._lookup.call(null,map__19767__$1,"\uFDD0'y",null);
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
var map__19771 = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__19768_SHARP_){
var and__3822__auto__ = cljs.core._EQ_.call(null,stage,cljs.core._lookup.call(null,p1__19768_SHARP_,"\uFDD0'id",null));
if(and__3822__auto__)
{return cljs.core._EQ_.call(null,"stage",cljs.core._lookup.call(null,p1__19768_SHARP_,"\uFDD0'type",null));
} else
{return and__3822__auto__;
}
}),cljs.core.deref.call(null,zee3.draw.shapes.entities)));
var map__19771__$1 = ((cljs.core.seq_QMARK_.call(null,map__19771))?cljs.core.apply.call(null,cljs.core.hash_map,map__19771):map__19771);
var ref = cljs.core._lookup.call(null,map__19771__$1,"\uFDD0'ref",null);
var map__19772 = point;
var map__19772__$1 = ((cljs.core.seq_QMARK_.call(null,map__19772))?cljs.core.apply.call(null,cljs.core.hash_map,map__19772):map__19772);
var y = cljs.core._lookup.call(null,map__19772__$1,"\uFDD0'y",null);
var x = cljs.core._lookup.call(null,map__19772__$1,"\uFDD0'x",null);
var obj = ref;
var cl = 0;
var ct = 0;
while(true){
if(cljs.core.truth_(obj.offsetParent))
{{
var G__19773 = obj.offsetParent;
var G__19774 = (obj.offsetLeft + cl);
var G__19775 = (obj.offsetTop + ct);
obj = G__19773;
cl = G__19774;
ct = G__19775;
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
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__19776_SHARP_){
return cljs.core._EQ_.call(null,id,cljs.core._lookup.call(null,p1__19776_SHARP_,"\uFDD0'id",null));
}),cljs.core.deref.call(null,zee3.draw.shapes.entities)));
});
