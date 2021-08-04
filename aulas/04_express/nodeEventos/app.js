var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');

// app é o objeto que será nossa instância do express importado acima
app = express();
// Essa variável executará o que significa o próprio módulo do express

app.set('views', __dirname + '/views');
// o primeiro valor de 'views' setado acima é uma constante do express que significa que ao configurarmos falamos para a aplicação que nossas views não podem ficar em qualquer local, elas ficarão em um local específico da aplicação -> ./views
app.set('models', __dirname + '/models');
app.set('controllers', __dirname + '/controllers');

app.set('view engine', 'ejs');
// ejs é o mecanismo de execução das views (extensão do arquivo)
// a constante 'view engine' usamos para configurar qual mecanismo a aplicação usuará para executar as telas

app.use(express.static(__dirname + "/public"));
// configuração de caminho de pasta raiz para recursos estáticos (imagens, css, etc)

app.use(cookieParser('nodeEventos'));
app.use(expressSession());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

load('models').then('controllers').then('routes').into(app);

// Usamos o listen para rodar o servidor assim como no outro exemplo do createServer
// O Express encapsula o módulo de http e usa direto na chamada
app.listen(3001, function(){
  console.log('Aplicação rodando');
})