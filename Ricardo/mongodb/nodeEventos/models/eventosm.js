module.exports = function(app){
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    var evento = Schema({
        description: {
            type: String,
            required: true
        },
        data: {
            type: Date,
            required: true
        },
        preco: {
            type: Number,
            required: true
        }
    });
    return mongoose.model('eventos', evento);
}