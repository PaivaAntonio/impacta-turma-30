module.exports = function(app){
    var Evento = app.models.eventosm;
    var EventosController = {
        listar: function(request, response){ 
            var params = { user: request.session.usuarioSession}
            response.render('eventos/listar', params)
        },
        criar: function(request, response) {
            var evento = request.body.evento;

            if(evento.descricao.trim().length === 0){
                response.redirect("/eventos/novo")
            } else {
                Evento.create(evento, function(error, item){
                    if(error){
                            console.log("Erro: " + error)
                            response.redirect("/eventos/novo")
                    } else {
                        console.log('Evento cadastrado: ' + item)
                        response.redirect("/eventos")
                    }
                })
            }
        }
    }
    return EventosController;
}