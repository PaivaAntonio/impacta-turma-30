// Nesse arquivo escreveremos funções e objetos a serem exportados

function calcularSoma(x, y){
    return x + y;
}
// Primeira exportação
exports.somar = calcularSoma;

exports.multiplicar = function(x, y){
    return x * y;
}

exports.verificarTamanho = function(x){
    return x.length;
}

exports.verificarTamanhoAF = (x) => x.length;
exports.verificarTamanhoAF2 = x => x.length;

exports.fn = function(){
    console.log("teste de retorno");
}

exports.fn2 = () => console.log("teste de retorno");

exports.fn2 = () => {
    return "teste retorno"
}

exports.fn3 = function(texto){
    let novoTexto = texto + "!!";
    return novoTexto;
}

// ao processar um escopo em uma função, precisamos obrigatoriamente usar {} e a palavra reservada 'return'
exports.fn4 = (texto) => {
    let novoTexto = texto + "!!";
    let texto2 = "!!";
    return texto2+novoTexto;
}

// com retorno direto de uma tratativa, não precisamos usar {} e nem a palavra reservada 'return'
exports.fn5 = (texto) => texto + "!!";

exports.executar = function(funcao){
    return funcao('Impacta');
}

// Nome dos participantes do curso
exports.alunos = [
    {
        nome: "Victor",
        idade: 35,
        cidade: "Osasco"
    }, {
        nome: "Guilherme",
        idade: 21,
        cidade: "São Paulo"
    }, {
        nome: "Weverton",
        idade: 28,
        cidade: "São Paulo"
    }, {
        nome: "Antonio",
        idade: 25,
        cidade: "São Paulo"
    }, {
        nome: "Ricardo",
        idade: 32,
        cidade: "Sorocaba"
    }, {
        nome: "Matheus",
        idade: 20,
        cidade: "São Paulo"
    }, {
        nome: "Marcelo",
        idade: 51,
        cidade: "Mirandópolis"
    }, {
        nome: "Lucca",
        idade: 20,
        cidade: "São Paulo"
    }, {
        nome: "Samanta",
        idade: 32,
        cidade: "São Paulo"
    }
]

exports.nomesAlunos = [
    "Victor",
    "Guilherme",
    "Weverton",
    "Antonio",
    "Ricardo",
    "Matheus",
    "Marcelo",
    "Lucca",
    "Samanta"
]