import React from 'react';
//import './App.css';

const todos=[
//Listado de tareas hardcodeados
  {text:"Lavar auto",completed:false},
  {text:"Cortar el pelo",completed:false},
  {text:"Preparar almuerzo",completed:false},
  {text:"Jugar Tennis",completed:false},

];


function App() {
  //React.Fragment:cada componente tiene que devolver el contenido en una etiqueta contenedora
  return (
  <React.Fragment>

    <TodoCounter />
    <TodoSearch />

      <TodoList>

         {todos.map(todo=>(
          //Por cada elemento del arreglo se renderida un componente 

                  <TodoItem />
              )
         )}
          
      </TodoList>

     <CreateTodoButton/>

     <button>+</button>

  </React.Fragment>  
  );
}


export default App;


//Este es el componente PADRE de la Aplicacion