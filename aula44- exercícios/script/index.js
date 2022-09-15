let form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
});

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 40) {
        return nivel[5];
    } else if (imc >= 35) {
        return nivel[4];
    }else if (imc >= 30) {
        return nivel[3];
    } else if (imc >= 25) {
        return nivel[2];
    } else if (imc >= 18.5) {
        return nivel[1];
    } else {
        return nivel[0];
    }
}

function calcular() {

    let peso = document.getElementById('peso');
    let altura = document.getElementById('altura');
    let imc = peso.value / (altura.value ** 2);
    let res = document.getElementById('res');

    if ((peso.value == 0 || peso.value.length == 0) && (altura.value == 0 || altura.value.length == 0)) {
        res.innerHTML = `<p>Por favor, digite um peso e uma altura válidos!</p>`;
        res.classList.add('vermelho');
    } else if (peso.value == 0 || peso.value.length == 0) {
        res.innerHTML = `<p>Por favor, digite um peso válido!</p>`;
        res.classList.add('vermelho');
    } else if (altura.value == 0 || peso.value.length == 0) {
        res.innerHTML = `<p>Por favor, digite uma altura valida!</p>`;
        res.classList.add('vermelho');
    } else {
        res.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)}. ${getNivelImc(imc)}</p>`;
        res.classList.add('verde');
        return
    }
}