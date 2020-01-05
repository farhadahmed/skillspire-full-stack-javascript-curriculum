/*
Create an array of numbers.
Create a function that takes an array and logs half the numbers.
*/

function logHalf(arr) {
	let half = Math.floor(arr.length/2);
	for (let i=0; i<half; i++) {
		console.log(arr[i]);
	}
}