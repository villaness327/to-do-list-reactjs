import React from 'react';
import './Todosearch.css';

function Todosearch(){

       const [search,setSearch]=React.useState('Juan');
       //React hook

        const onChange=(event)=>{

          console.log(event.target.value) ;
          setSearch(event.target.value);
          //Se llama a la funcion modificadora del estado

        }

        return(      
                <div className="SearchContainer">
                   <input value={search}className="Todosearch" placeholder="Busque una Tarea..." onChange={onChange}></input>
                   <p>{search}</p>               
                </div>
        );
}
export {Todosearch};
