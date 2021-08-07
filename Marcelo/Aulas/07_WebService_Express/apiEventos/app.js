var express = require("express");
var expressLoad = require("express-load");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

app = express();
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({extended : true}));

global.db = mongoose.connect("mongodb://localhos:27017/eventos", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

load("models").into(app);

var Evento = app.models.eventosm;

app.get("/", function(request, response){
  response.send("Web service no ar");
});

app.listen(3200, function(){
  console.log("API rodando");
})