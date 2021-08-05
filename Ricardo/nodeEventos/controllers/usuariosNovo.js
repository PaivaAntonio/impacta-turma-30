module.exports = function(app) {
    var RegisterUserController = {
        usuario: function(request, response) {
            response.render("usuarios/novo");
        }
    }
    return RegisterUserController;
}