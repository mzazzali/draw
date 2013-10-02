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
var map__3796 = config;
var map__3796__$1 = ((cljs.core.seq_QMARK_.call(null,map__3796))?cljs.core.apply.call(null,cljs.core.hash_map,map__3796):map__3796);
var height = cljs.core._lookup.call(null,map__3796__$1,"\uFDD0'height",null);
var width = cljs.core._lookup.call(null,map__3796__$1,"\uFDD0'width",null);
var id = cljs.core._lookup.call(null,map__3796__$1,"\uFDD0'id",null);
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
var k = cljs.core.filter.call(null,(function (p1__3797_SHARP_){
var and__3822__auto__ = cljs.core.not_EQ_.call(null,"stage",cljs.core._lookup.call(null,p1__3797_SHARP_,"\uFDD0'type",null));
if(and__3822__auto__)
{var and__3822__auto____$1 = zee3.draw.core.intersects.call(null,p1__3797_SHARP_,cljs.core.ObjMap.fromObject(["\uFDD0'x","\uFDD0'y"],{"\uFDD0'x":x,"\uFDD0'y":y}));
if(cljs.core.truth_(and__3822__auto____$1))
{return cljs.core.contains_QMARK_.call(null,p1__3797_SHARP_,"\uFDD0'mouseup");
} else
{return and__3822__auto____$1;
}
} else
{return and__3822__auto__;
}
}),cljs.core.deref.call(null,zee3.draw.shapes.entities));
var G__3801 = cljs.core.seq.call(null,k);
while(true){
if(G__3801)
{var map__3802 = cljs.core.first.call(null,G__3801);
var map__3802__$1 = ((cljs.core.seq_QMARK_.call(null,map__3802))?cljs.core.apply.call(null,cljs.core.hash_map,map__3802):map__3802);
var mouseup = cljs.core._lookup.call(null,map__3802__$1,"\uFDD0'mouseup",null);
mouseup.call(null);
{
var G__3803 = cljs.core.next.call(null,G__3801);
G__3801 = G__3803;
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
var k = cljs.core.filter.call(null,(function (p1__3798_SHARP_){
var and__3822__auto__ = cljs.core.not_EQ_.call(null,"stage",cljs.core._lookup.call(null,p1__3798_SHARP_,"\uFDD0'type",null));
if(and__3822__auto__)
{var and__3822__auto____$1 = zee3.draw.core.intersects.call(null,p1__3798_SHARP_,cljs.core.ObjMap.fromObject(["\uFDD0'x","\uFDD0'y"],{"\uFDD0'x":x,"\uFDD0'y":y}));
if(cljs.core.truth_(and__3822__auto____$1))
{return cljs.core.contains_QMARK_.call(null,p1__3798_SHARP_,"\uFDD0'mousemove");
} else
{return and__3822__auto____$1;
}
} else
{return and__3822__auto__;
}
}),cljs.core.deref.call(null,zee3.draw.shapes.entities));
var G__3807 = cljs.core.seq.call(null,k);
while(true){
if(G__3807)
{var map__3808 = cljs.core.first.call(null,G__3807);
var map__3808__$1 = ((cljs.core.seq_QMARK_.call(null,map__3808))?cljs.core.apply.call(null,cljs.core.hash_map,map__3808):map__3808);
var mousemove = cljs.core._lookup.call(null,map__3808__$1,"\uFDD0'mousemove",null);
mousemove.call(null);
{
var G__3809 = cljs.core.next.call(null,G__3807);
G__3807 = G__3809;
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
var k = cljs.core.filter.call(null,(function (p1__3804_SHARP_){
var and__3822__auto__ = cljs.core.not_EQ_.call(null,"stage",cljs.core._lookup.call(null,p1__3804_SHARP_,"\uFDD0'type",null));
if(and__3822__auto__)
{var and__3822__auto____$1 = zee3.draw.core.intersects.call(null,p1__3804_SHARP_,cljs.core.ObjMap.fromObject(["\uFDD0'x","\uFDD0'y"],{"\uFDD0'x":x,"\uFDD0'y":y}));
if(cljs.core.truth_(and__3822__auto____$1))
{return cljs.core.contains_QMARK_.call(null,p1__3804_SHARP_,"\uFDD0'mousedown");
} else
{return and__3822__auto____$1;
}
} else
{return and__3822__auto__;
}
}),cljs.core.deref.call(null,zee3.draw.shapes.entities));
var G__3812 = cljs.core.seq.call(null,k);
while(true){
if(G__3812)
{var map__3813 = cljs.core.first.call(null,G__3812);
var map__3813__$1 = ((cljs.core.seq_QMARK_.call(null,map__3813))?cljs.core.apply.call(null,cljs.core.hash_map,map__3813):map__3813);
var mousedown = cljs.core._lookup.call(null,map__3813__$1,"\uFDD0'mousedown",null);
mousedown.call(null);
{
var G__3814 = cljs.core.next.call(null,G__3812);
G__3812 = G__3814;
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
var map__3817 = shape;
var map__3817__$1 = ((cljs.core.seq_QMARK_.call(null,map__3817))?cljs.core.apply.call(null,cljs.core.hash_map,map__3817):map__3817);
var radius = cljs.core._lookup.call(null,map__3817__$1,"\uFDD0'radius",null);
var centerY = cljs.core._lookup.call(null,map__3817__$1,"\uFDD0'centerY",null);
var centerX = cljs.core._lookup.call(null,map__3817__$1,"\uFDD0'centerX",null);
var map__3818 = point;
var map__3818__$1 = ((cljs.core.seq_QMARK_.call(null,map__3818))?cljs.core.apply.call(null,cljs.core.hash_map,map__3818):map__3818);
var y = cljs.core._lookup.call(null,map__3818__$1,"\uFDD0'y",null);
var x = cljs.core._lookup.call(null,map__3818__$1,"\uFDD0'x",null);
var distX = (x - centerX);
var distY = (y - centerY);
return (((distX * distX) + (distY * distY)) < (radius * radius));
});
zee3.draw.core.intersects_rectangle = (function intersects_rectangle(shape,point){
var map__3821 = shape;
var map__3821__$1 = ((cljs.core.seq_QMARK_.call(null,map__3821))?cljs.core.apply.call(null,cljs.core.hash_map,map__3821):map__3821);
var height = cljs.core._lookup.call(null,map__3821__$1,"\uFDD0'height",null);
var width = cljs.core._lookup.call(null,map__3821__$1,"\uFDD0'width",null);
var y = cljs.core._lookup.call(null,map__3821__$1,"\uFDD0'y",null);
var x = cljs.core._lookup.call(null,map__3821__$1,"\uFDD0'x",null);
var map__3822 = point;
var map__3822__$1 = ((cljs.core.seq_QMARK_.call(null,map__3822))?cljs.core.apply.call(null,cljs.core.hash_map,map__3822):map__3822);
var mouse_x = cljs.core._lookup.call(null,map__3822__$1,"\uFDD0'x",null);
var mouse_y = cljs.core._lookup.call(null,map__3822__$1,"\uFDD0'y",null);
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
var map__3827 = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__3823_SHARP_){
var and__3822__auto__ = cljs.core._EQ_.call(null,stage,cljs.core._lookup.call(null,p1__3823_SHARP_,"\uFDD0'id",null));
if(and__3822__auto__)
{return cljs.core._EQ_.call(null,"stage",cljs.core._lookup.call(null,p1__3823_SHARP_,"\uFDD0'type",null));
} else
{return and__3822__auto__;
}
}),cljs.core.deref.call(null,zee3.draw.shapes.entities)));
var map__3827__$1 = ((cljs.core.seq_QMARK_.call(null,map__3827))?cljs.core.apply.call(null,cljs.core.hash_map,map__3827):map__3827);
var ref = cljs.core._lookup.call(null,map__3827__$1,"\uFDD0'ref",null);
var map__3828 = point;
var map__3828__$1 = ((cljs.core.seq_QMARK_.call(null,map__3828))?cljs.core.apply.call(null,cljs.core.hash_map,map__3828):map__3828);
var y = cljs.core._lookup.call(null,map__3828__$1,"\uFDD0'y",null);
var x = cljs.core._lookup.call(null,map__3828__$1,"\uFDD0'x",null);
var obj = ref;
var cl = 0;
var ct = 0;
while(true){
if(cljs.core.truth_(obj.offsetParent))
{{
var G__3829 = obj.offsetParent;
var G__3830 = (obj.offsetLeft + cl);
var G__3831 = (obj.offsetTop + ct);
obj = G__3829;
cl = G__3830;
ct = G__3831;
continue;
}
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'x","\uFDD0'y"],{"\uFDD0'x":((x - obj.offsetLeft) - cl),"\uFDD0'y":((y - obj.offsetTop) - ct)});
}
break;
}
});
zee3.draw.core.absolute_point = (function absolute_point(stage,point){
var map__3834 = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__3824_SHARP_){
var and__3822__auto__ = cljs.core._EQ_.call(null,stage,cljs.core._lookup.call(null,p1__3824_SHARP_,"\uFDD0'id",null));
if(and__3822__auto__)
{return cljs.core._EQ_.call(null,"stage",cljs.core._lookup.call(null,p1__3824_SHARP_,"\uFDD0'type",null));
} else
{return and__3822__auto__;
}
}),cljs.core.deref.call(null,zee3.draw.shapes.entities)));
var map__3834__$1 = ((cljs.core.seq_QMARK_.call(null,map__3834))?cljs.core.apply.call(null,cljs.core.hash_map,map__3834):map__3834);
var ref = cljs.core._lookup.call(null,map__3834__$1,"\uFDD0'ref",null);
var map__3835 = point;
var map__3835__$1 = ((cljs.core.seq_QMARK_.call(null,map__3835))?cljs.core.apply.call(null,cljs.core.hash_map,map__3835):map__3835);
var y = cljs.core._lookup.call(null,map__3835__$1,"\uFDD0'y",null);
var x = cljs.core._lookup.call(null,map__3835__$1,"\uFDD0'x",null);
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
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__3836_SHARP_){
return cljs.core._EQ_.call(null,id,cljs.core._lookup.call(null,p1__3836_SHARP_,"\uFDD0'id",null));
}),cljs.core.deref.call(null,zee3.draw.shapes.entities)));
});
