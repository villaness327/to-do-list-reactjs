import React from 'react';
import './Createtodobutton.css';


function Createtodobutton(props){

     const modalActivation=()=>{

          props.setOpenModal(prevState=>!prevState);
          //Negacion del estado anterior

     }
   
    return(  
            <button className="TodoButton" onClick={modalActivation}
            
            >+</button>
    
    );
}

export {Createtodobutton};