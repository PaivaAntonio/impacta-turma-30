
module.exports = function(app){
    var valida = require('./../middlewares/valida')
    var homec = app.controllers.homec;
    var eventosc = app.controllers.eventosc;
    var usuariosNovo = app.controllers.usuariosNovo;
    var novoEvento = app.controllers.novoEvento;
    var listaEventos= app.controllers.listaEventos;

    app.get('/', homec.index);

    app.post('/login', homec.login);
    app.get('/logout', homec.logout);

    app.get('/eventos', valida, eventosc.listar);

    app.get('/usuarios/novo', valida, usuariosNovo.usuario);
    app.post('/usuarios/criar', valida, usuariosNovo.criar);
    
    app.get('/eventos/novo', valida, novoEvento.evento);

    app.get('/eventos/eventos-criados', valida, listaEventos.eventos);
}