import React from 'react';
import { AppUI } from './AppUI';

//import './App.css';

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
];


//Logica de la Aplicacion

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
           //Filtro de acuerdo a lo ingresado por usuario
      });
  }    

     const completeTodo=(text)=>{

       const todoIndex=todos.findIndex(todo=>todo.text===text);
       //Se encuentra el index dentro del array todos, segun el texto recibido

       const newTodos=[...todos];//Se copia el orginal

       newTodos[todoIndex].complete=!newTodos[todoIndex].complete;
       //El valor de complete, va a cambiar siempre al estado contrario, cada vez que 
       //se ejecuta la funcion

       setTodos(newTodos);//se llama a la funcion modificador del estado

    };


    const deleteTodo=(text)=>{

        const todoIndex=todos.findIndex(todo=>todo.text===text);
         //Se encuentra el index dentro del array todos, segun el texto recibido

        const newTodos=[...todos];
        console.log(newTodos[todoIndex]);

        newTodos.splice(todoIndex,1);
        //Se elimina el elemento del arreglo

        setTodos(newTodos);
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
