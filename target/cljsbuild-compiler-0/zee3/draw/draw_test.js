goog.provide('zee3.draw.core_test');
goog.require('cljs.core');
goog.require('zee3.draw.core');
describe("testing the tests",(function (){
return it("should be equal",(function (){
return expect(cljs.core._EQ_.call(null,1,1)).toBeTruthy();
}));
}));
describe("test rectangle intersection",(function (){
it("should intersect",(function (){
return expect(cljs.core._EQ_.call(null,true,zee3.draw.core.intersects_rectangle.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'x","\uFDD0'y","\uFDD0'width","\uFDD0'height"],{"\uFDD0'x":10,"\uFDD0'y":10,"\uFDD0'width":100,"\uFDD0'height":100}),cljs.core.ObjMap.fromObject(["\uFDD0'x","\uFDD0'y"],{"\uFDD0'x":90,"\uFDD0'y":90})))).toBeTruthy();
}));
return it("should not intersect",(function (){
return expect(cljs.core._EQ_.call(null,false,zee3.draw.core.intersects_rectangle.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'x","\uFDD0'y","\uFDD0'width","\uFDD0'height"],{"\uFDD0'x":10,"\uFDD0'y":10,"\uFDD0'width":100,"\uFDD0'height":100}),cljs.core.ObjMap.fromObject(["\uFDD0'x","\uFDD0'y"],{"\uFDD0'x":120,"\uFDD0'y":120})))).toBeTruthy();
}));
}));
describe("test circle intersection",(function (){
it("should intersect",(function (){
return expect(cljs.core._EQ_.call(null,true,zee3.draw.core.intersects_circle.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'centerX","\uFDD0'centerY","\uFDD0'radius"],{"\uFDD0'centerX":30,"\uFDD0'centerY":30,"\uFDD0'radius":20}),cljs.core.ObjMap.fromObject(["\uFDD0'x","\uFDD0'y"],{"\uFDD0'x":30,"\uFDD0'y":30})))).toBeTruthy();
}));
return it("should not intersect",(function (){
return expect(cljs.core._EQ_.call(null,false,zee3.draw.core.intersects_circle.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'centerX","\uFDD0'centerY","\uFDD0'radius"],{"\uFDD0'centerX":30,"\uFDD0'centerY":30,"\uFDD0'radius":20}),cljs.core.ObjMap.fromObject(["\uFDD0'x","\uFDD0'y"],{"\uFDD0'x":120,"\uFDD0'y":120})))).toBeTruthy();
}));
}));
describe("create stage",(function (){
beforeEach((function (){
return zee3.draw.core.stage.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'x","\uFDD0'y","\uFDD0'width","\uFDD0'height"],{"\uFDD0'id":"test-stage","\uFDD0'x":0,"\uFDD0'y":0,"\uFDD0'width":300,"\uFDD0'height":300}));
}));
afterEach((function (){
return (document.getElementsByTagName("body")[0]).removeChild(document.getElementById("test-stage"));
}));
it("test that the stage was created",(function (){
return expect(cljs.core.not_EQ_.call(null,null,document.getElementById("test-stage"))).toBeTruthy();
}));
return it("test that the entity was created",(function (){
return expect(cljs.core.not_EQ_.call(null,null,zee3.draw.core.get_entity.call(null,"test-stage"))).toBeTruthy();
}));
}));
describe("create rectangle",(function (){
beforeEach((function (){
zee3.draw.core.stage.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'x","\uFDD0'y","\uFDD0'width","\uFDD0'height"],{"\uFDD0'id":"test-stage2","\uFDD0'x":0,"\uFDD0'y":0,"\uFDD0'width":300,"\uFDD0'height":300}));
return zee3.draw.core.rectangle.call(null,"test-stage2",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'x","\uFDD0'y","\uFDD0'width","\uFDD0'height"],{"\uFDD0'id":"my-rectangle","\uFDD0'x":10,"\uFDD0'y":10,"\uFDD0'width":300,"\uFDD0'height":300}));
}));
afterEach((function (){
var body = (document.getElementsByTagName("body")[0]);
return body.removeChild(document.getElementById("test-stage2"));
}));
return it("test that the rectangle was created",(function (){
return expect(cljs.core.not_EQ_.call(null,null,zee3.draw.core.get_entity.call(null,"my-rectangle"))).toBeTruthy();
}));
}));
describe("create rounded-rectangle",(function (){
beforeEach((function (){
zee3.draw.core.stage.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'x","\uFDD0'y","\uFDD0'width","\uFDD0'height"],{"\uFDD0'id":"test-stage","\uFDD0'x":0,"\uFDD0'y":0,"\uFDD0'width":300,"\uFDD0'height":300}));
return zee3.draw.core.rounded_rectangle.call(null,"test-stage",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'x","\uFDD0'y","\uFDD0'width","\uFDD0'height"],{"\uFDD0'id":"my-rounded-rectangle","\uFDD0'x":10,"\uFDD0'y":10,"\uFDD0'width":300,"\uFDD0'height":300}));
}));
afterEach((function (){
var body = (document.getElementsByTagName("body")[0]);
return body.removeChild(document.getElementById("test-stage"));
}));
return it("test that the rounded-rectangle was created",(function (){
return expect(cljs.core.not_EQ_.call(null,null,zee3.draw.core.get_entity.call(null,"my-rounded-rectangle"))).toBeTruthy();
}));
}));
describe("create circle",(function (){
beforeEach((function (){
zee3.draw.core.stage.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'x","\uFDD0'y","\uFDD0'width","\uFDD0'height"],{"\uFDD0'id":"test-stage1","\uFDD0'x":0,"\uFDD0'y":0,"\uFDD0'width":300,"\uFDD0'height":300}));
return zee3.draw.core.circle.call(null,"test-stage1",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'centerX","\uFDD0'centerY","\uFDD0'radius"],{"\uFDD0'id":"my-circle","\uFDD0'centerX":100,"\uFDD0'centerY":100,"\uFDD0'radius":10}));
}));
afterEach((function (){
var body = (document.getElementsByTagName("body")[0]);
return body.removeChild(document.getElementById("test-stage1"));
}));
return it("test that the circle was created",(function (){
return expect(cljs.core.not_EQ_.call(null,null,zee3.draw.core.get_entity.call(null,"my-circle"))).toBeTruthy();
}));
}));
