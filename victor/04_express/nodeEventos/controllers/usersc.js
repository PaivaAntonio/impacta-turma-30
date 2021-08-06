module.exports = function(app){
    var UsersController = {
        cadastrar: function(request, response){

            var params = { user: request.session.usuarioSession}

            response.render('usuarios/novo', params);
        },
        criar: function(request, response){
            var nome = request.body.usuarioNovo.name
            var senha = request.body.usuarioNovo.senha
            var confirmarSenha = request.body.usuarioNovo.confirmarSenha

        }
    };

    return UsersController;
}