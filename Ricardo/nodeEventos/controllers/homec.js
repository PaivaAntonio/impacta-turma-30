module.exports = function (app) {
  var HomeController = {
    index: function (request, response) {
      response.render("home/inicio");
    },
    login: function (request, response) {
      var nome = request.body.usuario.nome;
      var senha = request.body.usuario.senha;

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
