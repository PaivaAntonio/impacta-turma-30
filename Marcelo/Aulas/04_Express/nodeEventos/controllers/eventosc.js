module.exports = function(app){
    var eventosController = {
        listar: function(request, response){            
            var params = { user: request.session.usuarioSession};
            response.render('eventos/listar', params);
        },
        novo: function(request, response){            
            var params = { user: request.session.usuarioSession};
            response.render('eventos/novo', params);
        }
    }

    return eventosController;
}