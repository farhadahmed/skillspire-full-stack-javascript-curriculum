'use strict';
// Conditional execution allows certain code statements to be executed only under certain conditions.


// Let's say you only want a user to be able to play a game if they're at least age 13
let userAge = prompt('What is your age?');

// By using the keyword 'if', the following code will only be executed if the condition 
//within the parentheses evalueates as 'true'.

if (userAge < 13) { 
	console.log('You are too young to play this game.');
};


// What if you want to perform a different task if the first condition is false?

if (userAge >= 13) {
	console.log('Welcome to the game!');
} else {
	console.log('This game is too violent for you!')
}


// We've covered 'if' statements and 'if-else' statements for when you want
// to perform a different task if the condition is false. What if you need
// multiple conditions? You can use if-else-if chains.


// This takes the if-else example a step further. If the
// user leaves the prompt blank, it informs the user that they must input
// a number.

let userAge = prompt('What is your age?');
console.log(userAge);

if (userAge < 13) {
	alert('You are too young to play this game.');
}
else if (userAge >= 13) {
	alert('Welcome to the game!');
}
else {
	alert('Your input must be a number');
};