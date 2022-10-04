import geraSenha from "./geradores";

const senhaGerada = document.getElementById('res');
const caracteres = document.querySelector('#caracteres');
const numeros = document.querySelector('#numeros');
const maiusculas = document.querySelector('#maiusculas');
const minusculas = document.querySelector('#minusculas');
const simbolos = document.querySelector('#simbolos');
const gerarSenha = document.querySelector('#gerar-senha');

export default () => {
    gerarSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gera();
    });
};

function gera() {
    const senha = geraSenha(
        caracteres.value,
        numeros.checked,
        maiusculas.checked,
        minusculas.checked,
        simbolos.checked
    );

    return senha || 'Nada selecionado';
}

