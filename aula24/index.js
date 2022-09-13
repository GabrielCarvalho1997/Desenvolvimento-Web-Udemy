let umaString = "um \"texto\""; // a barra invertida serve para adicionar alguns caracteres

console.log(umaString[4]);

console.log(umaString.charAt(4));

console.log(umaString.indexOf('o', 3)); //vai buscar a posição que tiver a letra "o" começando do índice 3

console.log(umaString.lastIndexOf('o', 3)); //faz a mesma coisa, só que de trás pra frente

console.log(umaString.replace('um', 'gabriel')); //troca uma palavra por outra

console.log(umaString.length); //mostra o tamanho da string - lembrando que começa do 0

console.log(umaString.slice(2, 6)); //corta a string do índice 2 até o 6