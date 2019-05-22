// Dependencies
var express = require("express");
var mysql = require("mysql");

// Create express app instance.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// MySQL DB Connection Information (remember to change this with our specific credentials)
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Snowba1!T055",
  database: "seinfeldDB"
});

// Initiate MySQL Connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


//root route responds with hello world
app.get('/', function (req, res) {
  res.send('hello world')
})

app.get('/cast', function (req, res) {
  connection.query("SELECT * FROM actors ORDER BY id ASC", function(err,result) {
    if(err) throw (err);

    var html = 

    html += "<ul>";

    for(var i = 0; i < result.length; i++) {

    }
    console.log(res);
  })
})

app.get("/actors", function(req, res) {

  // If the main route is hit, then we initiate a SQL query to grab all records.
  // All of the resulting records are stored in the variable "result."
  connection.query("SELECT name FROM actors", function(err, result) {
    if(err)throw(err);

    console.log(result);
  });

});





// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
