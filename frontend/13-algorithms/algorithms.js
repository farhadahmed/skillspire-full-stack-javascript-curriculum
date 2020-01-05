/*
Create a Car constructor with parameters to represent the car's 
make, model, color, and number of doors.

Next, create 3 car objects using the constructor
*/

function Car(make, model, color, doors) {
	this.make = make;
	this.model = model;
	this.color = color;
	this.doors = doors;
}

let accord = new Car('Honda', 'Accord', 'black', 4);
let rav4 = new Car('Toyota', 'Rav4', 'blue', 4);
let outback = new Car('Subaru', 'Outback', 'red', 4);

/*
Given an array of integers, create a function that increments each 
number by one. 
*/

function incrementArr(arr) {
	for (let i=0; i<arr.length; i++) {
		arr[i]++;
	}
	return arr;
}

console.log(incrementArr([1,2,3])); // expect [2,3,4]


/*
Create a function that, given an array switches the zeroth value 
with a randomly chosen element within the array.
*/

function switchZeroth(arr) {
	let zeroth = arr[0];
	let random = Math.floor(Math.random()*arr.length);

	arr[0] = arr[random];
	arr[random] = zeroth;

	return arr;
}

console.log(switchZeroth([1,2,3, 4, 5, 6, 7]));




/*
Given a non-empty array of digits representing a non-negative 
integer, plus one to the integer.

The digits are stored such that the most significant digit is 
at the head of the list, and each element in the array contain 
a single digit.

You may assume the integer does not contain any leading zero, 
except the number 0 itself.

Example 1:

Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
   
Example 2:

Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
*/

function increment(arr) {
	arr = arr.join('');
	arr = Number(arr);
	arr++;
	arr = arr.toString();
	arr = arr.split('');
	for (let i=0; i<arr.length; i++) {
		arr[i] = Number(arr[i]);
	}
	return arr;
}

console.log(increment([1,2,3])); // expected output: [1,2,4]



/*
Use loops to validate whether two arrays are the same.

Example 1: 

Input: [4, 5, 6], [4, 5, 6]
Output: true

Eample 2:

Input: [4, 5, 6], [4, 5, 7]
Output: false
*/

function arrCompare(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}

	for (let i=0; i<arr1.length; i++) {
		if (arr1[i] === arr2[i]) {
			return false;
		}
	}
	return true;
}