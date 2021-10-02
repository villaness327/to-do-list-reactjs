import React from 'react';
import { Todotitle } from './Components/Todotitle';
import { Todocounter } from './Components/Todocounter';
import { Todosearch } from './Components/Todosearch';
import { Todolist } from './Components/Todolist';
import { Todoitem } from './Components/Todoitem';
import { Createtodobutton } from './Components/Createtodobutton';
import { Todofooter } from './Components/Todofooter';

//import './App.css';

const todos=[
  {text:'Estudiar Ingles',complete:true},
  {text: 'Pasear Perro',complete:true},
  {text:'Comprar Pan',complete:false},
  {text:'Cortarme el pelo',complete:true},
  {text:'Ir al supermercado',complete:true},
  {text:'Lavar Auto',complete:true},
  {text: 'Andar en bicicleta',complete:true},
  {text:'salir a correr',complete:false},
  {text:'Tomar un curso online',complete:false},
  {text:'Leer un libro, y sacar a pasear al perro',complete:true}
];


function App() {
  //React.Fragment:cada componente tiene que devolver el contenido en una etiqueta contenedora
  return (
              
              <React.Fragment>

                  <Todotitle/>

                  <Todocounter />

                  <Todosearch />
                  
                  <Todolist>

                      {todos.map(todo=>(              

                                <Todoitem
                                key={todo.text} 
                                text={todo.text}
                                complete={todo.complete} />
                            )
                      )}
                        
                  </Todolist>

                  <Createtodobutton/>

                  <Todofooter/>
              </React.Fragment>  
                );
              }

export default App;

//Este es el componente PADRE de la Aplicacion