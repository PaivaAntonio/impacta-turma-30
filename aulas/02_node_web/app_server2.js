var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function(request, response){
    // Vamos usar o request para pegar informações da URL
    var url_params = url.parse(request.url);
    // Vamos pegar o nome do caminho do arquivo (pathname) e salvar na variável 'caminho'
    var caminho = url_params.pathname;

    // constante do nome -> __dirname retorna aonde está sendo executado o código
    fs.readFile(__dirname + caminho, function(erro, conteudo){
        if(erro) {
            console.log(erro)
            response.writeHead(404, {
                "Content-Type": "text/html"
            });
            response.write("<h2>NOT FOUND</h2>");
        } else {
            console.log('achou')
            response.writeHead(200, {
                "Content-Type": "text/html"
            })
            response.write(conteudo);
        }
        response.end();
    })
});

server.listen(3000, function(){
    console.log("O meu servidor está no ar!");
})