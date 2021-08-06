var funcoes = require("./funcoes");
var escola = require("./escola");

let nome = "Marcelo";
const idade = 51;
let curso = "Node e Angular";

console.log("Meu nome é "+ nome);
console.log("Minha idade é "+ idade);
console.log("o curso é "+ curso);


console.log("Usando uma função para verificar o tamanho do número");
console.log("Numero " + idade + ", tamanho: " + funcoes.verificarTamanho(idade));

console.log("Usando uma função para verificar o tamanho do nome");
console.log("String " + nome + ", tamanho: " + funcoes.verificarTamanho(nome));

//console.log("Execução de função");
//console.log("Retorno de função , tamanho: " + funcoes.executar(function(){}));

console.log("Execução de função");
console.log("Retorno de função , tamanho: " + funcoes.verificarTamanhoAF3());

var numbers = funcoes.testarMap();

/*
array.forEach(element => {
    
});
*/

let filtro = "e";
let filtroNomes = funcoes.nomesAlunos.filter(nome => nome.toLowerCase().includes(filtro.toLowerCase()));

console.log("==================================");
console.log("Filtro '" + filtro + "' encontrou " + filtroNomes.length + " nomes.");
for (const nome of filtroNomes)
{
    console.log("Nome: " + nome);
}

