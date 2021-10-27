import React from 'react';
import {Todoicon} from './';

function CompleteIcon({completed,onComplete}){

    return(
      
      <Todoicon
          type="check"
          color={completed ? '#4caf50' : 'red'}
          onClick={onComplete}
      />


    );  
}

export {CompleteIcon};