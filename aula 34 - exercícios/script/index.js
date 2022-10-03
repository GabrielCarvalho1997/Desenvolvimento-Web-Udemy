let resultado = [];

function enviar() {
    
    let nome = window.document.getElementById('nome');
    let sobrenome = window.document.getElementById('sobrenome');
    let idade = window.document.getElementById('idade');
    let peso = window.document.getElementById('peso');
    let res = window.document.getElementById('res');

    resultado.push({ nome: nome.value, sobrenome: sobrenome.value, idade: idade.value, peso: peso.value });

    console.log(resultado);

    res.innerHTML += `<p>${nome.value} ${sobrenome.value} ${idade.value} ${peso.value}</p>`;
}
