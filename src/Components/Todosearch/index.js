import React from 'react';
import {TodoContext} from '../TodoContext';
import './Todosearch.css';





function Todosearch(){   
   
       const {searchValue,setSearchValue}=React.useContext(TodoContext);

        const onChange=(event)=>{

          console.log(event.target.value) ;
          setSearchValue(event.target.value);
          //Se llama a la funcion modificadora del estado
        };

        return(      
          <div className="SearchContainer">
          <input value={searchValue} className="Todosearch" placeholder="Busque una Tarea..." onChange={onChange}></input>
          </div>

        ); 

               
}

export {Todosearch};

