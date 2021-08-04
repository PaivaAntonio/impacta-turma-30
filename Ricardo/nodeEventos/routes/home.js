module.exports = function(app){
    var homec = app.controllers.homec;

    app.get('/', homec.index)
}