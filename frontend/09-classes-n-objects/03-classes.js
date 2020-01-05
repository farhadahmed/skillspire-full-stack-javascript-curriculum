// Object constructors (aka constructor functions) are used to quickly 
// create multiple objects with similar properties.

function Contact(name, number, email) {
	this.name = name;
	this.number = number;
	this.email = email;
	this.about = function() {
		console.log(name + '\'s number is ' + number + ' and they can be emailed at ' + email);
	}
}

var clark = new Contact('Clark Kent', 4444444, 'clark@metropolis.com');
var bruce = new Contact('Bruce Wayne', 5555555, 'bruce@wayneenterprise.com');


function Movie(name, genres, rating) {
	this.name = name;
	this.genres = genres;
	this.rating = rating;
}

var harryPotter = new Movie('Harry Potter', ['action', 'fantasy'], 'PG');
var endersGame = new Movie('Ender\'s Game', ['action', 'sci fi'], 'PG-13');



class TvShow {
	constructor(name, seasons, genre, rating) {
		this.name = name;
		this.season = seasons;
		this.genre = genre;
		this.rating = rating;
	}
}

let theWalkingDead = new TvShow('The Walking Dead', 8, ['Action', 'Horror'], 10);
console.log(theWalkingDead.name);