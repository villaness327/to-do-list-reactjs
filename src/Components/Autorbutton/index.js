import React from 'react';
import {TodoContext} from '../TodoContext';


function Autorbutton(){
  const{setOpenModalAutor}=React.useContext(TodoContext); 
  
  
  const modalAutorActive=()=>{

        setOpenModalAutor(true);

  }

    return(
       <button type="button" onClick={modalAutorActive}>Acerca de Autor</button>

    );
}

export{Autorbutton};