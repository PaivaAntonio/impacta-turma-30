module.exports = function(app){
    var UsuariosController = {
        novo: function(request, response){
            var params = { user: request.session.usuarioSession }
            // render procura views na pasta views
            // eventos é a pasta
            // listar é o arquivo HTML com extensão .ejs
            response.render('usuarios/novo', params)
        },
        criar: function(request, response){ // limbo
            var nome = request.body.usuarioNovo.nome;
            var senha = request.body.usuarioNovo.senha;
            var confirmarSenha = request.body.usuarioNovo.confirmarSenha;
            
            //response.redirect('usuarios', params)
        }
    };

    return UsuariosController;
}