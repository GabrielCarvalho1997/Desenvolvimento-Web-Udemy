const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const geraMaisucula = () => String.fromCharCode(rand(65, 91)); //tabela ASCII, 65-90 são letras maiúsculas
const geraMinuscula = () => String.fromCharCode(rand(97, 123)); //tabela ASCII, 97-122 são letras minúscula
const geraNumero = () => String.fromCharCode(rand(48,58)); //tabela ASCII, 48-57 são números
const simbolos = ',.;^~[]{}!@#$%()&*_+=-';
const geraSimbolo = () => simbolos[rand(0,simbolos.length)];

export default function geraSenha(qtd, numeros, maiusculas, minusculas, simbolos) {
    const senhaArray = [];
    qtd = Number(qtd);

    for (let i = 0; i < qtd; i++ ) {
        numeros && senhaArray.push(geraNumero());
        maiusculas && senhaArray.push(geraMaisucula());
        minusculas && senhaArray.push(geraMinuscula());
        simbolos && senhaArray.push(geraSimbolo());
    }

    return senhaArray.join('').slice(0, qtd);
};
