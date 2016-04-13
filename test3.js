var util = require("util");
var express = require("express");
var app = express();

console.log(typeof express);
console.log("" + express.__proto__);
console.log(express.prototype);
console.log("" + express.prototype.constructor);
console.log(typeof app);
console.log("" + app.__proto__);
console.log(app.prototype);
console.log("" + app.prototype.constructor);
console.log(app === express);

var a = {};

console.log(a);
console.log(a.toString());
console.log(typeof a);
console.log(typeof a.__proto__);
console.log(a.__proto__.constructor);
console.log(a.__proto__.constructor.name);

function b() {}

b.f = function() {return 0}

console.log(b);


