import React from 'react';
import './Todoitem.css';

function Todoitem(props){

    return(
            <li className="Todo_Item">
              <span className="Todo_Item--check"><i className={`fas fa-check-circle ${props.complete && 'check-complete'}`}></i></span>

              <p className={`Todo_Item--Text ${props.complete && 'Todo_Item--Text-complete'}`}>{props.text}</p>

              <span className="Todo_Item--close"><i className="fas fa-times-circle"></i></span>
            </li>

    );
}

export {Todoitem};