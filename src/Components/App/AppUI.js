import React from 'react';
import  {TodoContext}  from '../TodoContext';
import { Todotitle } from '../Todotitle';
import { Todocounter } from '../Todocounter';
import { Todosearch } from '../Todosearch';
import { Todolist } from '../Todolist';
import { Todoitem } from '../Todoitem';
import { Createtodobutton } from '../Createtodobutton';
import { Todofooter } from '../Todofooter';
import { Createtodo } from '../Createtodo';
import {Error} from '../Error';
import {Loading} from '../Loading';



function AppUI(){
    
    //Maquetacion UI
    //React.Fragment:Un componente tiene que devolver el contenido en una etiqueta contenedora, que 
    //envuelva los componentes del return
    return(
        <React.Fragment>

        <Todotitle />

        <Todocounter />

        <Todosearch />       
        

          <TodoContext.Consumer>
          {({loading,error,searchedTodos,completeTodo,deleteTodo})=>(

                        <Todolist>

                            {/*Estados*/}
                            {loading && <Loading />}
                            {error && <Error />}
                            {(!loading && !searchedTodos.length) && <Createtodo/>}

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
                        
                                      
 
          )}

          </TodoContext.Consumer>   
       

        <Createtodobutton/>

        <Todofooter/>
    </React.Fragment>  
    );

}

export {AppUI}