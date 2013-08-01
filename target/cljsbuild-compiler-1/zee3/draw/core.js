goog.provide('zee3.draw.core');
goog.require('cljs.core');
goog.require('zee3.draw.shapes');
goog.require('zee3.draw.defaults');
zee3.draw.core.stage = (function stage(config){
var map__3829 = config;
var map__3829__$1 = ((cljs.core.seq_QMARK_.call(null,map__3829))?cljs.core.apply.call(null,cljs.core.hash_map,map__3829):map__3829);
var height = cljs.core._lookup.call(null,map__3829__$1,"\uFDD0'height",null);
var width = cljs.core._lookup.call(null,map__3829__$1,"\uFDD0'width",null);
var id = cljs.core._lookup.call(null,map__3829__$1,"\uFDD0'id",null);
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
var x = event.x;
var y = event.y;
var k = cljs.core.filter.call(null,(function (p1__3830_SHARP_){
var and__3822__auto__ = cljs.core.not_EQ_.call(null,"stage",cljs.core._lookup.call(null,p1__3830_SHARP_,"\uFDD0'type",null));
if(and__3822__auto__)
{var and__3822__auto____$1 = zee3.draw.core.intersects.call(null,p1__3830_SHARP_,cljs.core.ObjMap.fromObject(["\uFDD0'x","\uFDD0'y"],{"\uFDD0'x":x,"\uFDD0'y":y}));
if(cljs.core.truth_(and__3822__auto____$1))
{return cljs.core.contains_QMARK_.call(null,p1__3830_SHARP_,"\uFDD0'mouseup");
} else
{return and__3822__auto____$1;
}
} else
{return and__3822__auto__;
}
}),cljs.core.deref.call(null,zee3.draw.shapes.entities));
var G__3835 = cljs.core.seq.call(null,k);
while(true){
if(G__3835)
{var map__3836 = cljs.core.first.call(null,G__3835);
var map__3836__$1 = ((cljs.core.seq_QMARK_.call(null,map__3836))?cljs.core.apply.call(null,cljs.core.hash_map,map__3836):map__3836);
var mouseup = cljs.core._lookup.call(null,map__3836__$1,"\uFDD0'mouseup",null);
mouseup.call(null);
{
var G__3837 = cljs.core.next.call(null,G__3835);
G__3835 = G__3837;
continue;
}
} else
{return null;
}
break;
}
});
zee3.draw.core.mouse_down = (function mouse_down(entities,point){
var k = cljs.core.filter.call(null,(function (p1__3831_SHARP_){
var and__3822__auto__ = zee3.draw.core.intersects.call(null,p1__3831_SHARP_,point);
if(cljs.core.truth_(and__3822__auto__))
{return cljs.core.contains_QMARK_.call(null,p1__3831_SHARP_,"\uFDD0'mouse-down");
} else
{return and__3822__auto__;
}
}),cljs.core.deref.call(null,zee3.draw.shapes.entities));
return cljs.core.map.call(null,(function (p1__3832_SHARP_){
return cljs.core._lookup.call(null,p1__3832_SHARP_,"\uFDD0'mouse-down",null).call(null);
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
var map__3840 = shape;
var map__3840__$1 = ((cljs.core.seq_QMARK_.call(null,map__3840))?cljs.core.apply.call(null,cljs.core.hash_map,map__3840):map__3840);
var radius = cljs.core._lookup.call(null,map__3840__$1,"\uFDD0'radius",null);
var centerY = cljs.core._lookup.call(null,map__3840__$1,"\uFDD0'centerY",null);
var centerX = cljs.core._lookup.call(null,map__3840__$1,"\uFDD0'centerX",null);
var map__3841 = point;
var map__3841__$1 = ((cljs.core.seq_QMARK_.call(null,map__3841))?cljs.core.apply.call(null,cljs.core.hash_map,map__3841):map__3841);
var y = cljs.core._lookup.call(null,map__3841__$1,"\uFDD0'y",null);
var x = cljs.core._lookup.call(null,map__3841__$1,"\uFDD0'x",null);
var distX = (x - centerX);
var distY = (y - centerY);
return (((distX * distX) + (distY * distY)) < (radius * radius));
});
zee3.draw.core.intersects_rectangle = (function intersects_rectangle(shape,point){
var map__3844 = shape;
var map__3844__$1 = ((cljs.core.seq_QMARK_.call(null,map__3844))?cljs.core.apply.call(null,cljs.core.hash_map,map__3844):map__3844);
var height = cljs.core._lookup.call(null,map__3844__$1,"\uFDD0'height",null);
var width = cljs.core._lookup.call(null,map__3844__$1,"\uFDD0'width",null);
var y = cljs.core._lookup.call(null,map__3844__$1,"\uFDD0'y",null);
var x = cljs.core._lookup.call(null,map__3844__$1,"\uFDD0'x",null);
var map__3845 = point;
var map__3845__$1 = ((cljs.core.seq_QMARK_.call(null,map__3845))?cljs.core.apply.call(null,cljs.core.hash_map,map__3845):map__3845);
var mouse_x = cljs.core._lookup.call(null,map__3845__$1,"\uFDD0'x",null);
var mouse_y = cljs.core._lookup.call(null,map__3845__$1,"\uFDD0'y",null);
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
var map__3849 = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__3846_SHARP_){
var and__3822__auto__ = cljs.core._EQ_.call(null,stage,cljs.core._lookup.call(null,p1__3846_SHARP_,"\uFDD0'id",null));
if(and__3822__auto__)
{return cljs.core._EQ_.call(null,"stage",cljs.core._lookup.call(null,p1__3846_SHARP_,"\uFDD0'type",null));
} else
{return and__3822__auto__;
}
}),cljs.core.deref.call(null,zee3.draw.shapes.entities)));
var map__3849__$1 = ((cljs.core.seq_QMARK_.call(null,map__3849))?cljs.core.apply.call(null,cljs.core.hash_map,map__3849):map__3849);
var ref = cljs.core._lookup.call(null,map__3849__$1,"\uFDD0'ref",null);
var map__3850 = point;
var map__3850__$1 = ((cljs.core.seq_QMARK_.call(null,map__3850))?cljs.core.apply.call(null,cljs.core.hash_map,map__3850):map__3850);
var y = cljs.core._lookup.call(null,map__3850__$1,"\uFDD0'y",null);
var x = cljs.core._lookup.call(null,map__3850__$1,"\uFDD0'x",null);
var obj = ref;
var cl = 0;
var ct = 0;
while(true){
if(cljs.core.truth_(obj.offsetParent))
{{
var G__3851 = obj.offsetParent;
var G__3852 = (obj.offsetLeft + cl);
var G__3853 = (obj.offsetTop + ct);
obj = G__3851;
cl = G__3852;
ct = G__3853;
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
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__3854_SHARP_){
return cljs.core._EQ_.call(null,id,cljs.core._lookup.call(null,p1__3854_SHARP_,"\uFDD0'id",null));
}),cljs.core.deref.call(null,zee3.draw.shapes.entities)));
});
