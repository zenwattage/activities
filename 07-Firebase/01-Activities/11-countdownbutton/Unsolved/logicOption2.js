// Initialize Firebase (YOUR OWN APP)
     // Initialize Firebase
     var config = {
      apiKey: "AIzaSyBSHERQuQpDO25rvDIVAJKyoSvhmGAsOX4",
      authDomain: "clickdown-41316.firebaseapp.com",
      databaseURL: "https://clickdown-41316.firebaseio.com",
      projectId: "clickdown-41316",
      storageBucket: "",
      messagingSenderId: "781349684454"
    };
  

firebase.initializeApp(config);
// Set Initial Counter
var initialValue = 100;
var database = firebase.database();
var clickCounter = initialValue;

// --------------------------------------------------------------

// At the initial load, get a snapshot of the current data.
$("#click-button").on("click", function() {
  clickCounter++;

    database.ref().set({
    clickCount: clickCounter
  });
});



database.ref().on("value", function(snapshot) {



// Print the initial data to the console.
console.log(snapshot.val());

// Change the html to reflect the initial value.
 $("#click-value").text(snapshot.val().clickCounter);

// Change the clickCounter to match the data in the database
clickCounter = snapshot.val().clickCount;

// Log the value of the clickCounter
console.log(clickCounter);
})

// Change the HTML Value


// If any errors are experienced, log them to console.

// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#click-button").on("click", function() {

  // Reduce the clickCounter by 1
  clickCounter--;

  // Alert User and reset the counter
if(clickCounter === 0 ){
  alert("phrew!");
  clickCounter = initialValue;
};

  // Save new value to Firebase
database.ref().set({
  clickCount: clickCounter;
});

  // Log the value of clickCounter
console.log(clickCounter);

});

// Whenever a user clicks the restart button
$("#restart-button").on("click", function() {

  // Set the clickCounter back to initialValue
  clickCounter = initialValue;

  // Save new value to Firebase
database.ref().set({
  clickCount: clickCounter;
})

  // Log the value of clickCounter
console.log(clickCounter);

  // Change the HTML Values

});
