import React from 'react';

//Custom React Hook para localStorage

function useLocalStorage(itemName,initialValue){
    //Rescate de datos desde localstorage
    
    const[error,setError]=React.useState(false);
    const[loading,setLoading]=React.useState(true);
    const[item,setItem]=React.useState(initialValue); 
  
    
      
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
                        
                    localStorage.setItem(itemName,JSON.stringify(initialValue)); 
                    //Se crea el eatado en localstorage,  con valor inicial default
                   
                    parsedItem=initialValue; // Actualizacion Data App 
                
                  }else{

                      parsedItem=JSON.parse(localStorageItem); 
                    //Si ya hay datos almacenados, se convierten de string a JS
                
                  }
                
                  setItem(parsedItem); //Se modifica el estado en Localstorage
                  setLoading(false);   // El valor estado de loading pasa a falso
             
                }catch(error){
                  setError(error);

              }       
                  
         }, 1000);      
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

export  {useLocalStorage} ;