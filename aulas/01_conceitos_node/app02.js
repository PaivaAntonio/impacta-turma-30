var funcoes = require('./funcoes');

var valor1 = 2;
var valor2 = 3;
var soma = funcoes.somar(valor1, valor2);
console.log("Minha soma de " + valor1 + " + " + valor2 + " exportada é: " + soma);

var n = 10;
var s = "minha primeira aula";
var a = [1, 2, "3", "a", "b"]
console.log("Usando uma função para verificar o tamanho de um número");
console.log("Número: " + n + " - tamanho: " + funcoes.verificarTamanho(n));

console.log("Usando uma função para verificar o tamanho de uma string");
console.log("String: " + s + " - tamanho: " + funcoes.verificarTamanho(s));

console.log("Usando uma função para verificar o tamanho de um array");
console.log("Array: " + a + " - tamanho: " + funcoes.verificarTamanho(a));

var o = {
    aula1 : {
        titulo: 'minha primeira aula', dia: 30
    }
}
console.log(Object.keys(o.aula1).length);
console.log(o.aula1.titulo.length)

var listaAlunos = funcoes.alunos;
console.log('Quantidade de alunos: '+listaAlunos.length);

for (let index = 0; index < listaAlunos.length; index++) {
    console.log(listaAlunos[index])
    let aluno = listaAlunos[index];
    console.log("Nome: "+aluno.nome);
    console.log("Idade: "+ aluno.idade);
    console.log("===========================")
    
}

let resposta = funcoes.executar(function(texto){
    return texto.length;
})
console.log("Quantidade de caracteres do callback: " + resposta);

let filtro = "mA";
let filtroNomes = funcoes.nomesAlunos.filter(a => a.toLowerCase().includes(filtro.toLowerCase()));
// let filtroNomes = funcoes.nomesAlunos.filter(function(a){ return a.includes("er"); });

console.log("=======================================");
console.log("Quantidade de retorno com filtro '" + filtro + "': " + filtroNomes.length);
for (const nome of filtroNomes) {
    console.log("Nome: " + nome);
}

let filtroAlunosSaoPaulo = funcoes.alunos.filter(a => a.cidade == "São Paulo")
console.log("=======================================");
console.log("Quantidade de retorno de alunos em SP: " + filtroAlunosSaoPaulo.length);
for (const aluno of filtroAlunosSaoPaulo) {
    console.log("Nome: " + aluno.nome);
}

let filtroAlunosForaSP = funcoes.alunos.filter(a => a.cidade != "São Paulo");
console.log("=======================================");
console.log("Quantidade de retorno de alunos em SP: " + filtroAlunosForaSP.length);
for (const aluno of filtroAlunosForaSP) {
    console.log("Nome: " + aluno.nome);
}

let filtroAlunosGeracaoZ = funcoes.alunos.filter(a => a.idade < 30);
console.log("=======================================");
console.log("Quantidade de retorno de alunos com menos de 30 anos: " + filtroAlunosGeracaoZ.length);
for (const abacate of filtroAlunosGeracaoZ) {
    console.log("Nome: " + abacate.nome + " - idade: " + abacate.idade);
}
