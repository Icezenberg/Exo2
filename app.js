// var http = require('http');
// var requestListener = function (req, res) {
//   res.writeHead(200);
//   res.end('Hello, World!');
// }

// var server = http.createServer(requestListener);
// server.listen(5000, function() { console.log("Listening on port 5000")});


var express = require('express');
var server = express();

// route public pour charger avant les pages 
server.use(express.static('public'));

server.get('/', function(request, response) {
	response.sendFile(__dirname+'/index.html');
});
server.get('/liste', function(request, response) {
	response.sendFile(__dirname+'/data.json');
});



server.listen(3040, function() { console.log("Listening on port 3040")});






// app.get('/liste', function(req, res) {
//     res.sendFile(__dirname+'/data.json');
//   });

