var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');


app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(function(request, response,next){
	response.header("Access-Control-Allow-Origin", "*");
	response.header("Acess-Control-Allow-Headers","Origin, x-Requested-With,Content-Type, Accept");
	response.header("Access-Control-Allow-Methods", "GET, POST");
	next();
});

global.db = mongoose.connect('mongodb://localhost:27017/turma30', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

load('models').into(app);

var Evento = app.models.eventosm;

// apenas uma mensagem para o usuário ler no navegador caso abra a tela
app.get('/', function (request, response) {
	response.send("Webservice no ar!");
})

// lista de todos os eventos
app.get('/eventos', function (request, response) {
	Evento.find(function (erro, retorno) {
		if (erro) {
			response.json(erro);
		} else {
			response.json(retorno);
		}
	})
})

// pegar somente 1 evento
app.get('/evento/:id', function (request, response) {
	var id = request.params.id;

	Evento.findById(id, function(erro, evento){
		if(erro){
			response.json(erro);

		}else{
			response.json(evento);
		}
	});
	
})

// criar um novo evento
app.post('/evento', function (request, response) {

	var evento = {

		'descricao': request.body.descricao,
		'data':request.body.data,
		'preco':request.body.preco
	};


})

// atualizar um evento
app.put('/evento/:id', function (request, response) {

	var id = request.params.id;

	Evento.findById(id, function(erro, evento){
		if(erro){
			response.json(erro);
		}else{
			evento.descricao = request.body.descricao;
			evento.data = request.body.data;
			evento.preco = request.body.preco;

			evento.save(function(erro, eventoAtualizado){
				if(erro){
					response.json(erro);

				}else{
					response.json(eventoAtualizado);
				}
			})
		})
	}
}

// deletar um evento
app.delete('/evento/:id', function (request, response) {
	var id = request.params.id;

	Evento.findById(id, function(erro, evento){
		if(erro){
			response.json();
		}else{
			if(evento)
			Evento.deleteOne(evento, function(erro, eventoApagado){
				if(erro){
					response.json(erro);
				}else{
					response.json(eventoApagado);
				}
			})
		} else{
			response.json(erro);
		}
	}

})
})

app.listen(3200, function () {
	console.log("API rodando");
});