var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');

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