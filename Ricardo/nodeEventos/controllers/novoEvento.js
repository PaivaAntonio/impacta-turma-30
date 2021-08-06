module.exports = function(app) {
    var novoEventoController = {
        evento: function(request, response) {
            response.render("eventos/novo")
        },
        criar: function(request, response) {
            var nome = request.body.usuario.nome;
            var senha = request.body.usuario.senha;
            var confirmarSenha = request.body.usuario.confirmarSenha;

            if((senha != confirmarSenha) || senha.trim().length == 0 || nome.trim().length == 0){
                response.redirect('/usuarios/novo')
            } else {
                var usuarioNovo = {
                    nome: nome,
                    senha: senha
                }

                Usuario.create(usuarioNovo, function(erro, item){
                    if(erro){
                        response.redirect('/usuario/novo')
                        console.log(erro);
                    }
                    else {
                        console.log('Usuário adicionado: ' + item);
                        response.redirect('/eventos');
                    }
                })
            }
        }
    }
    return novoEventoController;
}