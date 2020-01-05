/*
Implement .toLowerCare()

toLowerCase('Hello') // 'hello'
toLowerCase('HEY') // 'hey'


Logic
	- For each item in array, find ascii value to see if it's 
	  lower case
	- If it's lower case, +32 
*/


function toLowerCase(str) {
	let lowerCaseStr = '';

	for (let i=0; i<str.length; i++) {

		let currentCharCode = str.charCodeAt(i);
		
		if (currentCharCode > 64 && currentCharCode < 91) {
			let lowerCaseChar = String.fromCharCode(currentCharCode+32);
			lowerCaseStr += lowerCaseChar;
		} else {
			lowerCaseStr += str[i];
		}
	}

	console.log(lowerCaseStr);
}

toLowerCase('Hello');
toLowerCase('HEY');

