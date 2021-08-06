module.exports = function(app){
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
            if(nome == "admin" && senha == "admin")
            {
                // vamos armazenar informações para a sessão
                var user = request.body.usuario;
                request.session.usuarioSession = user;
                response.redirect('eventos');
            }else{
                // vamos redirecionar para a tela inicial
                response.redirect('/');
            }
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