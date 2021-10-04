import React from 'react';
import './Todoitem.css';

function Todoitem(props){

  const onComplete=()=>{

    alert('Aqui se completa la tarea ' + props.text);

  }

  const onDelete=()=>{

    alert('Eliminaste la tarea '+ props.text)

  }

  //Si se envia algun parametro en la funcion, es necesario envolverlo en una arrow function
    return(
            <li className="Todo_Item">
              <span className="Todo_Item--check" onClick={onComplete}><i className={`fas fa-check-circle ${props.complete && 'check-complete'}`}></i></span>

              <p className={`Todo_Item--Text ${props.complete && 'Todo_Item--Text-complete'}`}>{props.text}</p>

              <span className="Todo_Item--close" onClick={onDelete}><i className="fas fa-times-circle"></i></span>
            </li>

    );
}

export {Todoitem};