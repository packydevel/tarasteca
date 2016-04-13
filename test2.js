var util = require("util");

var o1 = {x: 1};
var o2 = {__proto__: o1, y: 1};
var o3 = {__proto__: o2, z: 1};

console.log("Object Object");
console.log("------------------------------");
console.log("Object: " + util.inspect(Object));
console.log("Object.__proto__: " + util.inspect(Object.__proto__));
console.log("Object.prototype: " + util.inspect(Object.prototype));

console.log("Object {}");
console.log("------------------------------");
console.log("{}: " + util.inspect({}));
console.log("{}.__proto__: " + util.inspect({}.__proto__));
console.log("{}.prototype: " + util.inspect({}.prototype));

console.log();

console.log("Object o1");
console.log("------------------------------");
console.log("o1: " + util.inspect(o1));
console.log("o1.__proto__: " + util.inspect(o1.__proto__));
console.log("o1.prototype: " + util.inspect(o1.prototype));

console.log();

console.log("Object o2");
console.log("------------------------------");
console.log("o2: " + util.inspect(o2));
console.log("o2.__proto__: " + util.inspect(o2.__proto__));
console.log("o2.prototype: " + util.inspect(o2.prototype));

console.log();

console.log("Object o3");
console.log("------------------------------");
console.log("o3: " + util.inspect(o3));
console.log("o3.__proto__: " + util.inspect(o3.__proto__));
console.log("o3.prototype: " + util.inspect(o3.prototype));

console.log();

console.log("o2.x + o2.y + o2.z: " + (o3.x + o3.y + o3.z));

function F() {
}

F.x = 1;

console.log(F.hasOwnProperty('prototype'));
console.log(F.prototype.constructor);
console.log(F);
console.log(F.prototype);