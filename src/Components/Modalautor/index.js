import React from 'react';
import './modalautor.css';
import{ TodoContext } from '../TodoContext';

function Modalautor(){

    const{setOpenModalAutor}=React.useContext(TodoContext);

    const close=()=>{


        setOpenModalAutor(false);

    }

    return(
       <React.Fragment>

            <div className="modalautor">     
                <h2>Víctor Illanes</h2>
                <p>Front End Developer</p>
                <p>React.JS | JavaScript | HTML | CSS</p> 
            </div> 
            <button className="closebutton" type="button" onClick={close}>Cerrar</button> 

      </React.Fragment>
    );
}

export { Modalautor };