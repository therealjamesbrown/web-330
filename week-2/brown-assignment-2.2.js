/*
============================================
; Title:  Exercise 2.2
; Author: James Brown
; Date:   2/20/2020
; Description: Exercise 2.2
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../brown-header');

// Call the console.log() function and output a well-formatted header
console.log(header.display('James', 'Brown', 'Exercise 2.2'));

var person = {
    getAge: function(){
        return this.age;
    }
}

var james = Object.create(person, {
    "age" : {
        "value": "28"
    },
    "fullname":{
        "value": "James Brown"
    }
});

james.getAge();

console.log(`The persons full name is: ${james.fullname}`);
console.log(`The persons age is: ${james.age}`);
