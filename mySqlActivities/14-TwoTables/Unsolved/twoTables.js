var mysql = require('mysql');
var inquirer = require('inquirer');


var connection = mysql.createConnection({
  host: "localhost",
  // Your port; if not 3306
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "Snowba1!T055",
  database: "top_songsDB"
});


function getStuff() {
  connection.query("SELECT * FROM top5000", function (err, res) {
    
    // Log all results of the SELECT statement
    console.log(res);

  });
}

getStuff();



