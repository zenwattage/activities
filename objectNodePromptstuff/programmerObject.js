var inquirer = require("inquirer");

function Programmer(name,position,age,favLang) { 

    this.name = name,
    this.position = position,
    this.age = age,
    this.favLang = favLang, 

    this.printInfo = function() {
        console.log("Name: " + this.name);
        console.log("Position: " + this.position);
        console.log("Age: " + this.age);
        console.log("Language: " + this.favLang);
    }
}


var scott = new Programmer('Scott', 'student', '37', 'javaScript');


scott.printInfo();

/* Instructions

In this activity, we are going to create a constructor function called "Programmer" which can be used to create objects containing information on various programmers.

Your "Programmer" constructor should be able to take in the following information...

The programmer's name
Their position/job title
How old they are
Favorite programming language
Now create a method for the constructor that would print all of the information contained within an object to the console.

Finally, create a "Programmer" object and call the method to print its contents */
