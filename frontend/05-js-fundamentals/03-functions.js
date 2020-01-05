/* 
	Functions are a way to wrap a piece of a program inside a value. Remember
	how variables are for assigning values to? Functions are similar in that
	you can assign a task to a function name.
	Example: We can ask a user for their first name and then create a function
	to greet that user. To use a function that you've created, it must be
	called (or 'invoked').
*/

let fname = prompt('What is your first name');

//Lines 14-16 create a function called greetTheUser
function greetTheUser() {
	alert('Welcome, ' + fname);
};

// Call the function
greetTheUser();


// I'm creating the function called timesTwo with the parameter num
function timesTwo(num) {
	console.log(num * 2);
};

// Here we will invoke the timesTwo function by passing different arguments
timesTwo(5);
timesTwo(10);
timesTwo(0.324545);


// A function can have multiple parameters
function rectangleArea(l, w) {
	return length * width;
};

// Calling the function
rectangleArea(5, 5);

// Functions can be assigned to variables
let rectangle1 = rectangleArea(2, 4);


// Argument vs Parameter

// When you're creating a function, the part between parenthesis is called
// a parameter.  In the below example, num is a parameter.
function timesTwo(num) {
	console.log(num * 2);
};


// However, when you call a function, the data between parenthesis is called
// an argument. In the below example, we are invoking the timesTwo function
// and passing 5 as an argument.
timesTwo(5);



// ASSIGNMENT
// 1. Create a function called triangleArea with two parameters, b and h.
//    Log the area to the console. You'll need to google the equation.