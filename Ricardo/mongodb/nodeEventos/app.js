var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var mongoose = require('mongoose');

global.db = mongoose.connect('mongodb://localhost:27017/turma30');

mongoose.connection.on('connected', function(){
  console.log('Conexão estabelecida');
})

mongoose.connection.on('error', function(erro){
  console.log('Erro ao conectar' + erro);
})
mongoose.connection.on('disconnected', function(erro){
  console.log('Conexão finalizada' + erro);
})

app = express();

app.set('views', __dirname + '/views');
app.set('models', __dirname + '/models');
app.set('controllers', __dirname + '/controllers');

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use(cookieParser('nodeEventos'));
app.use(expressSession());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


load('models').then('controllers').then('routes').into(app);

app.listen(3001, function() {
  console.log('Aplicação rodando')
})