module.exports = function (app) {
  var Usuario = app.models.usuariom;

  var HomeController = {
    index: function (request, response) {
      response.render("home/inicio");
    },
    login: function (request, response) {
      var nome = request.body.usuario.nome;
      var senha = request.body.usuario.senha;

      var query = { 'nome': nome, 'senha': senha}

      // Usuario.findOne(query).exec(function(erro, usuario){
      //   if(erro){
      //     console.log('Erro: ' + erro);
      //     response.redirect('/')
      //   }
      //   else {
      //     request.session.usuarioSession = usuario
      //     response.redirect('evento')
      //   }
      // })

      if (nome == "admin" && senha == "admin") {
        var user = request.body.usuario;
        request.session.usuarioSession = user;
        response.redirect("eventos");
      } else {
        response.redirect("/");
      }
    },
    logout: function (request, response) {
      request.session.destroy();
			response.redirect('/');
    },
  };
  return HomeController;
};
