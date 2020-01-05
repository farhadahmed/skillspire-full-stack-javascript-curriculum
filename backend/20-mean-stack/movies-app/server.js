let express = require('express');
let app = express();
// Mongojs allows us to connect our Node server to a Mongo DB
let mongojs = require('mongojs');
let db = mongojs('movies2_db', ['movies2_db']);
// Body-parser allows us to extract the body of requests sent to the server
// It isn't needed for the get request but is needed for post
let bodyParser = require('body-parser');
let port = process.env.PORT || 3000;

// let moviesList = [
// 	{
// 		name: 'The Terminator',
// 		rating: '8.0',
// 		releaseYear: '1984',
// 		length: '123'
// 	},
// 	{
// 		name: 'Iron Man',
// 		rating: '7.9',
// 		releaseYear: '2008',
// 		length: '120'
// 	},
// 	{
// 		name: 'Star Wars: Return of the Jedi',
// 		rating: '8.3',
// 		releaseYear: '1983',
// 		length: '118'
// 	}
// ];

app.use(express.static(__dirname + '/app/'));
app.use(bodyParser.json());

// GET /movies endpoint
// app.get('/movies', function(request, response) {
// 	console.log('Server received GET request from Angular controller');
// 	console.log(moviesList);
// 	response.json(moviesList);
// });

// GET /movies endpoint
app.get('/movies', function(request, response) {

	console.log('Server received GET request from Angular controller');
	
	// Grabbing all movie objects from db and assigning them to the parameter "docs"
	db.movies2_db.find(function(error, docs) {
		console.log(docs);
		// Responding to GET /movieList requests with the docs in JSON format
		response.json(docs);
	});
});

// POST /movies endpoint
app.post('/movies', function (request, response) {
	// Thanks to body-parser, we can grab the body of the request
	console.log(request.body);
	// Grab the object from the body of the request and insert it into the DB
	db.movies2_db.insert(request.body, function(error, docs) {
		response.json(docs);
	});
});

// DELETE /movies/{id} endpoint
app.delete('/movies/:id', function (request, response) {
	let id = request.params.id; // gets the value of the id from the url
	console.log(id);
	db.movies2_db.remove({_id: mongojs.ObjectId(id)}, function (error, document) {
		response.json(document);
	});
});

// GET /movies/{id} endpoint 
app.get('/movies/:id', function (request, response) {
	let id = request.params.id;
	console.log(id);
	db.movies2_db.findOne({_id: mongojs.ObjectId(id)}, function (error, document) {
		response.json(document);
	});
});

app.put('/movies/:id', function(request, response) {
	let id = request.params.id;
	console.log(id);
	// console.log(request.body.id);

	db.movies2_db.findAndModify({query: {_id: mongojs.ObjectId(id)},
		update: {$set: {name: request.body.name, rating: request.body.rating, releaseYear: request.body.releaseYear, length: request.body.length}},
		new: true}, function (error, document) {
			response.json(document);
		}); 
});

app.listen(port, function() {
    console.log('server starting at http://localhost:' + port);
});