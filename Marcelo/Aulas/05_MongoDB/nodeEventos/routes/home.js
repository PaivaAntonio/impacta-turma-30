module.exports = function(app){
    var valida = require('./../middlewares/valida')
    // vamos criar uma variável para referenciar nosso controller
    var homec = app.controllers.homec;
    var eventosc = app.controllers.eventosc;
    var usuariosc = app.controllers.usuariosc;

    app.get('/', homec.index);
    // usamos o get para entender a requisição feita pelo browser para a aplicação e saber o que a gente deve fazer ou carregar ao receber a requisição

    // Lição de casa: formulario HTML com input texto para nome, input de password para senha e botao de submit para enviar formulario

    app.post('/login', homec.login);
    app.get('/logout', homec.logout);

    app.get('/eventos', valida, eventosc.listar);
    app.get('/eventos/novo', valida, eventosc.novo);
    app.post('/eventos/criar', valida, eventosc.criar);
    
    //
    app.get('/usuarios/novo', valida, usuariosc.novo);
    app.post('/usuarios/criar', valida, usuariosc.criar);
}