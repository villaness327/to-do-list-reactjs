import React from 'react';
import './Createtodobutton.css';
import {TodoContext} from '../TodoContext';

function Createtodobutton(){

     const {setOpenModal}=React.useContext(TodoContext);

     const modalActivation=()=>{

           setOpenModal(prevState=>!prevState);
          //Negacion del estado anterior

     }
   
    return(  
            <button className="TodoButton" onClick={modalActivation}
            
            >+</button>
    
    );
}

export {Createtodobutton};