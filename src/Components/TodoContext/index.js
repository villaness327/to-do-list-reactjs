import React from 'react';
import {useLocalStorage} from './useLocalStorage';

const TodoContext=React.createContext(); //Se crea el contexto

function TodoProvider(props){

  
  //Llamada al custom react hook
  const {item:todos,saveItem:saveTodos,loading,error}=useLocalStorage('TODOS_V1',[]); 
  //todos:estado
  //saveTodos:funcion que guarda los datos(en localstorage y estado)
  //loading:estado
  //error:estado

  const [searchValue,setSearchValue]=React.useState('');
  //React hook de estado

  const[openModal,setOpenModal]=React.useState(false);
   //React hook de estado para modal formulario

   const[openModalApp,setOpenModalApp]=React.useState(false);
  //React hook de estado para modal app
   
  const [openModalAutor, setOpenModalAutor]=React.useState(false);
  //React hook de estado para modal autor
   
  const completedTodos=todos.filter(todo=>todo.completed===true).length;
  const totalTodos=todos.length;

  let searchedTodos=[];

  if(!searchValue>=1){

        searchedTodos=todos;
        //Arreglo que tenga almacenado el estado

      }else{   

        //Filtro de acuerdo a lo ingresado por usuario
        searchedTodos=todos.filter(todo=>{

        const searchText=searchValue.toLowerCase();
        const todoText=todo.text.toLowerCase();

          return todoText.includes(searchText);
         
      });
  }    


    const addTodo=(text)=>{

          const newTodos=[...todos];

          newTodos.push({
            text:text,
            completed:false,
          });

          saveTodos(newTodos);
    }




    const completeTodo=(text)=>{

       const todoIndex=todos.findIndex(todo=>todo.text===text);
       //Se encuentra el index dentro del array todos, segun el texto recibido

       const newTodos=[...todos];//Se copia el array del estado orginal

       newTodos[todoIndex].completed=!newTodos[todoIndex].completed;
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
        //value es un objeto, envuelve todos los estados y variables que se compartiran en el contexto
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
              openModal,
              setOpenModal,
              addTodo,
              openModalApp,                   
              setOpenModalApp,
              openModalAutor,
              setOpenModalAutor,
          }}>

            {props.children}  
            {/*Aqui se almacena el componente AppUI*/}

        </TodoContext.Provider>
    );
}


export { TodoContext, TodoProvider };