/*
	Have the students answer the following questions.
	Give them sufficient time and then go over the answers.
*/

/*
	Create an array of strings. Create a function
	that loops through and logs each string.
*/
let hogwartsStudents = ['Hermione', 'Harry', 'Ron', 'Malfoy'];

function logStudents(arr) {
	for(let i=0; i<arr.length; i++) {
		console.log(arr[i]);
	}
}

logStudents(hogwartsStudents);


/*
	Create a function that takes an array and logs
	the last value in the array.

	Hint 1: You don't need a loop.
	Hint 2: Don't do this --> console.log(arr[8]);
*/

let hogwartsStudents = ['Hermione', 'Harry', 'Ron', 'Malfoy'];

function logLastVal(arr) {
	console.log(arr[arr.length-1]);
}

/*
	Create an array of student objects with the following
	properties: studentName, sID, email, graduated.
	All values should be strings except for graduated.
	graduated should be a boolean. 

	Create a function that loops through the array of 
	objects and logs the student's ID if they have 
	graduated.
*/
let students = [
	{
		studentName: 'Logan',
		sID: 123,
		graduated: false
	},
	{
		studentName: 'Scott Summers',
		sID: 456,
		graduated: true
	},
	{
		studentName: 'Jean Gray',
		sID: 789,
		graduated: true
	}
]

function isGraduated(arr) {
	for (let i=0; i<arr.length; i++) {
		if (arr[i].graduated === true) {
			console.log(arr[i].sID);
		}
	}
}


/*
	Create a function that takes a number. If the number is 
	less than or equal to zero, log -1. Otherwise, log all 
	numbers between 0 and that number (inlcuding zero and 
	that number)
*/

function logNumsUpTo(num) {
	if (num <= 0) {
		console.log(-1);
	} else {
		for(let i=0; i<=num; i++) {
			console.log(i);
		}
	}
}

logNumsUpTo(4);
