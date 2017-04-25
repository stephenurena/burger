//load dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var PORT = 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));
// use js folder containing logic.js file, to avoid error of "uncaught token <"
app.use(express.static('public/assets/js'));
app.use(express.static('public/assets/css'));
app.use(express.static('public/assets/img'));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

//listening at port 3000
app.listen(PORT);