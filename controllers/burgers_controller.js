var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

//get request from the client to the server
router.get("/", function(req, res) {
	burger.all(function(data){
		var burgerObj = {
			burgers: data
		};
		console.log(burgerObj);
	    res.render("index", burgerObj);
	});
});

//post request
router.post("/", function(req,  res) {
	burger.create(req.body.name, function() {
		res.redirect("/");
	});
});

router.put("/:id", function(req, res){
	var condition = "id: " + req.params.id;
	console.log("condition: ", condition);
	burger.update(condition, function(){
		res.redirect("/");
	});
});

// export module for server.js
module.exports = router;