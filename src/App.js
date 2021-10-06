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

     const completeTodos=(text)=>{

       const todoIndex=todos.findIndex(todo=>todo.text===text);
       //Se encuentra el index dentro del array todos, segun el texto recibido

       const newTodos=[...todos];//Se copia el orginal

       newTodos[todoIndex].complete=!newTodos[todoIndex].complete;
       //El valor de complete, va a cambiar siempre al estado contrario, cada vez que 
       //se ejecuta la funcion

       setTodos(newTodos);//se llama a la funcion modificador del estado

    };

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
                      //Por cada elemento del arreglo             

                                <Todoitem
                                key={todo.text}    //Se envia el key
                                text={todo.text}   //Se envia texto
                                complete={todo.complete} //estado completado true o false
                                onComplete={()=>completeTodos(todo.text)}/>//Se envia la funcion como props
                            )
                      )}
                        
                  </Todolist>

                  <Createtodobutton/>

                  <Todofooter/>
              </React.Fragment>  
        );

}

export default App;
