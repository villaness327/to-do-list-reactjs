import React from 'react';
import './Todocounter.css';
import {TodoContext} from '../TodoContext';

function Todocounter(){
    const{totalTodos,completedTodos}=React.useContext(TodoContext);
    
    return(

    <p className="Todocounter">Haz completado {completedTodos} de {totalTodos} Tareas</p>
    
    );

}


export {Todocounter};