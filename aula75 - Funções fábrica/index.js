function criaPessoa (nome, sobrenome) {
    return {
        nome,
        sobrenome,
        fala: function(assunto) {
            return `${this.nome} está ${assunto}.`;
        }
    }
}
 
const p1 = criaPessoa('Luiz', 'Otávio');
console.log(p1.fala('falando sobre JS'));