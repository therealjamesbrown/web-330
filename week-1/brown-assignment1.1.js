/*
============================================
; Title:  Discussion 1.1
; Author: James Brown
; Date:   2/20/2020
; Description: Constructor Prototype example.
    This script checks the width to height ratio to see if a dog is considered overweight. 
    Forumla to do calculate was provided from http://slimdoggy.com/calculating-a-dogs-body-mass-index/
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../web-330/brown-header');

// Call the console.log() function and output a well-formatted header
console.log(header.display('James', 'Brown', 'Discussion 1.1'));

// Welcome message
console.log('\n--Welcome to Discussion 1.1 --');

//define constructor
var Dog = function(name, age, breed){
    this.name = name,
    this.age = age,
    this.breed = breed
};

//declaring function on the Dog object as a prototype. weight is in lbs and heigh is inches
Dog.prototype.calculateWTH = function(height, weight){
    var wth = weight/height;
    if (wth > 4){
        console.log(`Your dog is overweight. Please exercise them and adjust their diet. Currnet WTH: ${wth}`)
    }else{
        console.log(`Your dog is in great shape! Current WTH: ${wth}`);
    }
}

//create/instantiate some new dog objects
var sparky = new Dog('sparky', 3, 'husky');
var theo = new Dog('Theo', 6, 'Chihuaha');

//output

//call the constructor prototype to use the method of the Animal object.
//spark the husky is 24 inches tall and weighs 60 pounds
sparky.calculateWTH(24, 60);
//theo the chihuaha is 10 inch tall and weights 20 pounds
theo.calculateWTH(10, 20);

//end program
