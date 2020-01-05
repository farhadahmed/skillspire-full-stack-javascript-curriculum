let express = require('express');
let app = express();

let port = process.env.PORT || 3000;

app.get('/', function(req, res) {
	res.send('<ol>' +
				'<li>Item 1</li>'+
				'<li>Item 2</li>'+
			'</ol>');
});

app.listen(port, function() {
	console.log('Server starting at http://localhost:'+port);
});