const path = require('path');

console.log(__filename); //mostra o caminho do arquivo 
console.log(__dirname); // mostra o caminho da pasta

console.log(path.resolve(__dirname)); //pode escrever o nome das pastas que deseja acessar

const multiplicação = require('./mod1');
console.log(multiplicação(2, 2));