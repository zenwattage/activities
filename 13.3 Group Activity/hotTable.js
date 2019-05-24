// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var table = [
  {
    cusName: "Bill",
    phoneNum: "555-555-1234",
    email: "bill@email.com",
    uniqueID: "billy",
  },
  {
    cusName: "Bob",
    phoneNum: "555-555-4321",
    email: "bob@email.com",
    uniqueID: "jimbob",
  },
  {
    cusName: "Philbert",
    name: "555-555-9876",
    email: "philbert@email.com",
    uniqueID: "philly cheesesteack",
  }
];
var waitlist = [
  {
    cusName: "Nicole",
    phoneNum: "555-555-3479",
    email: "nicole@email.com",
    uniqueID: "koa",
  },
];

// Basic route that sends the user first to the AJAX Page
app.get("/api/home", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/api/make", function(req, res) {
  res.sendFile(path.join(__dirname, "make.html"));
});

app.get("/api/view", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

<<<<<<< HEAD

=======
>>>>>>> 0641da03c9e62d5314ac22ebda16b1b84105363e
// Displays all reserved requests
app.get("/api/table", function(req, res) {
  return res.json(table);
});
// Displays all waitlist requests
app.get("/api/waitlist", function(req, res) {
  return res.json(waitlist);
});


<<<<<<< HEAD

=======
>>>>>>> 0641da03c9e62d5314ac22ebda16b1b84105363e
// Create New Characters - takes in JSON input
app.post("/api/make", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  if (table.length >= 5) {
    var newwaitlist = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newwaitlist.id = newwaitlist.cusName.replace(/\s+/g, "").toLowerCase();
  
    console.log(newwaitlist);
  
    waitlist.push(newwaitlist);
  
    res.json(newwaitlist);

  } else {

    var newtable = req.body;
    
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newtable.id = newtable.cusName.replace(/\s+/g, "").toLowerCase();
    
    console.log(newtable);
    
    table.push(newtable);
    
    res.json(newtable);
  } 
});

app.post("/api/make", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newwaitlist = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newwaitlist.id = newwaitlist.cusName.replace(/\s+/g, "").toLowerCase();

  console.log(newwaitlist);

  waitlist.push(newwaitlist);

  res.json(newwaitlist);
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
