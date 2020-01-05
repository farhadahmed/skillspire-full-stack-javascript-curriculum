'use strict';

// Begin by creating variables to access the form and its inputs
let schoolCreationForm = document.getElementById('school-creation-form');
let schoolNameInput = document.getElementById('school-name');
let principalNameInput = document.getElementById('principal-name');
let emailInput = document.getElementById('email');
let streetInput = document.getElementById('street');
let cityInput = document.getElementById('city');
let stateInput = document.getElementById('state');
let zipInput = document.getElementById('zip');
let outputList = document.getElementById('output');

// Event handler that performs an action when the form is submitted
schoolCreationForm.addEventListener('submit', function() {
	// Variables created within a function should be at the top
	let school = {};

	// Prevent form from refreshing the page when when its submitted
	event.preventDefault();
	
	// Use input values to create the object's properties
	school.schoolName = schoolNameInput.value;
	school.principalName = principalNameInput.value;
	school.email = emailInput.value;
	school.street = streetInput.value;
	school.city = cityInput.value;
	school.state = stateInput.value;
	school.zip = zipInput.value;

	// Create list items in the HTML page using the object's properties
	outputList.innerHTML += '<li>'+school.schoolName+'</li>';
	outputList.innerHTML += '<li>'+school.principalName+'</li>';
	outputList.innerHTML += '<li>'+school.email+'</li>';
	outputList.innerHTML += '<li>'+school.street+'</li>';
	outputList.innerHTML += '<li>'+school.city+'</li>';
	outputList.innerHTML += '<li>'+school.state+'</li>';
	outputList.innerHTML += '<li>'+school.zip+'</li>';

});