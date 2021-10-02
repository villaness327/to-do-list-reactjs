import React from 'react';
import './Todoitem.css';

function Todoitem(props){

    return(
            <li className="Todo_Item">
              <p className="Todo_Item--Text">{props.text}</p>
              <span className="Todo_Item--close"><i className="fas fa-times-circle"></i></span>
            </li>

    );
}

export {Todoitem};