import React from 'react';
import './Todoitem.css';

function Todoitem(props){

    return(
            <li className="Todo_Item">
              <p className="Todo_Item--Text">{props.text}</p>
              <span className="Todo_Item--close">X</span>
            </li>

    );
}

export {Todoitem};