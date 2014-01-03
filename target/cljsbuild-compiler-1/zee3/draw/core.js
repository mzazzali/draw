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
var map__3896 = config;
var map__3896__$1 = ((cljs.core.seq_QMARK_.call(null,map__3896))?cljs.core.apply.call(null,cljs.core.hash_map,map__3896):map__3896);
var height = cljs.core._lookup.call(null,map__3896__$1,"\uFDD0'height",null);
var width = cljs.core._lookup.call(null,map__3896__$1,"\uFDD0'width",null);
var id = cljs.core._lookup.call(null,map__3896__$1,"\uFDD0'id",null);
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
var k = cljs.core.filter.call(null,(function (p1__3897_SHARP_){
var and__3941__auto__ = cljs.core.not_EQ_.call(null,"stage",cljs.core._lookup.call(null,p1__3897_SHARP_,"\uFDD0'type",null));
if(and__3941__auto__)
{var and__3941__auto____$1 = zee3.draw.core.intersects.call(null,p1__3897_SHARP_,cljs.core.ObjMap.fromObject(["\uFDD0'x","\uFDD0'y"],{"\uFDD0'x":x,"\uFDD0'y":y}));
if(cljs.core.truth_(and__3941__auto____$1))
{return cljs.core.contains_QMARK_.call(null,p1__3897_SHARP_,"\uFDD0'mouseup");
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
}),cljs.core.deref.call(null,zee3.draw.shapes.entities));
var G__3901 = cljs.core.seq.call(null,k);
while(true){
if(G__3901)
{var map__3902 = cljs.core.first.call(null,G__3901);
var map__3902__$1 = ((cljs.core.seq_QMARK_.call(null,map__3902))?cljs.core.apply.call(null,cljs.core.hash_map,map__3902):map__3902);
var mouseup = cljs.core._lookup.call(null,map__3902__$1,"\uFDD0'mouseup",null);
mouseup.call(null);
{
var G__3903 = cljs.core.next.call(null,G__3901);
G__3901 = G__3903;
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
var k = cljs.core.filter.call(null,(function (p1__3898_SHARP_){
var and__3941__auto__ = cljs.core.not_EQ_.call(null,"stage",cljs.core._lookup.call(null,p1__3898_SHARP_,"\uFDD0'type",null));
if(and__3941__auto__)
{var and__3941__auto____$1 = zee3.draw.core.intersects.call(null,p1__3898_SHARP_,cljs.core.ObjMap.fromObject(["\uFDD0'x","\uFDD0'y"],{"\uFDD0'x":x,"\uFDD0'y":y}));
if(cljs.core.truth_(and__3941__auto____$1))
{return cljs.core.contains_QMARK_.call(null,p1__3898_SHARP_,"\uFDD0'mousemove");
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
}),cljs.core.deref.call(null,zee3.draw.shapes.entities));
var G__3907 = cljs.core.seq.call(null,k);
while(true){
if(G__3907)
{var map__3908 = cljs.core.first.call(null,G__3907);
var map__3908__$1 = ((cljs.core.seq_QMARK_.call(null,map__3908))?cljs.core.apply.call(null,cljs.core.hash_map,map__3908):map__3908);
var mousemove = cljs.core._lookup.call(null,map__3908__$1,"\uFDD0'mousemove",null);
mousemove.call(null);
{
var G__3909 = cljs.core.next.call(null,G__3907);
G__3907 = G__3909;
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
var k = cljs.core.filter.call(null,(function (p1__3904_SHARP_){
var and__3941__auto__ = cljs.core.not_EQ_.call(null,"stage",cljs.core._lookup.call(null,p1__3904_SHARP_,"\uFDD0'type",null));
if(and__3941__auto__)
{var and__3941__auto____$1 = zee3.draw.core.intersects.call(null,p1__3904_SHARP_,cljs.core.ObjMap.fromObject(["\uFDD0'x","\uFDD0'y"],{"\uFDD0'x":x,"\uFDD0'y":y}));
if(cljs.core.truth_(and__3941__auto____$1))
{return cljs.core.contains_QMARK_.call(null,p1__3904_SHARP_,"\uFDD0'mousedown");
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
}),cljs.core.deref.call(null,zee3.draw.shapes.entities));
var G__3912 = cljs.core.seq.call(null,k);
while(true){
if(G__3912)
{var map__3913 = cljs.core.first.call(null,G__3912);
var map__3913__$1 = ((cljs.core.seq_QMARK_.call(null,map__3913))?cljs.core.apply.call(null,cljs.core.hash_map,map__3913):map__3913);
var mousedown = cljs.core._lookup.call(null,map__3913__$1,"\uFDD0'mousedown",null);
mousedown.call(null);
{
var G__3914 = cljs.core.next.call(null,G__3912);
G__3912 = G__3914;
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
var map__3917 = shape;
var map__3917__$1 = ((cljs.core.seq_QMARK_.call(null,map__3917))?cljs.core.apply.call(null,cljs.core.hash_map,map__3917):map__3917);
var radius = cljs.core._lookup.call(null,map__3917__$1,"\uFDD0'radius",null);
var centerY = cljs.core._lookup.call(null,map__3917__$1,"\uFDD0'centerY",null);
var centerX = cljs.core._lookup.call(null,map__3917__$1,"\uFDD0'centerX",null);
var map__3918 = point;
var map__3918__$1 = ((cljs.core.seq_QMARK_.call(null,map__3918))?cljs.core.apply.call(null,cljs.core.hash_map,map__3918):map__3918);
var y = cljs.core._lookup.call(null,map__3918__$1,"\uFDD0'y",null);
var x = cljs.core._lookup.call(null,map__3918__$1,"\uFDD0'x",null);
var distX = (x - centerX);
var distY = (y - centerY);
return (((distX * distX) + (distY * distY)) < (radius * radius));
});
zee3.draw.core.intersects_rectangle = (function intersects_rectangle(shape,point){
var map__3921 = shape;
var map__3921__$1 = ((cljs.core.seq_QMARK_.call(null,map__3921))?cljs.core.apply.call(null,cljs.core.hash_map,map__3921):map__3921);
var height = cljs.core._lookup.call(null,map__3921__$1,"\uFDD0'height",null);
var width = cljs.core._lookup.call(null,map__3921__$1,"\uFDD0'width",null);
var y = cljs.core._lookup.call(null,map__3921__$1,"\uFDD0'y",null);
var x = cljs.core._lookup.call(null,map__3921__$1,"\uFDD0'x",null);
var map__3922 = point;
var map__3922__$1 = ((cljs.core.seq_QMARK_.call(null,map__3922))?cljs.core.apply.call(null,cljs.core.hash_map,map__3922):map__3922);
var mouse_x = cljs.core._lookup.call(null,map__3922__$1,"\uFDD0'x",null);
var mouse_y = cljs.core._lookup.call(null,map__3922__$1,"\uFDD0'y",null);
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
var map__3927 = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__3923_SHARP_){
var and__3941__auto__ = cljs.core._EQ_.call(null,stage,cljs.core._lookup.call(null,p1__3923_SHARP_,"\uFDD0'id",null));
if(and__3941__auto__)
{return cljs.core._EQ_.call(null,"stage",cljs.core._lookup.call(null,p1__3923_SHARP_,"\uFDD0'type",null));
} else
{return and__3941__auto__;
}
}),cljs.core.deref.call(null,zee3.draw.shapes.entities)));
var map__3927__$1 = ((cljs.core.seq_QMARK_.call(null,map__3927))?cljs.core.apply.call(null,cljs.core.hash_map,map__3927):map__3927);
var ref = cljs.core._lookup.call(null,map__3927__$1,"\uFDD0'ref",null);
var map__3928 = point;
var map__3928__$1 = ((cljs.core.seq_QMARK_.call(null,map__3928))?cljs.core.apply.call(null,cljs.core.hash_map,map__3928):map__3928);
var y = cljs.core._lookup.call(null,map__3928__$1,"\uFDD0'y",null);
var x = cljs.core._lookup.call(null,map__3928__$1,"\uFDD0'x",null);
var obj = ref;
var cl = 0;
var ct = 0;
while(true){
if(cljs.core.truth_(obj.offsetParent))
{{
var G__3929 = obj.offsetParent;
var G__3930 = (obj.offsetLeft + cl);
var G__3931 = (obj.offsetTop + ct);
obj = G__3929;
cl = G__3930;
ct = G__3931;
continue;
}
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'x","\uFDD0'y"],{"\uFDD0'x":((x - obj.offsetLeft) - cl),"\uFDD0'y":((y - obj.offsetTop) - ct)});
}
break;
}
});
zee3.draw.core.absolute_point = (function absolute_point(stage,point){
var map__3934 = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__3924_SHARP_){
var and__3941__auto__ = cljs.core._EQ_.call(null,stage,cljs.core._lookup.call(null,p1__3924_SHARP_,"\uFDD0'id",null));
if(and__3941__auto__)
{return cljs.core._EQ_.call(null,"stage",cljs.core._lookup.call(null,p1__3924_SHARP_,"\uFDD0'type",null));
} else
{return and__3941__auto__;
}
}),cljs.core.deref.call(null,zee3.draw.shapes.entities)));
var map__3934__$1 = ((cljs.core.seq_QMARK_.call(null,map__3934))?cljs.core.apply.call(null,cljs.core.hash_map,map__3934):map__3934);
var ref = cljs.core._lookup.call(null,map__3934__$1,"\uFDD0'ref",null);
var map__3935 = point;
var map__3935__$1 = ((cljs.core.seq_QMARK_.call(null,map__3935))?cljs.core.apply.call(null,cljs.core.hash_map,map__3935):map__3935);
var y = cljs.core._lookup.call(null,map__3935__$1,"\uFDD0'y",null);
var x = cljs.core._lookup.call(null,map__3935__$1,"\uFDD0'x",null);
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
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__3936_SHARP_){
return cljs.core._EQ_.call(null,id,cljs.core._lookup.call(null,p1__3936_SHARP_,"\uFDD0'id",null));
}),cljs.core.deref.call(null,zee3.draw.shapes.entities)));
});
