function O1() {
}

O1.myproperty = 100;
O1.mymethod = function () {
	return 0;
}

var o1 = new O1();

console.log("This is O1/o1)");
console.log(typeof O1);
console.log(O1.__proto__);
console.log(O1.prototype);
console.log(O1);
console.log(o1);

function O2() {
	this.myproperty = 100;
	this.mymethod = function () {
		return 0;
	}
}

var o2 = new O2();

O2();

console.log("This is O2/o2");
console.log(typeof O2);
console.log(O2.__proto__);
console.log(O2.prototype);
console.log(O2);
console.log(o2);

function O3() {
}

O3.prototype.myproperty = 100;
O3.prototype.mymethod = function () {
	return 0;
}

var o3 = new O3();

console.log("This is O3/o3)");
console.log(typeof O3);
console.log(O3.__proto__);
console.log(O3.prototype);
console.log(O3);
console.log(o3);