/*
	What is an object in the real world?  A chair, a table, a book. These are objects. In programming, 
	an object is a collection of properties that are tied to a variable. This is similar to how we
	define an object in the real world. What is a table? It's a thing with a flat surface, has one or 
	more legs, and is stable enough that we can place things on it (these are all properties that define 
	a table).
*/

// An object is a data type just like a string, number, boolean, and function.

// The person object has 3 properties: name, heightInInches, and occupation
let person = {
	name: 'Peter Parker',
	heightInInches: 71,
	occupation: 'Photographer for Daily Bugle'
}


// Objects can also have functions attached to them. 
let person2 = {
	name: 'Bruce Wayne',
	alias: 'Batman',
	location: 'Gotham City',
	alertLocation: function() {
		alert('Location: ' + person2.location);
	}
}


// dot notation and bracket notation are used to access properties of objects.
console.log(person.name); // dot notation
person2.location = 'Metropolis'; // dot notation
person2['location'] = 'Bellevue'; // bracket notation


// We've already worked with other objects with functions attached to them.
console.log()
document.write()
// In fact, every HTML element is an object. Remember that we use
// .innerHtml() to access the content within an HTML element?