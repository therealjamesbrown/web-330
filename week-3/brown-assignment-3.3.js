/*
============================================
; Title:  Exercise 3.3
; Author: Professor Krasso
; Modifications by: James Brown
; Date:   3/7/2020
; Description: exercise 3.3 per instructions
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../brown-header');

// Call the console.log() function and output a well-formatted header
console.log(header.display('James', 'Brown', 'Exercise 3.3'));

var DatabaseSingleton = (function () {
    var instance;
    function createInstance() {
      var postgresDatabase = new Object("Database instance initialized!");
      return postgresDatabase;
    }
    return {
      getInstance: function () {
        if (!instance) {
          instance = createInstance();
        }
        return instance;
      }
    }
  })();
  function DatabaseSingletonTest() {
    var oracle = DatabaseSingleton.getInstance();
    var postgres = DatabaseSingleton.getInstance();
    console.log("Same database instance? " + (oracle === postgres));
  };
  
  DatabaseSingletonTest()
  
  //  end