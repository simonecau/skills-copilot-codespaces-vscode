//Create web server
var express = require('express');
var app = express();

//Create server
var server = require('http').createServer(app);

//Add socket.io
var io = require('socket.io').listen(server);

//Port
var port = 3000;

//Listen on port
server.listen(port, function(){
	console.log('Server listening at port ' + port);
});

//Routing
app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

//Array to store comments
var comments = [];
var users = [];

//Listen for connection
io.sockets.on('connection', function(socket){
	console.log('A user connected');
});