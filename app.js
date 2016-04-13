var express = require("express");
var app = express();
var http = require("http");
var util = require("util");

console.log(this);

app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("index");
});

app.get("/books", function(req, res){
	res.render("books", {
		books: ["book1", "book2", "book3"]
	})
});

app.get("/login", function(req, res){
	res.render("login");
});

app.get("*", function(req, res){
	res.sendStatus(404);
});

app.listen(8080, function() {
	console.log("this");
	console.log(typeof this);
	console.log(this.__proto__);
	console.log(this.prototype);
	console.log("app");
	console.log();
	console.log(typeof app);
	console.log(app.__proto__);
	console.log(app.prototype);
	console.log("express");
	console.log();
	console.log(typeof express)
	console.log(express.__proto__);
	console.log(express.prototype);
	console.log("Listening on port " + this.address().port);
});