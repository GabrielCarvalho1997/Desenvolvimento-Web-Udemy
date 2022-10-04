export const nome = 'Gabriel'; //cria e exporta 
export const sobrenome = 'Carvalho';
export const idade = 25;

export function soma(x, y) { 
    return x + y;
}

// export default function soma(x, y) {  // exporta por padrão somente essa função
//     return x + y;
// }

// export { nome, sobrenome, idade, soma };

//export { nome as defaut, sobrenome, idade, soma };

export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}
