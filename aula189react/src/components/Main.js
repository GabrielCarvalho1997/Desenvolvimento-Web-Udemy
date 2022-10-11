import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa'; //Form
import { FaEdit, FaWindowClose } from 'react-icons/fa'; //Tarefas
import './Main.css';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [],
    index: -1
  };

  handleSubmit = (e) => {   // Esse método irá pegar a novaTarefa do state, trata-lo e adicionar no array 'tarefas' do state
    e.preventDefault();
    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();

    if (tarefas.indexOf(novaTarefa) !== -1) return;

    const novasTarefas = [...tarefas];

    if (index === -1) {
      this.setState({
        tarefas: [...novasTarefas, novaTarefa],
        novaTarefa: ''
      });
    } else {
      novasTarefas[index] = novaTarefa;

      this.setState({
        tarefas: [...novasTarefas],
        index: -1
      });
    }
  }

  handleChange = (e) => {   //Esse método irá pegar o valor que for digitado no input e joga-lo no 'novaTareda' do state
    this.setState({
      novaTarefa: e.target.value
    });
  }

  handleEdit = (e, index) => {  //Esse método irá editar o item da lista
    const { tarefas } = this.state;
    this.setState({
      index,
      novaTarefa: tarefas[index],
    });
  }

  handleDelete = (e, index) => {  //Esse método irá apagar o item da lista
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1)

    this.setState({
      tarefas: [...novasTarefas]
    });
  }

  render() {
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>
        <form action="#" className='form' onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            value={novaTarefa}
          />
          <button type='submit' >
            <FaPlus />
          </button>
        </form>


        <ul className='tarefas'>
          {tarefas.map((tarefa, index) => (  // Irá mapear cada elemento do array 'tarefas', colocando o valor de cada elemento em uma lista juntamente com os ícones de editar e deletar do própio react.
            <li key={tarefa}>
              {tarefa}
              <span>
                <FaEdit   //ícone de editar do própio react
                  className='edit'
                  onClick={(e) => this.handleEdit(e, index)}
                />

                <FaWindowClose
                  className='delete' //ícone de fechar Janela do própio react
                  onClick={(e) => this.handleDelete(e, index)}
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

