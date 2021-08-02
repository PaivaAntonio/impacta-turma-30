var funcoes = require('./funcoes');

var soma = funcoes.somar(2, 3);
//console.log('Minha soma exportada é: '+ soma);

var n = 10;
//console.log(n.length)
var s = "minha primeira aula";
//console.log(s.length);
var o = {
    aula1 : {
        titulo: 'minha primeira aula', dia: 30
    }
}
console.log(Object.keys(o.aula1).length);
console.log(o.aula1.titulo.length)

var listaAlunos = funcoes.alunos;
// console.log('Quantidade de alunos: '+listaAlunos.length);

for (let index = 0; index < listaAlunos.length; index++) {
    // console.log(listaAlunos[index])
    let aluno = listaAlunos[index];
    //console.log("Nome: "+aluno.nome);
    //console.log("Idade: "+ aluno.idade);
    //console.log("===========================")
    
}