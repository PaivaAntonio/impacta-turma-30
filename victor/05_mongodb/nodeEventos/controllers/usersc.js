module.exports = function(app){
    var Usuario = app.models.usuariosm;
    var UsersController = {
        cadastrar: function(request, response){

            var params = { user: request.session.usuarioSession}

            response.render('usuarios/novo', params);
        },
        criar: function(request, response){
            var nome = request.body.usuarioNovo.nome
            var senha = request.body.usuarioNovo.senha
            var confirmarSenha = request.body.usuarioNovo.confirmarSenha

            if((senha != confirmarSenha) || nome.trim().length == 0){
                console.log('Dados incorretos')
                response.redirect('/usuarios/novo');
            } else {
                var usuarioNovo = {
                    nome: nome,
                    senha: senha
                }

                Usuario.create(usuarioNovo, function(erro, item){
                    if(erro){
                        console.log('Erro: ' + erro)
                    } else {
                        console.log('Usuario adicionado: ' + item)
                        response.redirect('/eventos')
                    }
                })


            }

        }
    };

    return UsersController;
}