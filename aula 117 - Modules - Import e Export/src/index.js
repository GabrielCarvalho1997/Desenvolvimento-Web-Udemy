import { nome as nome2, sobrenome, idade, soma, Pessoa } from './modulo1'; //método mais comum

// import * as MeuModulo from './modulo1'; //importa tudo do modulo1

// import qualquerNome from './modulo1'; //importa o padrão(default) do moludo1 atribuindo qualquerNome

const nome = 'Tatu Bolinha'

console.log(nome2, sobrenome, idade, soma(5,5));

console.log(nome);

const p1 = new Pessoa('Gabriel', 'Carvalho');

console.log(p1);