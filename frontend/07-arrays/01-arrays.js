'use strict';
// An array is a list of data.
// An array is not a data type. It is simply a way to organize data.


let contactList = ['Jon Snow', 'Arya', 'Cirsi', 'Tyrian', 'Greyworm'];
let nums = [3, 2, 6, 4];
let mixedData = ['silly string', 5, 'some string', 2343, undefined, true];


// What if I want to access one of the elements in an array?
// Each element in an array has an index. An element's index is a number used to identify it.

//                      0         1       2         3          4
let contactList = ['Jon Snow', 'Arya', 'Cirsi', 'Tyrian', 'Greyworm'];

// If I want to grab the 0th value in an array:
console.log(contactList[0]); // Jon Snow


// We can use code to add new elements to an array

// push() appends data to the end of an array
contactList.push('Theon Greyjoy');
console.log(contactList);
// pop() removes data from the end of an array
contactList.pop();
console.log(contactList);


// We can also add data to the beginning of the array

// unshift() prepends elements to the beginning of the array.
contactList.unshift('Ned Stark');
console.log(contactList);
// shift() deletes elements from the beginning of the array.
contactList.shift();
console.log(contactList);

// Create a list of groceries to buy. It should contain 4 items. 
// Log this to the console.
// Append another item to the end of the list.
// Prepend another item to the beginning of the list.
// Log this to the console.
// Remove the first and last items from the list.
// Log this to the console again.