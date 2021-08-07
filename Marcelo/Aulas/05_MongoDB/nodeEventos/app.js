var express = require("express");
var load = require("express-load");
var mongoose = require("mongoose");

//
global.db = mongoose.connect("mongodb://localhost:27017/turma30");

mongoose.connection.on("connected", function(){
    console.log("Conexão estabelecida");
})

mongoose.connection.on("error", function(){
    console.log("Erro ao conectar");
})

mongoose.connection.on("disconnected", function(){
    console.log("Conexão finalizada");
})


var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var expressSession = require("express-session");

// app é o objeto que será nossa instância do express acima
app = express();
// essa variável executará o que significa o próprio módulo do express

app.set('views', __dirname + '/views');
// o primeiro valor de 'views' setado acima é uma constante do express que significa que ao configurarmos falamos para a aplicação que nossas views não podem ficar em qualquer local, elas ficarão em um local específico da aplicação
app.set('models', __dirname + '/models');
app.set('controllers', __dirname + '/controllers');

// Isso é opcional!!! A Mari não fez isso
app.set('routes', __dirname + '/routes');

app.set('view engine', 'ejs');
// ejs é o mecanism o de execução das views (extensão do arquivo) 
// a constante view_engine usamos para configurar qual mecanismo a aplicação usará para executar as telas


app.use(express.static(__dirname + '/public'));
// configurações de caminho de pasta raiz para recursos estáticos (imagens, css, etc)

// Configurar essas coisas antes de serem carregadas
app.use(cookieParser('nodeEventos'));
app.use(expressSession());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// 
load('models').then('controllers').then('routes').into(app);


app.listen(3001, function(){console.log("Aplicação rodando")})
// Usamos o listener para configurar o servidor assim como no outro exemplo de createServer
// o express encapsula o módulo de http e usa direto na chamada.