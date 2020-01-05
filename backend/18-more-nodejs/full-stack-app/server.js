let express = require('express');
let app = express();
let port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public/'));

app.use(function(req, res, next) {
	res.status(404).sendFile(__dirname + '/public/404.html');
});

app.listen(port, function() {
	console.log('Server starting at http://localhost:'+port);
});