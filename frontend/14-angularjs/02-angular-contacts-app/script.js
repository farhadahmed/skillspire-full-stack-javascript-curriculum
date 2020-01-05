'use strict';

// Modules are used to associate an angular app with part of
// an HTML document. They provide access to the features
// from the Angular framework that we've injected with
// our <script> element in the head of HTML
let myApp = angular.module('myApp', []);

/*
	Controller has two purposes:
	1. To store existing data (in this case, contact objects)
	2. Take user input to change the data in some way
		a. In this case, a form will be used to create new 
		   contacts

	$scope is how we bind values from JS to HTML.
	Values created with $scope in JS can be accessed in HTML
*/
myApp.controller('mainController', function($scope) {

	$scope.contacts = [
		{
			name: 'Sherlock',
			number: '444-4444',
			email: 'holmes@bakerstreet.com'
		},
		{
			name: 'Gregory',
			number: '5555-5555',
			email: 'house@itsnotlupus.com'
		},
		{
			name: 'James',
			number: '666-6666',
			email: 'beammeup@starship.com'
		}
	];

	// ng-model from our html file will bind the input values to our
	// variables here
	$scope.addContact = function() {
		// $scope.contacts.push({name: 'Scott', number: '7777-7777', email: 'someguy@gmail.com'});
		$scope.contacts.push(
			{
				name: $scope.contact.name, 
				number: $scope.contact.number, 
				email: $scope.contact.email
			}
		);

		// clear input boxes
		$scope.contact.name = '';
		$scope.contact.number = '';
		$scope.contact.email = '';
	}
});