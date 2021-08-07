var fetch = require('node-fetch');

var url = "http://viacep.com.br/ws/013110100/json/"; // cep da impacta

var endereco = {};

// fetch faz uma requisição e quando ela estiver pronta, ela passará para o then a resposta do retorno dela
// digamos que isso leve 5 minutos, então após 5 minutos a resposta terá esse retorno

fetch(url).then(resposta => { // pega esse retorno que pode ou não vir rápido e por isso realizamos outro then embaixo tratando oficialmente o retorno da solicitação
    console.log(resposta);
    var x = resposta.json();
    console.log(x);
    return x;
}).then(saida => {
    endereco = saida;
    console.log(endereco);
})

console.log('Fim da requisição');