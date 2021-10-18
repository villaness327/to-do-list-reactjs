import React from 'react';
import './Todoform.css';
import {TodoContext} from '../TodoContext';


function Todoform(){

      const{addTodo,setOpenModal}=React.useContext(TodoContext);//Funcion que agrega un todo
      const[valueTextArea,setTextArea]=React.useState('');//Estado del valor de textarea


    const onChange=(event)=>{

       setTextArea(event.target.value);//Todo lo que escriba lo envia la funcion modificadora
    
    }  


    const onSubmit=(event)=>{
     event.preventDefault(); //Se cancela el envio del formulario

        addTodo(valueTextArea);//Se llama a la funcion que agrega el todo
        setOpenModal(false);
    }

    const onCancel=()=>{

        setOpenModal(false);

    }

    return(

        <form onSubmit={onSubmit}>
            <label>Ingrese su Tarea</label>
            <textarea placeholder="Ingrese su tarea acá..." onChange={onChange} value={valueTextArea} />
            <div className="buttonForm">
                <button onClick={onCancel} type="button">Cancelar</button>
                <button type="submit">Añadir</button>                
            </div>
        </form>
    );
}

export {Todoform};