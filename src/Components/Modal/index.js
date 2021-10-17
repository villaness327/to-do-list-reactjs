import React from 'react';
import ReactDom from 'react-dom';
import './modal.css';

function Modal({children}){

    return ReactDom.createPortal(
        <div className="modalBg">
            children
        </div>,
        document.getElementById('modal')//Nodo HTML donde se renderiza
    );
}

export {Modal};