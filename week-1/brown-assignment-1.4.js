/*
============================================
; Title:  Exercise 1.4
; Author: Professor Krasso
; modifications by: James Brown
; Date:   2/20/2020
; Description: assignment 1.4 per the instructions
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../brown-header');

// Call the console.log() function and output a well-formatted header
console.log(header.display('James', 'Brown', 'Exercise 1.4'));

//create constructor functions
function Car(model){
    this.model = model;
}
Car.prototype.start = function(){
    console.log(`Car added to the racetrack!`);
}

function Truck(model, year){
    this.model = model;
    this.year = year;
}

Truck.prototype.start = function(){
    console.log(`Truck added to the racetrack!`);
}

function Jeep(model, year, color){
    this.model = model;
    this.year = year;
    this.color = color;
}

Jeep.prototype.start = function(){
    console.log(`Jeep added to the racetrack!`);
}

//define empty array
var racetrack = [];

//create function to pass in vehicles and push it to the racetrack array
function driveIt(vehicle){
    vehicle.start();
    racetrack.push(vehicle);
}

//create new instances of the objects
var lambo = new Car("Lambo");
var tacoma = new Truck("Tacoma", "2016");
var jeep = new Jeep("Cherokee", "2020", "Pink");

//call the prototype methods
driveIt(lambo);
driveIt(tacoma);
driveIt(jeep);

//output
console.log(`\n-- The following vehicles have been added to the racetrack --`);
for(i=0; i<racetrack.length ; i++){
    console.log(`${racetrack[i].constructor.name}: ${racetrack[i].model}`);
}
