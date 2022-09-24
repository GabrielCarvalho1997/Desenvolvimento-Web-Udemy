function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //Mostra a chave?
        //writable: true, // Pode alterar o valor?
        configurable: false, // Pode reconfigurar a chave?
        //value: estoque //Valor da chave
        get: function() {
            return estoque; 
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                console.log('Bad Value')
                return;
            }
            estoque = valor;
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
