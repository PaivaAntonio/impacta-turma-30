module.exports = function(app) {
    var listaEventoController = {
        eventos: function(request, response) {
            response.render("eventos/evento")
        }
    }
    return listaEventoController;
}