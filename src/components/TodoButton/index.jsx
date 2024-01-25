import './TodoButton.css'
import React from 'react';
import { useState } from 'react';
function TodoButton(){
    let count=0;
    const [state, setState]= React.useState('')
    console.log(state)

    return(
        <>
        <button className="button" onClick={(e)=>{setState(count++)}}>CREAR</button>
        </>
    );
  
  }
  export default TodoButton;