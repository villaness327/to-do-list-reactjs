import React from 'react';
import  {TodoProvider}  from '../TodoContext';
import { AppUI } from './AppUI';


//import './App.css';

/*
const defaultTodos=[
  {text:'Estudiar Ingles',complete:false},
  {text: 'Pasear Perro',complete:true},
  {text:'Comprar Pan',complete:true},
  {text:'Cortarme el pelo',complete:true},
  {text:'Ir al supermercado',complete:false},
  {text:'Lavar Auto',complete:true},
  {text: 'Andar en bicicleta',complete:true},
  {text:'salir a correr',complete:true},
  {text:'Tomar un curso online',complete:true},
  {text:'Leer un libro, y sacar a pasear al perro',complete:true}
];*/

//Logica de la Aplicacion

function App() {

    //Retorna el componente que contiene la maquetacion UI
      return (   
        
        <TodoProvider>

              <AppUI />

        </TodoProvider>     
      );
}

export default App;
