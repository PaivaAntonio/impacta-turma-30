module.exports = function(app){
    var evento = app.controllers.eventosc;

    app.get('/', evento.index);

}