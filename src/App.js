import React from 'react';
import { Todotitle } from './Components/Todotitle';
import { Todocounter } from './Components/Todocounter';
import { Todosearch } from './Components/Todosearch';
import { Todolist } from './Components/Todolist';
import { Todoitem } from './Components/Todoitem';
import { Createtodobutton } from './Components/Createtodobutton';
import { Todofooter } from './Components/Todofooter';

//import './App.css';

const defaultTodos=[
  {text:'Estudiar Ingles',complete:true},
  {text: 'Pasear Perro',complete:true},
  {text:'Comprar Pan',complete:true},
  {text:'Cortarme el pelo',complete:true},
  {text:'Ir al supermercado',complete:true},
  {text:'Lavar Auto',complete:true},
  {text: 'Andar en bicicleta',complete:true},
  {text:'salir a correr',complete:true},
  {text:'Tomar un curso online',complete:true},
  {text:'Leer un libro, y sacar a pasear al perro',complete:true}
];


function App() {
  //React.Fragment:cada componente tiene que devolver el contenido en una etiqueta contenedora
  
  const[todos,setTodos]=React.useState(defaultTodos);
  const [searchValue,setSearchValue]=React.useState('');
  //React hook

  const completedTodos=todos.filter(todo=>todo.complete===true).length;
  const totalTodos=todos.length;

  let searchedTodos=[];

  if(!searchValue>=1){

        searchedTodos=todos;//Arreglo por defecto del estado

      }else{

        searchedTodos=todos.filter(todo=>{

          const searchText=searchValue.toLowerCase();
          const todoText=todo.text.toLowerCase();

          return todoText.includes(searchText);

      });
  }    
  
  return (
              
              <React.Fragment>

                  <Todotitle/>

                  <Todocounter
                  completedTodos={completedTodos}
                  totalTodos={totalTodos}    //Se envian las cantidades             
                  />

                  <Todosearch                  
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}   //Se envia el estado              
                  />
                  
                  <Todolist>

                      {searchedTodos.map(todo=>(              

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
