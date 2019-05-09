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

//console.log(connection);

connection.connect(function(err) {
  if (err) throw err;
  runSearch();
});


function runSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "Find song by artist",
        "Find all artists who appear more than once",
        "Find data within a range",
        "Search for a specific song",
        "exit"
      ]
    }).then(function(answer) {
      switch(answer.action) {
        case "Find songs by artist":
        artistSearch();
        break;
      
      case "Find all artists who appear more than once":
        multiSearch();
        break;

      case "Find data within a rage":
        rangeSearch();
        break;

      case "Search for a specific song":
        


      }
    })
}


function mainFlow() {
  inquirer
    .prompt([
      {
        type: "checkbox",
        message: "Choose your option",
        choices: [{ name: 'FIND SONG BY ARTIST' }, { name: 'FIND ALL ARTISTS WHO APPEAR MORE THAN ONCE'}, { name: 'FIND DATA WITHIN A SPECIFIC RANGE'}, { name: 'SEARCH FOR A SPECIFIC SONG'}, { name: 'exit'}],
        name: "choice"
      }])
    .then(function (inquirerResponse) {
      console.log(inquirerResponse);

      if (inquirerResponse.choice == "FIND SONG BY ARTIST") {
       //getArtist();
       getSongs();
      } //else if (inquirerResponse.choice == "FIND ALL ARTISTS WHO APPEAR MORE THAN ONCE") {
      //   getRepeats();
      // } else if (inquirerResponse.choice == "FIND DATA WITHIN A SPECIFIC RANGE") {
      //   getRange();
      // } else if (inquirerResponse.choice == "SEARCH FOR A SPECIFIC SONG") {
      //   getSongs();
      // } else if (inquirerResponse.choice == "exit") {
      //   console.log("exiting.....")
        
      // }
    });
}






function getSongs() {
  connection.query("SELECT position, song, year FROM top5000", function (err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);


  });
}


function getArtist() {
  connection.query("SELECT artist FROM top5000", function (err, res) {
    if(err) throw err;
    console.log(res);
  });
}





mainFlow();
