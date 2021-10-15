import React from 'react';
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


//Logica de la Aplicacions

function App() {

  const localStorageTodos=localStorage.getItem('TODOS_V1');

  let parsedTodos;

    if(!localStorageTodos){
      
      localStorage.setItem('TODOS_V1',JSON.stringify([]));  //Actualizacion Estado, array vacio default
      parsedTodos=[]; // Actualizacion Data App 

    }else{
   
      parsedTodos=JSON.parse(localStorageTodos); //Datos almacenados, se convierte de string a JS

    }



  const[todos,setTodos]=React.useState(parsedTodos);

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
           //Filtro de acuerdo a lo ingresado por usuario
      });
  }    


     const saveTodos=(newTodos)=>{

        const stringfied=JSON.stringify(newTodos); //Array convertido a string
        localStorage.setItem('TODOS_V1',stringfied); //Persistencia datos en localstorage
        setTodos(newTodos); //Actualizacion de estado

     }





     const completeTodo=(text)=>{

       const todoIndex=todos.findIndex(todo=>todo.text===text);
       //Se encuentra el index dentro del array todos, segun el texto recibido

       const newTodos=[...todos];//Se copia el orginal

       newTodos[todoIndex].complete=!newTodos[todoIndex].complete;
       //El valor de complete, va a cambiar siempre al estado contrario, cada vez que 
       //se ejecuta la funcion

      saveTodos(newTodos);//se llama a la funcion modificador del estado

    };


    const deleteTodo=(text)=>{

        const todoIndex=todos.findIndex(todo=>todo.text===text);
         //Se encuentra el index dentro del array todos, segun el texto recibido

        const newTodos=[...todos];
        console.log(newTodos[todoIndex]);

        newTodos.splice(todoIndex,1);
        //Se elimina el elemento del arreglo

       saveTodos(newTodos);
    }


//Retorna el componente que contiene la maquetacion UI,y se envian props
  return (
           
          <AppUI

                completedTodos={completedTodos}
                totalTodos={totalTodos}
                setSearchValue={setSearchValue}
                searchValue={searchValue}
                searchedTodos={searchedTodos}
                completeTodo={completeTodo}
                deleteTodo={deleteTodo}
              
          />
          
        );

}

export default App;
