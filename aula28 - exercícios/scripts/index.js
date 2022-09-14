const num = Number(window.prompt('Digite um número'));
const titulo = window.document.getElementById('titulo');
let texto = window.document.getElementById('texto');

titulo.innerHTML += num
texto.innerHTML += `Raiz quadrada: ${num**0.5}.<br>
${num} é inteiro:${Number.isInteger(num)}.<br>
É Nan:${Number.isNaN(num)}.<br>
Arredondado para baixo: ${Math.floor(num)}.<br>
Arredondado para cima: ${Math.ceil(num)}.<br>
Com duas casas decimais: ${num.toFixed(2)}.`;

