// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

// Create an instance of the express app.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Data
var iceCreams = [{
  name: "Oat of this World",
  price: "4",
  awesomeness: "10"
}, {
  name: "The Tonight Dough",
  price: "5",
  awesomeness: "8"
}, {
  name: "Chunky Monkey",
  price: "3",
  awesomeness: "9"
}, {
  name: "Americone Dream",
  price: "3",
  awesomeness: "8"
}, {
  name: "Phish Food",
  price: "5",
  awesomeness: "7"
}, {
  name: "Strawberry Cheesecake",
  price: "5",
  awesomeness: "9"
}];

// Routes
// app.get("/icecream/:name", function (req, res) {
//   res.render("index", iceCreams[0]);
// });

// app.get("/weekend", function (req, res) {
//   res.render("index", iceCreams[1]);
// });

app.get("/iceCreams", function (req, res) {
  res.render("iceCreams", iceCreams[i])
});

// app.get("/admin", function (req, res) {
//   app.locals.layout = "admin";
//   res.render("index", iceCreams[1]);
// });

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});