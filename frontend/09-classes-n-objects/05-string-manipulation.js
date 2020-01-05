/*
Create a function with one parameter that will be passed someone's full name as 
a string.
(EX: 'Farhad Ahmed')
Return JUST the first name.
*/

function firstName(fullname) {
	fullname = fullname.split(' '); // ['Tom', 'Hanks']
	return first[0];
}

console.log(firstName('Tom Hanks'));
console.log(firstName('Farhad Ahmed'));
console.log(firstName('Sun Shayina'));