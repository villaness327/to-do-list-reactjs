import React from 'react';
import './Todoform.css';
import {TodoContext} from '../TodoContext';


function Todoform(){

      const{addTodo}=React.useContext(TodoContext);



    const onSubmit=()=>{


    }

    const onCancel=()=>{

    }

    return(


        <form onSubmit={onSubmit}>
            <label></label>
            <textarea placeholder="Ingrese su tarea..." />
            <div>

                <button type="submit">Añadir</button>
                <button onClick={onCancel} type="button">Cancelar</button>

            </div>
        </form>
    );
}

export {Todoform};