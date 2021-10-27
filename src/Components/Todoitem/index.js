import React from 'react';
import { CompleteIcon } from '../Todoicon/CompleteIcon';

import './Todoitem.css';

function Todoitem(props){
 

  //Si se envia algun parametro en la funcion, es necesario envolverlo en una arrow function
 //El componente <CompleteIcon /> es la funcion que envuelve el componente TodoIcon, y al cual
 //se le envian las props, y este a su vez se las envia al componente TodoIcon
    return(
            <li className="Todo_Item">
                  
              <CompleteIcon                 
                completed={props.completed}
                onComplete={props.onComplete}              
              /> 
              <p className={`Todo_Item--Text ${props.completed && 'Text_Complete'}`}>{props.text}</p>
              <span className="Todo_Item--Close" onClick={props.onDelete}><i className="fas fa-times-circle"></i></span>
            </li>

    );
}

export {Todoitem};