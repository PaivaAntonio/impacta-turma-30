module.exports = function(app){
    var Usuario = app.models.usuariosm;

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
            
            if((senha != confirmarSenha) || senha.trim().length == 0 || nome.trim().length == 0){
                console.log('Dados incorretos');
                response.redirect('/usuarios/novo')
            } else{
                var usuarioNovo = {
                    nome: nome,
                    senha: senha
                }

                Usuario.create(usuarioNovo, function(erro, item){
                    if(erro){
                        console.log('Erro: ' + erro);
                        response.redirect('/usuarios/novo')
                    } else{
                        console.log('Usuário adicionado: ' + item);
                        response.redirect('/eventos')
                    }
                })
            }
        }
    };

    return UsuariosController;
}