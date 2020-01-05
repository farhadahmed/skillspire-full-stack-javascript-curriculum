'use strict';
// Variables are used to save data by assigning values to a variable. Variables must begin with
// a letter and cannot contain special characters.

// DECLARING VARIABLES
// The following line declares a variable without assigning a value.
var firstname1;
// The following line declares a variable and defines it by assigning a value.
var firstname2 = 'Clark';
// The following line declares and assigns values to multiple variables
var firstname = 'Bruce', lastname = 'Wayne';
// You can also use variables to assign values to a variable
var username = firstname + ' ' + lastname;

console.log(username); //"Clark Kent"


var username2 = 'Dean Winchester' // The same variable can also be assigned new values
console.log(username2); //"Dean Winchester"

// ASSIGNING VALUES TO VARIABLES
// Below we'll write code to make it easier to find the area of a square.
var length, width, rectangleArea;

length = 5;
width = 2;
rectangleArea = length * width; // rectangleArea = 5 * 2;

console.log(length);
console.log(width);
console.log('Rectangle Area: ' + rectangleArea);

// We can also change the value of variables we create by assigning
// new values to them.
length = 7;

rectangleArea = length * width; // rectangleArea = 7 * 2;
console.log('New rectangleArea: ' + rectangleArea);


// Create variables concatonating other variables
// Create variables involving a math equation