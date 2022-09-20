let tarefa = document.getElementById('tarefa');
let lista = document.getElementById('lista');
let i = 0;

function adicionar() {
    if (tarefa.value.length == 0) {
        //window.alert('Por favor adione uma tarefa')
    } else {
        lista.innerHTML += `<li id='el${i}'>${tarefa.value} <input type="button" value="Apagar" onclick="apagar(${i})">`;
        tarefa.value = '';
        tarefa.focus();
    }
    salvarTarefas();
    return i++;
}

function apagar(i) {
    document.getElementById(`el${i}`).remove();
    salvarTarefas();
    return;
}

function salvarTarefas() {
    const liTarefas = lista.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefas of liTarefas) {
        let tarefasTexto = tarefas.innerText;
        listaDeTarefas.push(tarefasTexto);
    }
    //Não apredi ainda sobre JSON
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('lista', tarefasJSON);
}

function carregarTarefasSalvas() {
    if(!localStorage.getItem('lista')) return;
    const memoria = localStorage.getItem('lista');
    const listaDeTarefasArray = JSON.parse(memoria);
    for (let tarefa of listaDeTarefasArray) {
        lista.innerHTML += `<li id='el${i}'>${tarefa} <input type="button" value="Apagar" onclick="apagar(${i})">`;
        i++
    }
}

carregarTarefasSalvas();