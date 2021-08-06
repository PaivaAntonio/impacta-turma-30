module.exports = function(app){
    var valida = require('./../middlewares/valida');
    // vamos criar uma var para referencias nosso controller
    var homec = app.controllers.homec;
    var eventosc = app.controllers.eventosc;
    var usersc = app.controllers.usersc;

    // usamos o get para entender a requisição feita no browser para a aplicação e saber o que devemos fazer ou carregar ao receber a requisição
    app.get('/', homec.index);

    app.post('/login', homec.login);

    app.get('/logout', homec.logout);

    app.get('/eventos', valida, eventosc.listar);

    app.get('/eventos/novo', valida, eventosc.cadastrar);

    app.get('/usuarios/novo', valida, usersc.cadastrar);

    app.post('/usuarios/novo/criar', valida, usersc.criar);
}