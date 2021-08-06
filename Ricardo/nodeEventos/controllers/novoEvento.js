module.exports = function(app) {
    
    var novoEventoController = {
        evento: function(request, response) {
            response.render("eventos/novo")
        },

    }
    return novoEventoController;
}