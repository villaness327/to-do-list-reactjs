import React from 'react';
import { Todotitle } from '../Todotitle';
import { Todocounter } from '../Todocounter';
import { Todosearch } from '../Todosearch';
import { Todolist } from '../Todolist';
import { Todoitem } from '../Todoitem';
import { Createtodobutton } from '../Createtodobutton';
import { Todofooter } from '../Todofooter';


function AppUI({
 //Se reciben las props desde el componente App
    completedTodos,
    totalTodos,
    setSearchValue,
    searchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,

}){
    
    //Maquetacion UI
    //React.Fragment:cada componente tiene que devolver el contenido en una etiqueta contenedora
    return(
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

export {AppUI}