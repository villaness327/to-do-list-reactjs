import React from 'react';
import './Todosearch.css';
//import {TodoContext} from '../TodoContext';

//const{searchValue,setSearchValue}=React.useContext(TodoContext);


function Todosearch({searchValue,setSearchValue}){   

        const onChange=(event)=>{

          console.log(event.target.value) ;
          setSearchValue(event.target.value);
          //Se llama a la funcion modificadora del estado
        }

        return(      
                <div className="SearchContainer">
                   <input value={searchValue} className="Todosearch" placeholder="Busque una Tarea..." onChange={onChange}></input>
                </div>
        );
}

export {Todosearch};
