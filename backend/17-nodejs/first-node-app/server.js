/*
This line loads the express module and sets it as a dependency.  Express.js 
lives somewhere and it exports an object.  If we want to load that file, we 
do so with the require function.
*/
const express = require('express');

/*
express() is a top-level function that has been exported by the express module.  
The express function is being assigned to the variable app.
*/
const app = express();

/*
This sets the environment variable to PORT to tell our server which port to 
listen to.  We could have just written var port = 3000; for this project, but 
this convention is useful if we decide to host our app online through a web 
hosting service such as Heroku.  Essentially, this line is saying “use whatever 
is in the environment variable PORT, otherwise just use 3000.”
*/
let port = process.env.PORT || 3000;

/*
app.get() determines how this application responds to a user request to a 
particular endpoint (a url).  In this case, the endpoint is the homepage: this 
is indicated by the ‘/’.    The function takes two parameters, a request and a 
response.
*/
app.get('/', function(request, response) {
	//When the user makes a request to access our endpoint by going to the 
	//homepage, the server responds with the text “Hello, universe!”
	response.send('<p>Hello universe!</p>');
});

/*
This tells our server which port to listen to.  When we run our server, our app 
will be accessible from http://localhost:3000.  We could have just written 
app.listen(port);  But I want to show that there is something happening here, 
so I threw in a function that will log a string in our terminal (or command line) 
when we run our server.
*/
app.listen(port, function() {
	console.log('Server starting at https://localhost:'+port);
});