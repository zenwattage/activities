// * Start out by creating a constructor function called "Player" with the following properties and methods...
var inquirer = require('inquirer');

function Player(name,position,offense,defense){
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;
}


//   * `goodGame`: Method which increases either the player's offense or defense property based upon a coinflip.
Player.prototype.goodGame = function() {

};
//   * `badGame`: Method which decreases either the player's offense or defense property based upon a coinflip.
Player.prototype.badGame = function() {

};
//   * `printStats`: Method which prints all of the player's properties to the screen
Player.prototype.printStats = function() {
    console.log("Name: " + this.name + "\nPosition: " + this.position + "\nOffense: " + this.offense + "\nDefense: " + this.defense);
};


//   * `name`: Property which contains the player's name
//   * `position`: Property which holds the player's position
//   * `offense`: Property which is a value between 1 and 10 to show how good this player is on offense
//   * `defense`: Property which is a value between 1 and 10 to show how good this player is on defense

//counter to control player creations
// user creates 3 players
var count = 0;
//array to story each of the new players
var playerArray = [];

// * Now create a program which allows the user to create 3 unique players; 2 starters and a sub. It should take as user input the name, position, offense, and defense of each player.

var createPlayers = function() {

    if(count < 3)  {
        console.log("NEW PLAYER");
inquirer.prompt([
    {
        name: "name",
        message: "Player's name?"
    }, {
        name: "position",
        message: "Players position?"
    }, {
        name: "offense",
        message: "Players Offense: ",
    }, {
        name: "defense",
        message: "Players Defense: "
    }
]).then(function(answers) {

    var newPlayer = new Player(
        answers.name,
        answers.position,
        answers.offense,
        answers.defense
    );

    //push new answers into new player
    playerArray.push(newPlayer);

    //increment count of recursive loop
    count++;

    //run the create player function
    createPlayers();

});

    }
    else {
        for ( var x = 0; x < playerArray.length; x++) {
            playerArray[x].printStats();
        }
    }
};

createPlayers();

// * Once all of the players have been created, print their stats.

// * Once your code is functioning properly, move on to create a function called "playGame" which will be run after all of the players have been created and will do the following:


//

var starters = [];
var subs = [];
var team = []

var createPlayer = function() {

    

  //5 player recursive function

  if( starters.length + subs.length < 5) {
    console.log("\nNEW PLAYER!\n");
    inquirer
  }
}

//   * Run 5 times. Each time the function runs:
//     * Two random numbers between 1 and 20 are rolled and compared against the starters' offensive and defensive stats
//       * If the first number is lower than the sum of the team's offensive stat, add one point to the team's score.
//       * If the second number is higher than the sum of the team's defensive stat, remove one point from the team's score.
//     * After the score has been changed, prompt the user to allow them to substitute 1 player from within the starters array with the player from within the subs array.
//   * After the game has finished (been run 5 times):
//     * If the score is positive, run `goodGame` for all of the players currently within the starters array.
//     * If the score is negative, run `badGame` for all of the players currently within the starters array.
//     * If the score is equal to zero, do nothing with the starters.
//     * Give the user a message about if they won, and the status of their starters.
//     * After printing the results, ask the user if they would like to play again.
//       * Run `playGame` from the start once more if they do.
//       * End the program if they don't.

// * HINT: Remember to use recursion when looping with inquirer! Otherwise your program might not return the prompts as you expect.

// * HINT: It has been a while since we have worked with random numbers explicitly. If you are having troubles, look up Math.random on Google and you should find some resources to help.