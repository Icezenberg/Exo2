// var http = require('http');
// var requestListener = function (req, res) {
//   res.writeHead(200);
//   res.end('Hello, World!');
// }

// var server = http.createServer(requestListener);
// server.listen(5000, function() { console.log("Listening on port 5000")});





var express = require('express');
var server = express();
server.get('/', function(request, response) {
	response.sendFile(__dirname+'/index.html');
});
server.listen(3020, function() { console.log("Listening on port 3020")});

