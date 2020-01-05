let person1 = {
	name: 'Clark Kent',
	heightInInches: 73,
	location: 'Metropolis',
	occupation: 'Reporter'
}


let person2 = {
	name: 'Bruce Wayne',
	heightInInches: 72,
	location: 'Gotham City',
	occupation: 'CEO of Wayne Enterprise',
	about: function() {
		alert('My name is ' + person2.name + 'and my occupation is ' + person2.occupation);
	}
}

let person3 = {
	name: 'Gary Allen',
	heightInInches: 72,
	location: 'Star City',
	occupation: 'Forensic Scientist',
	about: function() {
		alert('My name is ' + this.name + 'and my occupation is ' + this.occupation);
	}
}