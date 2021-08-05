module.exports = function(app){
    var UsuariosController = {
        novo: function(request, response){
            var params = { user: request.session.usuarioSession }
            // render procura views na pasta views
            // eventos é a pasta
            // listar é o arquivo HTML com extensão .ejs
            response.render('usuarios/novo', params)
        },
        criar: function(request, response){
            var params = { user: request.session.usuarioSession }
            
            response.redirect('usuarios', params)
        }
    };

    return UsuariosController;
}