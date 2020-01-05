// Have the class answer the following questions.
// Give them some reasonable amount of time and then go over the answers.

/*
Create a function that takes a number and returns true if the
number is divisible by 3, otherwise returns false.
*/

function divisibleBy3(num) {
	if (num%3 === 0) {return true;}
	return false;
}


/*
Create a function that takes a number and returns true if the
number is even, false if it is odd.
*/

function isEven(num) {
	if (num%2 === 0) {return true;}
	return false;
}


/*
Create a function that takes a number. Log the number. 
If the number is divisible by 3, log "fizz" instead of the number. 
If the number is divisible by 5 log "buzz" instead of the number.
*/

function fizzBuzz(num) {
	if (num % 3 === 0) {
		console.log('fizz');
	}
	else if (num % 5 === 0) {
		console.log('buzz');
	}
	else {
		console.log(num);
	}
}