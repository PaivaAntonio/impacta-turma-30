var Escola = {
    nome: "Impacta Tecnologia",
    endereco: {
        logradouro: "Avenida Paulista",
        numero: 1009,
        cep: "01311-100"
    },
    cursos: [
        "Javascript",
        "Node",
        "Angular",
        "HTML",
        "Java"
    ],
    mostrarInfos: function(){
        var texto = `Nome da escola ${this.nome} 
                    Endereço
                        Logradouro  : ${this.Logradouro}
                        Número      : ${this.numero}
                        CEP         : ${this.cep}`;
        return texto;
    }
}

module.exports = Escola;