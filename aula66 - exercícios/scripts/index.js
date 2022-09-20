let res = document.getElementById('res')
let segundos = 0;
let timer;

function cronometro(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {hour12:false, timeZone: 'GMT'});
}

function iniciar() {
    res.classList.remove('pausado');
    clearInterval(timer);
    timer = setInterval(function() {
        segundos++;
        res.innerHTML = cronometro(segundos);
    }, 1000);
}

function pausar() {
    clearInterval(timer);
    res.classList.add('pausado');
}

function zerar() {
    res.classList.remove('pausado');
    clearInterval(timer);
    res.innerHTML = '00:00:00';
    segundos = 0;
} 