var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var mongoose = require('mongoose');

// usamos 'global' como a variável global do node para criar o valor 'db' para ser acessível por todo o projeto
global.db = mongoose.connect('mongodb://localhost:27017/turma30')
// Setamos o mongoose para conexão por meio da função 'connect' e passamos para ela a URL de conexão: mongodb:// -> é o tipo de conexão. 27017 -> é a porta de uso do serviço do mongodb. 'turma30' é o nome da nossa base de dados

// Eventos de monitoramento do banco de dados
mongoose.connection.on('connected', function(){
  console.log('Conexão estabelecida');
})

mongoose.connection.on('error', function(error){
  console.log('Erro ao conectar: ' + error);
})

mongoose.connection.on('disconnected', function(){
  console.log('Conexão finalizada');
})

/* app é o objeto que será nossa instância 
do express importado acima */
app = express();

/* Essa variável executará o que significa 
o próprio módulo do express */

app.set('views', __dirname + '/views')
/* o primeiro valor de 'views' setado 
acima é uma constante do express que 
significa que ao configurarmos falamos 
para a aplicação que nossas views 
não podem ficar em qualquer local, 
elas ficarão em um local específico 
da aplicação -> ./views */
app.set('models', __dirname + '/models')
app.set('controllers', __dirname + '/controllers')

app.set('view engine', 'ejs')
// ejs é o mecanismo de execução das views (extensão do arquivo) a constante 'view engine' é usada para configurar qual mecanismo a aplicação usará para executar as telas

app.use(express.static(__dirname + "/public"));

// configuração de caminho de pasta raiz para recursos estáticos (imagens, css etc)

app.use(cookieParser('nodeEventos'));
app.use(expressSession());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

load('models').then('controllers').then('routes').into(app);

// usamos o listen para rodar o servidor assim como no outro exemplo do createServer
// o Express encapsula o módulo de http e usa direto na chamada
app.listen(3001, function(){
  console.log('Aplicação rodando')
})