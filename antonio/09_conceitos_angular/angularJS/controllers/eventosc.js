module.exports = function(app){
    var EventosControllers = {
        index:function(request, response){
            response.render('eventos/index');
        }

    }
    return EventosControllers;
};