var http = require("http");
var fs = require("fs");
var url = require("url");

var server = http.createServer(function(request, response)
{

    var url_params = url.parse(request.url);
    var caminho = url_params.pathname;

    //fs.readFile('index.html', function(erro, conteudo)){
    fs.readFile(__dirname + caminho, function(erro, conteudo){
        if(erro){
            response.writeHead(404, {"Content-Type": "text/html"});
            response.write("<h2>Not found</h2>")
        }else{
            console.log('achou');
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(conteudo);
        }
        response.end();
    })
});

server.listen(3001, function(){console.log("O seu servidor está no ar!")});