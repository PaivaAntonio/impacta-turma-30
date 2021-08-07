module.exports = function(app){
    var Evento = app.models.eventosm;
    var moment = require("moment");

    var eventosController = {
        listar: function(request, response){            
            //var params = { user: request.session.usuarioSession};
            //response.render('eventos/listar', params);

            var eventoNovo = request.body.evento;

            Evento.find(function(erro, eventos){
                if(erro){
                    console.log('Erro: ' + erro);
                    response.redirect('/');
                }else{
                    var params = {
                        user: request.session.usuarioSession,
                        eventosList: eventos,
                        momentParam: moment
                    };
                    response.render('eventos/listar', params);        
                }
            });
        },
        novo: function(request, response){            
            var params = { user: request.session.usuarioSession};
            response.render('eventos/novo', params);
        },
        criar: function(request, response){            
            if(eventoNovo.titulo.trim().length == 0){
                console.log('Erro ');
                response.redirect('/eventos/novo');
           }else{
                Evento.create(eventoNovo, function(erro, item){
                    if(erro){
                         console.log('Erro: ' + erro);
                         response.redirect('/eventos/novo');
                    }else{
                         console.log('Evento adicionado: ' + item);
                         response.redirect('/eventos');
                    }
                })
             }
        }
    }

    return eventosController;
}