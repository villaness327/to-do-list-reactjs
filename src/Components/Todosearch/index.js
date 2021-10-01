import React from 'react';
import './Todosearch.css';



function Todosearch(){

        return(
       <React.Fragment>

                <div className="SearchContainer">
                   <input className="Todosearch" placeholder="Ingrese Tarea"></input>
                </div>
       
       </React.Fragment>
        );
}

export {Todosearch};
