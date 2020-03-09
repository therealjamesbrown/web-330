/*
============================================
; Title:  Exercise 3.2
; Author: Professor Krasso
; Modified by: James Brown
; Date:   3/7/2020
; Description: exercise 3.2 per instructions
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../brown-header');

console.log(header.display('James', 'Brown', 'Exercise 3.2'));

// Object Instantiation
function Oracle(properties) {
  this.username = properties.username || "user";
  this.password = properties.password || "9999";
  this.server = properties.server || "localhost:8080";
  this.version = properties.version || "1.1.1"
}

function Informix(properties) {
  this.username = properties.username || "admin";
  this.password = properties.password || "9999";
  this.server = properties.server || "localhost:3001";
}

function DatabaseFactory(){}

// Use Prototype
DatabaseFactory.prototype.databaseClass = Informix;
DatabaseFactory.prototype.createDatabase = function (properties) {
  if (properties.databaseType === "Oracle") {

    this.databaseClass = Oracle;
  }
  if (properties.databaseType === "Informix") {

    this.databaseClass = Informix;
  }
  return new this.databaseClass(properties);
};

// Declare Variables
var oracleFactory = new DatabaseFactory();

var oracle = oracleFactory.createDatabase({
  databaseType: "Oracle",
  username: "admin",
  password: "9999"
});

var informixFactory = new DatabaseFactory();

var informix = informixFactory.createDatabase({
  databaseType: "Informix",
  username: "everyDayUser",
  password: "9999"
});

//output
console.log(oracle);

console.log(informix);

//end