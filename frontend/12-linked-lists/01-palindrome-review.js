// A palindrome is a word or phrase that is spelled the same way forwards as it is backwards

// Create a function that checks if a string is a palendrome
// Return true or false

/*
	- Make the string lower case
	- Remove special characters and spaces by replacing them with an empty string
	- Reverse the string and assign it do reverseStr
	- Compare the two strings
*/

function isPalindrome(str) {
  // Make lower case and replace any non-letter characters with empty string
  str = str.toLowerCase().replace(/[\W_]/g, '');

  // Reverse the string and assign it to reversedStr
  // To do this, we change str into an array of characters, reverse them, than join the array
  // back into a string
  let reversedStr = str.split('').reverse().join(''); 
   
  // compare the reversed string with str. If equal, return true, otherwise return false
  if (str === reversedStr) {return true;}
  return false;
}
 
isPalindrome("A man, a plan, a canal. Panama");

function test() {
	console.log(isPalindrome('A man, a plan, a canal, Panama'));
	console.log(isPalindrome('Mom'));
	console.log(isPalindrome('Mother'));
}

test();