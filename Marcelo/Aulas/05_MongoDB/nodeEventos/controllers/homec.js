module.exports = function(app){
    var Usuario = app.models.usuariosm;
    
    var homeController = {
        // Comumente isso é chamado de "Action"
        index: function(request, response){
            response.render('home/inicio');
        },
        // Comumente isso é chamado de "Action"
        login: function(request, response){
            // obtendo as informações dos campos do formulário
            // request para utilizar o bodyParser
            var nome = request.body.usuario.nome;
            var senha = request.body.usuario.senha;

            var query = { 'nome': nome, 'senha': senha };

            Usuario.findOne(query).exec(function(erro, usuario){
                if(erro){
                    // vamos redirecionar para a tela inicial
                    console.log('Erro: '+ erro);
                    response.redirect('/');
                } else{
                    // criar sessão - usuarioSession (nome da sessão)
                    request.session.usuarioSession = usuario;
                    // o redirect faz uma chamada de rota para modificar a página
                    response.redirect('eventos');
                }
            })
        },
        // Comumente isso é chamado de "Action"
        logout: function(request, response){
            // destruindo a sessão
            request.session.destroy();
            response.redirect('/');
        }
    };
    return homeController;
}