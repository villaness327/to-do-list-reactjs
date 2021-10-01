import React from 'react';
import { Todotitle } from './Components/Todotitle';
import { Todocounter } from './Components/Todocounter';
import { Todosearch } from './Components/Todosearch';
import { Todolist } from './Components/Todolist';
import { Todoitem } from './Components/Todoitem';
import { Createtodobutton } from './Components/Createtodobutton';

//import './App.css';

const todos=[
  {text:'Estudiar Ingles',completed:true},
  {text: 'Pasear Perro',completed:true},
  {text:'Comprar Pan',completed:false},
  {text:'Cortarme el pelo',completed:false},
  {text:'Ir al supermercado',completed:true}
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

                                <Todoitem key={todo.text} text={todo.text} />
                            )
                      )}
                        
                  </Todolist>

                  <Createtodobutton/>       

              </React.Fragment>  
                );
              }

export default App;

//Este es el componente PADRE de la Aplicacion