import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import './index.css';



ReactDOM.render(
    <App />,
// Se agrega una etiqueta de cierre al componente, esto permite recibir elementos como props.children
  document.getElementById('root')
);

