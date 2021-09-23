var fetch = require('node-fetch');

var url = "https://viacep.com.br/ws/01001000/json/";
var url2 = "http://localhost:3000/produtos";

var endereco = {};
var produtos = {};

 fetch(url).then(resposta =>{

    var x = resposta.json();
    
     console.log(x);
     return resposta.json();
 }).then(saida =>{
     endereco.saida;
     console.log(endereco);
 })

 console.log("fim da requisição");