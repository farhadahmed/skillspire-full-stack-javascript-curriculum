/*
Create a function that takes a string of one or more
words. Return the longest word. Do not use .split()
*/

function longestWord(str) {
	// First check if input is valid - the string should be at least 1 character
	if (str.length > 0) {
		// Store the current longest word 
		let longest = '';
		// Iterate through each word and replace "longest" whenever currentWord is longer
		let currentWord = '';

		// Iterate through each character in the string
		for (let i=0; i<str.length; i++) { 
			// Concatonate each letter to currentWord until you hit a space
			while (str[i] != ' ' && i<str.length) {
				currentWord += str[i];

				// We have to increment i or we'll have an infinite loop.
				// It'll keep running the while loop because the conditions will never
				// be met unless we increment i.
				i++;
			}

			// If the length of currentWord is greater than longest, replace longest.
			if (currentWord.length > longest.length) {
				longest = currentWord;
			}

			// Empty currentWord for when the while loop runs again
			currentWord = '';
		}

		return longest;

	}

	return 'Inavlid input';
}


longestWord('Chuck and the chocolate fact');