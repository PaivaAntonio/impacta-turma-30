var express = require('express');
var load = require('express-load');

app = express();

app.set('views', __dirname + '/views');
app.set('models', __dirname + '/models');
app.set('controllers', __dirname + '/controllers');

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
load('models').then('controllers').then('routes').into(app);

app.listen(3001, function() {
  console.log('Aplicação rodando')
})