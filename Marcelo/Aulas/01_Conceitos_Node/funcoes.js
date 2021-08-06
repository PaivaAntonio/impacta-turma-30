//Nesse arquivo, escreveremos funções

exports.nomesAlunos = ["Marcelo", "Elza", "Pedro", "Julia"];

exports.testarMap = function()
{
    var numbers = [1, 4, 8];

    // Esse map pode ser substituído por um laço.
    var doubles = numbers.map(function(num){
        return num * 2;
    })   
}

function map(operacao)
{
    return operacao

}

function calcularSoma(y, y)
{
    return x+y;
}

function multiplicar(x, y)
{
    return x*y;
}

exports.verificarTamanho = function(x){
    return x.length;
}

// Arrow functions
exports.verificarTamanhoAF = (x) => {x.length};
exports.verificarTamanhoAF2 = x => x.length;
exports.verificarTamanhoAF3 = () => {return "marcelo"};

exports.executar = function(operacao){
    return operacao('impacta');
}
