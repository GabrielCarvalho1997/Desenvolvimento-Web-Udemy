const nome = 'Gabriel';
const sobrenome = 'Carvalho';
const idade = 25;
const peso = 78;
const alturaEmM = 1.78;

let imc = peso / (alturaEmM * alturaEmM);
let anoNascimento = 2022 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}Kg, tem ${alturaEmM} metros de altura e seu IMC é de ${imc}.`);

console.log(`${nome} ${sobrenome}, nasceu em ${anoNascimento}.`);

