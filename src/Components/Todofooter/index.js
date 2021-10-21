import React from "react";
import './Todofooter.css';


function Todofooter(props){

        return(

                <div className="footer">              
                        {props.children}
                  
                </div>

        );

}

export {Todofooter};