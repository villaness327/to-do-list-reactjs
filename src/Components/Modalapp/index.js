import React from "react";
import './modalapp.css';
import {TodoContext} from '../TodoContext';

function Modalapp(){

    const {setOpenModalApp}=React.useContext(TodoContext);

    const close=()=>{

        setOpenModalApp(false);

    }

   return(
    <div className="modalapp">
        <h2>Acerca de la APP</h2>
        <p>App Web desarrollada con :</p>
        <ul>
            <li>REACT.JS</li>
            <li>NODE JS</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>WEB RESPONSIVE</li>
        </ul>    

        <button type="button" onClick={close}>Cerrar</button>
    </div>
   );
}

export {Modalapp};