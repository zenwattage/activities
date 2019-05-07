var inquirer = require("inquirer");
var mysql = require("mysql");



function mainFlow() {
  inquirer
    .prompt([
      {
        type: "checkbox",
        message: "Choose your option",
        choices: [{ name: 'POST AN ITEM' }, { name: 'BID ON AN ITEM', checked: true }],
        name: "choice"
      }])
    .then(function (inquirerResponse) {
      if (inquirerResponse.choice == "POST AN ITEM") {
        postItem();
      } else if (inquirerResponse.choice == "BID ON AN ITEM") {
        bid();
      }
    });
}


var connection = mysql.createConnection({
  host: "localhost",
  // Your port; if not 3306
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "Snowba1!T055",
  database: "AuctionHouse_db"
});


function bid() {
  connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    showProducts();
  });
}



function showProducts() {
  connection.query("SELECT * FROM items", function (err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);

    getBid();

  });
}



function getBid() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter the id of the product you would like to bid on?",
        name: "productId"
      },
      {
        type: "input",
        message: "Enter your bid",
        name: "bid"
      }
    ]).then(function (inquirerResponse) {
      evaluateBid(inquirerResponse.productId, inquirerResponse.bid);

    });
}



function evaluateBid(productId, currentBid) {
  connection.query("SELECT price FROM items WHERE ?", { id: productId }, function (err, res) {
    if (err) throw err;
    console.log("Current Bid = " + res[0].price);
    if (parseFloat(currentBid) <= parseFloat(res[0].price)) {
      console.log("Sorry, you were outbid");
    } else {
      console.log("You are the highest bidder!");
      updateBid(productId, currentBid);
    }
  });
}


function updateBid(productId, bid) {
  var query = connection.query(
    "UPDATE items SET ? WHERE ?",
    [
      {
        price: bid
      },
      {
        id: productId
      }
    ],
    function (err, res) {
      console.log(res.affectedRows + " items updated!\n");
    });
}



function postItem() {
  inquirer.prompt([{
    type: "input",
    message: "What are you posting?",
    name: "itemTitle"
  },
  {
    type: "input",
    message: "How much?",
    name: "price"
  }]).then(function (inquirerResponse) {
    var itemTitle = inquirerResponse.itemTitle;
    var price = inquirerResponse.price;
    connection.query(
      "INSERT INTO items SET ?",
      {
        itemTitle: itemTitle,
        price: price,
      }, function (err, res) {
        console.log(res.affectedRows + " item inserted!\n");
        connection.end();
      })
  });
};
mainFlow();