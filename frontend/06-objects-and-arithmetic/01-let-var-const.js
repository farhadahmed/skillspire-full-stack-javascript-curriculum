'use strict';


//"var" has functional scope

// str has global scope because it isn't in a function
var str = 'test string';

//str2 can only be accessed from inside this function
function test() {
	var str2 = 'other string';
	console.log(str2);
}

console.log(str);
console.log(str2);


// variables declared with let can only be accessed 
// inside the block of code they are created in.

// x has global scope because it is not created in any code block
let x = 5;

if (x === 5) {
	// this x can only be accessed from inside this if block
	let x = 6;
	console.log(x); // 6
}

console.log(x); // 5


if (true) {
	let y = 4;
}

console.log(y); // undefined