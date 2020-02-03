'use strict';

// 1 - The purpose of a loop is to perform a task
//     multiple times.
// 2 - Each type of loop works differently
//	   2a - While loop checks a condition and then
//		    performs a task if the condition is true
//	   2b - Do-while loop performs the task and then
//			checks the condition.
// 3 - Loops are often used to iterate through arrays


// while
let index = 0;
while (index <= 10) {
	console.log(index);
	index++;
}

// do-while
let index2 = 0;
do {
	console.log(index2);
	index2++;
} while(index2 <= 10);




// Here is the syntax for a for loop. Index is the count. As long as condition is true, the loop will run.
/*
	for (count; condition; increment) {
		// some task
	}
*/

// Let's use a for loop to log numbers 0-10 just as we did with the previous loops. Notice how it's shorter.
for (let i = 0; i <= 10; i++) {
	console.log(i);
}


// Use contact list as example.
// Here's how it was done with a while loop:
//		  0	   1 	  2 	     3
let contacts = ['Ahmed', 'Abdi', 'Mohamed', 'Franks'];

let count = 0;
while (count < contacts.length) {
	document.write('<p>' + contacts[count] + '</p>');
	count++;
}


// Here it is with a for loop.
for (let i = 0; i < contacts.length; i++) {
	document.write('<p>' + contacts[i] + '</p>');
}



// A common interview question will be to write the following using a for loop:

/*
#
##
###
####
#####
######
*/


let hash = '#';
for (let i=0; i<=6; i++) {
	console.log(hash);
	hash += '#';
}
