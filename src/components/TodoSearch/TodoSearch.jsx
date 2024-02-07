import "./TodoSearch.css";
import React from "react";



function TodoSearch({searchValue,setSerchValue}){
    
    return(
        
        <input className="TodoSearch" 
        placeholder="Aprender Python"
        value={searchValue}
        onChange={(e)=>{
            setSerchValue(e.target.value);
        }}/>
        
    );
  }
  export default TodoSearch;