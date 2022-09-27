function criaPessoa(nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
}

const pessoa1 = criaPessoa('Luiz', 'Otávio', 25);
console.log(pessoa1.nome);

let pessoal = {
    nome: 'Gabriel',
    sobrenome: 'Carvalho',
    idade: 25,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi e ele tem ${this.idade} anos.`)
    },

    incremetaIdade() {
        this.idade++;
    }
};

pessoal.fala();
pessoal.incremetaIdade();
pessoal.fala();
pessoal.incremetaIdade();
pessoal.fala();
