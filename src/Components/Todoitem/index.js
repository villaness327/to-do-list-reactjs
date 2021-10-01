import React from 'react';
import './Todoitem.css';


function Todoitem(props){

    return(


            <li>
                <p>{props.text}</p>
            </li>

    );
}


export {Todoitem};