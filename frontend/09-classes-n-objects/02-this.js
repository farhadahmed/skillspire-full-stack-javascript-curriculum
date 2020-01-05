let person2 = {
	name: 'Bruce Wayne',
	heightInInches: 72,
	location: 'Gotham City',
	occupation: 'CEO of Wayne Enterprise',
	about: function() {
		alert('My name is ' + this.name + 'and my occupation is ' + this.occupation);
	}
}