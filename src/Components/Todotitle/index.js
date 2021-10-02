import React from 'react';
import './Todotitle.css';

function Todotitle(){
    return(

       <div className="header">
            <span className="header_icon"><i className="fas fa-clipboard-list"></i></span>
            <h1 className="header_title">To-Do List App v1.0</h1>
       </div>
    );

}


export {Todotitle};