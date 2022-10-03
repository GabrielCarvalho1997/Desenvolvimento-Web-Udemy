// fetch('pessoas.json')
//     .then(resposta => resposta.json()) // converteu a resposta em JSON, retornando uma nova PROMISES.
//     .then(json => carregaElementosNaPagina(json));//pegou o valor em JSON e mandou esse valor para a função.

axios('pessoas.json')
    .then(resposta => carregaElementosNaPagina(resposta.data));

function carregaElementosNaPagina(json) { //Criou a tabela com os valores do arquivo JSON.
    const table = document.createElement('table');
    for (let pessoa of json) {
        const tr = document.createElement('tr');

        let td = document.createElement('td');
        td.innerHTML = pessoa.nome;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoa.idade;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoa.salario;
        tr.appendChild(td);

        table.appendChild(tr);
    }

    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);
}
