var http = require('http');//modulo para criar aplicação que vai ser um servidor web
var fs = require('fs');//modulo de file system


var server = http.createServer(function(request, response){
    fs.readFile('index.html', function())
});