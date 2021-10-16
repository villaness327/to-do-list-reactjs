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
      
      
      const[item,setItem]=React.useState(initialValue); 
      const[loading,setLoading]=React.useState(true);
      const[error,setError]=React.useState(false);
        
      React.useEffect(()=>{
        //Bloque de codigo que se ejecuta de manera automatica
        //Use effect se ejecuta solo una vez, si se cumple condicion 
        //En la carga del Localstorage se hace 
        //Simulacion a un fetch Api, se genera un tiempo de consulta   
              
          setTimeout(() => {

              try{

                    const localStorageItem=localStorage.getItem(itemName);

                    let parsedItem;
                  
                    if(!localStorageItem){
                          
                      localStorage.setItem(itemName,JSON.stringify(initialValue));  //Actualizacion Estado, se crea el item con valor inicial default
                      parsedItem=initialValue; // Actualizacion Data App 
                  
                    }else{

                        parsedItem=JSON.parse(localStorageItem); //Datos almacenados, se convierte de string a JS
                  
                    }
                  
                    setItem(parsedItem);

                    setLoading(false);  
               
                  }catch(error){
                    setError(error);

                }       
                    
           }, 2000);      
      });     

        //Persistencia de datos en localstorage y estado
        const saveItem=(newItem)=>{

           try{
            const stringfied=JSON.stringify(newItem); //Array convertido a string
            localStorage.setItem(itemName,stringfied); //Persistencia datos en localstorage
            setItem(newItem); //Actualizacion de estado

           }catch(error){

            setError(error);

           }       
        }
         /*
         Cuando se hace un return de mas de dos estados, se debe usar objeto
         return [item,saveItem, loading,error];*/
          
         return {
           item,
           saveItem, 
           loading,
           error
          };
}


//Logica de la Aplicacion

function App() {

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
                loading={loading}   
                error={error}         
          />
  );
}

export default App;
