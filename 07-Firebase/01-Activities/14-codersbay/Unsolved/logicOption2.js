// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAb3_k6Ibq2RX_D3XDL2hME0dK6xnmkjbU",
    authDomain: "codersbay-ef67e.firebaseapp.com",
    databaseURL: "https://codersbay-ef67e.firebaseio.com",
    projectId: "codersbay-ef67e",
    storageBucket: "codersbay-ef67e.appspot.com",
    messagingSenderId: "596089756651"
  };
  firebase.initializeApp(config);


// Assign the reference to the database to a variable named 'database'
// var database = ...
var database = firebase.database();

// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

//  At the page load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on("value", function(snapshot) {
    console.log(snapshot.val());
  
// If Firebase has a highPrice and highBidder stored (first case)
    if(snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {
        

            highBidder = snapshot.val().highBidder;
            highPrice = parseInt(snapshot.val().highPrice);
     
    }

console.log(highBidder);
console.log(highPrice);


// Set the variables for highBidder/highPrice equal to the stored values in firebase.
// highPrice = ...
// highBidder = ...


// Change the HTML to reflect the stored values

})
// Print the data to the console.


// Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.


// Change the HTML to reflect the initial values


// Print the data to the console.




// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button

// prevent form from submitting with event.preventDefault() or returning false

// Get the input values


// Log the Bidder and Price (Even if not the highest)


// If Then statements to compare against previous high bidder


// Alert that they are High Bidder


// Save the new price in Firebase


// Log the new High Price


// Store the new high price and bidder name as a local variable (could have also used the firebase variable)


// Change the HTML to reflect the new high price and bidder

// Else tell user their bid was too low via alert