/*
============================================
; Title:  Exercise 1.3.js
; Author: James Brown
; Date:   2/20/2020
; Description: 
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../brown-header');

// Call the console.log() function and output a well-formatted header
console.log(header.display('James', 'Brown', 'Exercise 1.3.js'));


//create function constructor for cellphone
function CellPhone(manufacturer, model, color, price)
{
    this.manufacturer = manufacturer,
    this.model = model,
    this.color = color,
    this.price = price,

    this.getPrice = function()
    {
        return this.price;
    },

    this.getModel = function()
    {
        return this.model;
    },

    this.getDetails = function()
    {
        return `Manufacturer: ${this.manufacturer}\nModel: ${this.getModel()}\nColor: ${this.color}\nPrice: ${this.getPrice()}`;
    }
}

//create new instance of the cellphone constructor and assign values
var iphone11 = new CellPhone("apple", "iphone 11", "white", "399.99");

//output
console.log(`\n-- DISPLAYING CELL PHONE DETAILS --\n${iphone11.getDetails()}`);