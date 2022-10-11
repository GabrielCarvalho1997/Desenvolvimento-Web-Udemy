import React from "react";
import PropTypes from 'prop-types';
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import './Tarefas.css';

export default function Tarefas( {tarefas, handleEdit, handleDelete}) {
  return (
    <ul className='tarefas'>
      {tarefas.map((tarefa, index) => (  // Irá mapear cada elemento do array 'tarefas', colocando o valor de cada elemento em uma lista juntamente com os ícones de editar e deletar do própio react.
        <li key={tarefa}>
          {tarefa}
          <span>
            <FaEdit   //ícone de editar do própio react
              className='edit'
              onClick={(e) => handleEdit(e, index)}
            />

            <FaWindowClose
              className='delete' //ícone de fechar Janela do própio react
              onClick={(e) => handleDelete(e, index)}
            />
          </span>
        </li>
      ))}
    </ul>
  );
}

Tarefas.propTypes = {
  tarefas: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
}
