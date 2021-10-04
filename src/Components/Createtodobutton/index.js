import React from 'react';
import './Createtodobutton.css';


function Createtodobutton(){

      const ButtonClick=(msg)=>{

       alert(msg);

      }


    return(  
            <button className="TodoButton" onClick={   
                //Se envuelve en una arrow function  

                     ()=>{ ButtonClick('Aca se abre un modal')}            
            }
            
            >+</button>
    
    );
}

export {Createtodobutton};