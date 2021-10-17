import React from 'react';
import {useLocalStorage} from './useLocalStorage';

const TodoContext=React.createContext();

function TodoProvider(props){

  
  //Llamada al custom react hook
  const {item:todos,saveItem:saveTodos,loading,error}=useLocalStorage('TODOS_V1',[]); 
  //todos:estado
  //saveTodos:funcion que guarda los datos(en localstorage y estado)
  //loading:estado

  const [searchValue,setSearchValue]=React.useState('');
  //React hook

  const completedTodos=todos.filter(todo=>todo.complete===true).length;
  const totalTodos=todos.length;

  let searchedTodos=[];

  if(!searchValue>=1){

        searchedTodos=todos;
        //Arreglo por defecto del estado

      }else{   

        //Filtro de acuerdo a lo ingresado por usuario
        searchedTodos=todos.filter(todo=>{

        const searchText=searchValue.toLowerCase();
        const todoText=todo.text.toLowerCase();

          return todoText.includes(searchText);
         
      });
  }    

    const completeTodo=(text)=>{

       const todoIndex=todos.findIndex(todo=>todo.text===text);
       //Se encuentra el index dentro del array todos, segun el texto recibido

       const newTodos=[...todos];//Se copia el array del estado orginal

       newTodos[todoIndex].complete=!newTodos[todoIndex].complete;
       //El valor de complete, va a cambiar siempre al estado contrario, cada vez que 
       //se ejecuta la funcion

      saveTodos(newTodos);//se llama a la funcion modificadora del estado

    };


    const deleteTodo=(text)=>{

        const todoIndex=todos.findIndex(todo=>todo.text===text);
         //Se encuentra el index dentro del array todos, segun el texto recibido

        const newTodos=[...todos];
        console.log(newTodos[todoIndex]);

        newTodos.splice(todoIndex,1);
        //Se elimina el elemento del arreglo

       saveTodos(newTodos);//se llama a la funcion modificadora del estado
    };


    return(
        //value es un objeto
        <TodoContext.Provider value={{
          
          loading,
          error,
          totalTodos,
          completedTodos,
          searchValue,
          setSearchValue,
          searchedTodos,
          completeTodo,
          deleteTodo,
          }}>

            {props.children}

        </TodoContext.Provider>
    );
}


export { TodoContext, TodoProvider };