import React from 'react';
import {TodoContext} from '../TodoContext';


function Appbutton(){

   const{setOpenModalApp}=React.useContext(TodoContext);

   
   const modalAppActive=()=>{  

      setOpenModalApp(true);
   }
 

   return(

      <button type="button" onClick={modalAppActive}>Acerca de la App</button>
   );

}

export {Appbutton};