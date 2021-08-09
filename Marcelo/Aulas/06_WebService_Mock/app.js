var fetch = require("node-fetch");

var url = "https://viacep.com.br/ws/04268000/json/";
var url2 = "http://localhost:3001/";

var enderecos = "";
var produtos = "";

fetch(url).then
