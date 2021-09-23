module.exports = function(app){
    var EventosController ={
        listar: function(request, response){
            var usuario = request.sessioon.usuarioSession;
            var params = { user: request.session.usuarioSession }
            response.render('eventos/listar');
        }
    };
    return EventosController;
}