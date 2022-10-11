import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa'; //Form
import { FaEdit, FaWindowClose } from 'react-icons/fa'; //Tarefas
import './Main.css';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: []
  };

  handleSubmit = (e) => {   // Esse método irá pegar a novaTarefa do state, trata-lo e adicionar no array 'tarefas' do state
    e.preventDefault();
    const { tarefas } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();

    if (tarefas.indexOf(novaTarefa) !== -1 ) return;

    const novasTarefas = [...tarefas];

    this.setState({
      tarefas: [...novasTarefas, novaTarefa],
    })
  }

  handleChange = (e) => {   //Esse método irá pegar o valor que for digitado no input e joga-lo no 'novaTareda' do state
    this.setState({
      novaTarefa: e.target.value
    });
  }

  handleEdit = (e, index) => {  //Esse método irá editar o item da lista

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
          {tarefas.map((tarefa, index) => (
            <li key={tarefa}>
              {tarefa}
              <span>
                <FaEdit
                className='edit'
                onClick={(e) => this.handleEdit(e, index)}
                />

                <FaWindowClose
                className='delete'
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

