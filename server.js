var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

// parse application body as JSON
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//set handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main" }));
app.set("view engine", "handlebars");

//import routes
var routes = require("./controllers/burgers_controllers.js");

app.use(routes);




app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});