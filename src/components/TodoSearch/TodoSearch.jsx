import "./TodoSearch.css";
import React from "react";
import { useState } from "react";


function TodoSearch({searchValue,setSerchValue}){
    
    return(
        
        <input className="barra_input" 
        placeholder="Aprender Python"
        value={searchValue}
        onChange={(e)=>{
            setSerchValue(e.target.value);
        }}/>
        
    );
  }
  export default TodoSearch;