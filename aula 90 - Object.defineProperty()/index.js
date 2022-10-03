// defineProperty - defineProperties

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //Mostra a chave?
        writable: true, // Pode alterar o valor?
        configurable: false, // Pode reconfigurar a chave?
        value: estoque //Valor da chave
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, //Mostra a chave?
            writable: true, // Pode alterar o valor?
            configurable: false, // Pode reconfigurar a chave?
            value: nome //Valor da chave
        },
        preco: {
            enumerable: true, //Mostra a chave?
            writable: true, // Pode alterar o valor?
            configurable: false, // Pode reconfigurar a chave?
            value: preco //Valor da chave
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);

