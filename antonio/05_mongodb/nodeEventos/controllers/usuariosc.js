module.exports = function (app){
    var Usuarios = app.models.usuariosm;

    var UsuariosController = {
        novo: function(request, response){
            var params = { user: request.session.usuarioSession }
            // render procura views na pasta views
            // eventos é a pasta
            // listar é o arquivo HTML com extensão .ejs
            response.render('usuarios/novo', params)
        },
        criar: function(request, response){
            var nome = request.body.usuarioNovo.nome;
            var senha = request.body.usuarioSenha.senha;
            var confirmarSenha = request.body.usuarioNovo.confirmarSenha;

            if((senha != confirmarSenha) || senha.trim().length ==0  || nome.trim().length ==0){
                response.redirect('/usuarios/novo');

            }else{
                var usuarioNovo = {
                    nome:nome,
                    senha:senha
                }

                Usuarios.create(usuarioNovo,function(erro, item){
                    if(erro){
                        console.log('erro:' + erro);

                    }else{
                        console.log('Usuario add:' + item);
                        response.redirect('/eventos');
                    }

                })



            }

            
            response.redirect('criar', params)
        }
    }

    return UsuariosController;
}
