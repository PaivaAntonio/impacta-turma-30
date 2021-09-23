module.exports = function (app) {
	var HomeController = {
		index: function (request, response) {
			// render vai na pasta de views, procura a pasta home e le o arquivo inicio.ejs
			response.render('home/inicio');
		},
		login: function (request, response) {
			// obtendo as informações dos campos do formulário
			// request para utilizar o bodyParser
			var nome = request.body.usuario.nome;
			var senha = request.body.usuario.senha;

			// simulação de login
			if (nome == "admin" && senha == "admin") {
				// vamos armazenar as infos para a sessão
				var user = request.body.usuario;
				// criar sessão - usuarioSession (nome da sessão)
				request.session.usuarioSession = user;
				// o redirect faz uma chamada de rota para modificar a página
				response.redirect('eventos');
			} else {
				// vamos redirecionar para a tela inicial
				response.redirect('/');
			}
		},
		logout: function (request, response) {
			// destruindo a sessão
			request.session.destroy();
			response.redirect('/');
		}
	};

	return HomeController;
}