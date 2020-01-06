'use strict';

let moviesApp = angular.module('moviesApp', []);

moviesApp.controller('mainController', function($scope, $http) {

	// $scope.movies = [
	// 	{
	// 		title: 'The Terminator',
	// 		rating: 8.0,
	// 		releaseYear: 1984,
	// 		length: 120
	// 	},
	// 	{
	// 		title: 'Iron Man',
	// 		rating: 7.9,
	// 		releaseYear: 2008,
	// 		length: 118
	// 	},
	// 	{
	// 		title: 'Star Wars: Return of the Jedi',
	// 		rating: 8.3,
	// 		releaseYear: 1983,
	// 		length: 102
	// 	}
	// ];

	let getMovies = function() {
		// Retrieve movie data from server. '/movieList' is the route we'll get data from
		$http.get('/movies').then(function (response) {
			
			// Taking the movie JSON objects from server and assigning to variable
			$scope.movies = response.data;
			console.log($scope.movies);
		});
	}
	getMovies();

	// ng-model from our html file will bind the input values to our
	// variables here
	// $scope.addMovie = function() {
	// 	$scope.movies.push(
	// 		{
	// 			name: $scope.movie.name, 
	// 			rating: $scope.movie.rating, 
	// 			releaseYear: $scope.movie.releaseYear,
	// 			length: $scope.movie.length
	// 		}
	// 	);

	// 	clearInputs();
	// }

	// $scope.addMovie = function() {

	// 	// object constructor
	// 	function Movie(name, rating, releaseYear, length) {
	// 		this.name = name;
	// 		this.rating = rating;
	// 		this.releaseYear = releaseYear;
	// 		this.length = length;
	// 	}

	// 	// new movie is an object which is an instance of the Movie constructor
	// 	let newMovie = new Movie($scope.movie.name, $scope.movie.rating, $scope.movie.releaseYear, $scope.movie.length);
	// 	console.log(newMovie);

	// 	// POST request sent to /movieList
	// 	$http.post('/movies', newMovie).then(function (response) {
	// 		console.log(newMovie);
	// 		console.log(response);
	// 	});

	// 	getMovies();

	// 	// $scope.movies.push(
	// 	// 	{
	// 	// 		name: $scope.movie.name, 
	// 	// 		rating: $scope.movie.rating, 
	// 	// 		releaseYear: $scope.movie.releaseYear,
	// 	// 		length: $scope.movie.length
	// 	// 	}
	// 	// );

	// 	clearInputs();
	// }

	$scope.addMovie = function() {
		console.log($scope.movie);

		$http.post('/movies', $scope.movie).then(function (response) {
			getMovies();
			clearInputs();
		});
	}

	$scope.deleteMovie = function(id) {
		$http.delete('/movies/'+id).then(function(response) {
			getMovies();
		});
	}

	$scope.edit = function(id) {
		console.log(id);
		$http.get('/movies/'+id).then(function (response) {
			console.log(response.data);
			$scope.movie = response.data;
		});
	}

	$scope.putMovie = function() {
		console.log($scope.movie._id);
		// console.log(id);
		$http.put('/movies/'+$scope.movie._id, $scope.movie).then(function (response) {
			getMovies();
			clearInputs();
		});
	}

	function clearInputs() {
		// clear input boxes
		$scope.movie.name = '';
		$scope.movie.rating = '';
		$scope.movie.releaseYear = '';
		$scope.movie.length = '';
	}

});