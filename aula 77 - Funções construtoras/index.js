function Pessoa(nome, sobrenome) {
    const ID = 123455; //Não consegue utilizar fora da função pois não tem this
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo() = function () {
        console.log('Sou um método');
    }
}

const p1 = new Pessoa('Gabriel', 'Carvalho');