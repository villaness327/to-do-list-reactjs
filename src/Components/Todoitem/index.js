import React from 'react';
import './Todoitem.css';

function Todoitem(props){
 

  //Si se envia algun parametro en la funcion, es necesario envolverlo en una arrow function
    return(
            <li className="Todo_Item">

              <span className={`Todo_Item--Check ${props.complete && 'Check_Complete'}`} onClick={props.onComplete}>&#9745;</span>

              <p className={`Todo_Item--Text ${props.complete && 'Text_Complete'}`}>{props.text}</p>

              <span className="Todo_Item--Close" onClick={props.onDelete}><i className="fas fa-times-circle"></i></span>
            </li>

    );
}

export {Todoitem};