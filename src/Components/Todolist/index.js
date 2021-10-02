import React from 'react';
import './Todolist.css';


function Todolist(props){

    return(

                <section>
                    <ul>

                    {props.children}

                    </ul>

                </section>
    );
}


export {Todolist};