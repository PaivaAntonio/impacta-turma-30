// Nesse arquivo escreveremos funções e objetos a serem exportados

function calcularSoma(x, y){
    return x + y;
}

exports.multiplicar = function(x, y){
    return x * y;
}

// Primeira exportação
exports.somar = calcularSoma;

// Nome dos participantes do curso
exports.alunos = [
    {
        nome: "Victor",
        idade: 35
    }, {
        nome: "Guilherme",
        idade: 21
    }, {
        nome: "Weverton",
        idade: 28
    }, {
        nome: "Antonio",
        idade: 25
    }, {
        nome: "Ricardo",
        idade: 32
    }, {
        nome: "Matheus",
        idade: 20
    }, {
        nome: "Marcelo",
        idade: 51
    }, {
        nome: "Lucca",
        idade: 20
    }
]