/*
	Create a function that takes a string and reverses the string
*/

// There's an existing JS function that reverses strings and 		arrays.
// For a bonus, reverse it without using the function.


function reverseStr(str) {
	str = str.split('').reverse().join('');
	// str = str.reverse();
	// str = str.join('');
	console.log(str);
}

function reverseStr2(str) {
	let reversed = '';

	str = str.split(''); // ['s', 'a', 'm']


	for (let i=str.length-1; i>=0; i--) {
		reversed += str[i];
	}

	console.log(str);
}


reverseStr2('sam');