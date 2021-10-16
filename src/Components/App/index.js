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


//Custom React Hook para localStorage

function useLocalStorage(itemName,initialValue){

      //Rescate de datos desde localstorage

      const localStorageItem=localStorage.getItem(itemName);

      let parsedItem;

      if(!localStorageItem){
        
        localStorage.setItem(itemName,JSON.stringify(initialValue));  //Actualizacion Estado, se crea el item con valor inicial default
        parsedItem=initialValue; // Actualizacion Data App 

      }else{
    
        parsedItem=JSON.parse(localStorageItem); //Datos almacenados, se convierte de string a JS

      }

      const[item,setItem]=React.useState(parsedItem);


      //Persistencia de datos en localstorage y estado
      const saveItem=(newItem)=>{
        const stringfied=JSON.stringify(newItem); //Array convertido a string
        localStorage.setItem(itemName,stringfied); //Persistencia datos en localstorage
        setItem(newItem); //Actualizacion de estado
      }


    return [item,saveItem];

}


//Logica de la Aplicacion

function App() {

  //Llamada al custom react hook
  const [todos, saveTodos]=useLocalStorage('TODOS_V1',[]); 
  //array[0]:estado
  //array[1]:funcion que guarda los datos(en localstorage y estado)


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
