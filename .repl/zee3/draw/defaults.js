goog.provide('zee3.draw.defaults');
goog.require('cljs.core');
zee3.draw.defaults.HIT_TEST_STAGE = "color-map-stage";
zee3.draw.defaults.cfg = cljs.core.ObjMap.fromObject(["\uFDD0'stage-init","\uFDD0'renderer"],{"\uFDD0'stage-init":cljs.core.PersistentVector.fromArray([zee3.draw.core.draw_stage,zee3.draw.core.draw_stage], true),"\uFDD0'renderer":cljs.core.PersistentVector.fromArray([zee3.draw.color_map.render_shape,zee3.draw.core.render_shape], true)});
zee3.draw.defaults.base = cljs.core.ObjMap.fromObject(["\uFDD0'x","\uFDD0'y","\uFDD0'width","\uFDD0'height","\uFDD0'lineWidth","\uFDD0'fillStyle","\uFDD0'Strokestyle"],{"\uFDD0'x":0,"\uFDD0'y":0,"\uFDD0'width":100,"\uFDD0'height":100,"\uFDD0'lineWidth":1,"\uFDD0'fillStyle":"#FFFFFF","\uFDD0'Strokestyle":"#FFFFFF"});
zee3.draw.defaults.rounded_rectangle = cljs.core.merge.call(null,zee3.draw.defaults.base,cljs.core.ObjMap.fromObject(["\uFDD0'cornerRadius"],{"\uFDD0'cornerRadius":5}));
zee3.draw.defaults.circle = cljs.core.merge.call(null,zee3.draw.defaults.base,cljs.core.ObjMap.fromObject(["\uFDD0'centerX","\uFDD0'centerY","\uFDD0'radius","\uFDD0'lineWidth"],{"\uFDD0'centerX":0,"\uFDD0'centerY":100,"\uFDD0'radius":100,"\uFDD0'lineWidth":1}));
zee3.draw.defaults.text = cljs.core.ObjMap.fromObject(["\uFDD0'fillStyle","\uFDD0'x","\uFDD0'y","\uFDD0'font","\uFDD0'text"],{"\uFDD0'fillStyle":"#FFFFFF","\uFDD0'x":0,"\uFDD0'y":0,"\uFDD0'font":"bold 16px Arial","\uFDD0'text":""});
