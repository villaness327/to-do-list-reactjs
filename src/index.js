import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/index.js';
import './index.css';



// Se agrega una etiqueta de cierre al componente, esto permite recibir elementos como props.children
ReactDOM.render(
    <App />,
  document.getElementById('root'),
);

