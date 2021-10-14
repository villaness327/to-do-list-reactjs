import React from 'react';
import { Todotitle } from '../Todotitle';
import { Todocounter } from '../Todocounter';
import { Todosearch } from '../Todosearch';
import { Todolist } from '../Todolist';
import { Todoitem } from '../Todoitem';
import { Createtodobutton } from '../Createtodobutton';
import { Todofooter } from '../Todofooter';

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



    //Maquetacion UI
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
                                onComplete={()=>completeTodo(todo.text)}//Se envia la funcion como props
                                onDelete={()=>deleteTodo(todo.text)}/>
                             
                                )
                      )}
                        
                  </Todolist>

                  <Createtodobutton/>

                  <Todofooter/>
              </React.Fragment>  
        );

}

export default App;
