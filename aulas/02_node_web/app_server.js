var http = require('http'); // Módulo para criar aplicação que vai funcionar como servidor web
var fs = require('fs'); // Módulo de file system que permite ler e gravar arquivos

// função createServer do módulo http que recebe uma função de callback com 2 parâmetros: request e response
var server = http.createServer(function(request, response){
    // readFile tem 2 parâmetros
    // 1. o arquivo a ser lido que iremos criar para que o navegador interprete na tela
    // 2. é opcional, mas funciona como callback que é o que será executado conforme o arquivo for lido e com o que faremos com o arquivo
    // ao utilizar o segundo parâmetro, temos a possibilidade de uso de 2 parâmetros para tratativa do arquivo HTML
    // ---- 1. possível erro
    // ---- 2. conteudo da página
    fs.readFile('index.html', function(erro, conteudo){
        if(erro) {
            // Nesse cenário vamos tratar um cabeçalho para exibir o erro de não encontrado como resposta do servidor
            // A escrita TEM QUE SER EXATAMENTE COMO ESTÁ ABAIXO para que o server compreenda o cabeçalho
            response.writeHead(404, {
                "Content-Type": "text/html"
            });
            response.write("<h2>Página não encontrada</h2>");
        } else {
            response.writeHead(200, {
                "Content-Type": "text/html"
            })
            response.write(conteudo);
        }
        response.end(); // finalizar a tratativa da resposta
    })
});

server.listen(3000, function(){
    console.log("O meu servidor está no ar!");
})