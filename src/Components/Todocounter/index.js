import React from 'react';
import './Todocounter.css';


function Todocounter(props){
    
    return(

    <p className="Todocounter">Haz completado {props.completedTodos} de {props.totalTodos} Tareas</p>
    
    );

}


export {Todocounter};