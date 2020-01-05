'use strict';

// quick review of while loops
// create while loop that logs 0-10

let num = 0;

while (num <= 10) {
	console.log(num);
	num++;
}


// A do-while loop works similar to a while loop.
// Difference:
// While loop checks a condition and then runs task.
// Do-while loop runs task first and then checks 
// the condition.

// syntax
/*
do {
	//some task
} while (condition);
*/


// Below we will use a do-while loop to log numbers 0 to 10 just so you can see the
// difference between a while loop and a do-while loop.
let num = 0;

do {
	console.log(num);
	num++
} while (num <= 10);


// Example of a use case for do-while loops: We'll prompt a user to input a username.
// As long as the user doesn't type anything, we will continue to prompt him.

do {
	let username = prompt('Choose a username');
} while (username === '');