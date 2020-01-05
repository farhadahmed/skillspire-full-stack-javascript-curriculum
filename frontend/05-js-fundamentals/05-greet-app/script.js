'use strict';

// We are using the <form> element's id attribute to assign the element to the variable nameForm
let nameForm = document.getElementById('name-form');

// Event listner to perform task when user clicks 'submit' button
// Notice how ALL of the logic exists inside the button click
nameForm.addEventListener('submit', function() {


	let fnameInput = document.getElementById('fname-input');
	let lnameInput = document.getElementById('lname-input');
	let outputP = document.getElementById('output-p');

	event.preventDefault(); // Prevents page from refreshing

	//Access each html element to ouput my data
 	outputP.innerHTML = 'Welcome, ' + fnameInput.value + ' ' + lnameInput.value + '.';
});