import React from 'react';
import { TodoContext }  from '../TodoContext';
import { Todotitle } from '../Todotitle';
import { Todocounter } from '../Todocounter';
import { Todosearch } from '../Todosearch';
import { Todolist } from '../Todolist';
import { Todoitem } from '../Todoitem';
import { Createtodobutton } from '../Createtodobutton';
import { Todofooter } from '../Todofooter';
import { Createtodo } from '../Createtodo';
import { Error } from '../Error';
import { Loading } from '../Loading';
import { Modal } from '../Modal';
import { Todoform } from '../Todoform';
import { Appbutton } from '../Appbutton';
import { Modalapp } from '../Modalapp';
import { Autorbutton } from '../Autorbutton';
import { Modalautor } from '../Modalautor';
 


function AppUI(){
    
    //React hook de usecontext
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,     
        openModalApp,
        openModalAutor,
                            
        
    }=React.useContext(TodoContext);

    //Maquetacion UI
    //React.Fragment:Un componente tiene que devolver el contenido en una etiqueta contenedora, que 
    //envuelva los componentes del return
    return(
        <React.Fragment>

        <Todotitle />

        <Todocounter />

        <Todosearch />   

                <Todolist>
            
                    {loading && <Loading />}
                    {error && <Error />}
                    {(!loading && !searchedTodos.length) && <Createtodo/>}

                    {searchedTodos.map(todo=>( 
                    //Por cada elemento del arreglo             
                            
                    <Todoitem
                        key={todo.text}    //Se envia el key
                        text={todo.text}   //Se envia texto
                        completed={todo.completed} //estado completado true o false
                        onComplete={()=>completeTodo(todo.text)}//Se envia la funcion como props
                        onDelete={()=>deleteTodo(todo.text)}/>                                
                        )
                    )}
                                    
                </Todolist>             
                             
          {(!!openModal && <Modal><Todoform/></Modal>) || 
          (!!openModalApp && <Modal><Modalapp/></Modal>) ||
          (!!openModalAutor && <Modal><Modalautor/></Modal>)}
             
          {(!openModalApp && <Createtodobutton />) && (!openModalAutor && <Createtodobutton />)}
       
            <Todofooter>
                  <Appbutton /> 
                  <Autorbutton />                     
            </Todofooter>

    </React.Fragment>  
    );
}

export {AppUI}