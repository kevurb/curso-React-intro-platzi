import "./TodoSearch.css";
import React from "react";



function TodoSearch({searchValue,setSearchValue}){
    
    return(
        
        <input className="TodoSearch" 
        placeholder="Aprender Python"
        value={searchValue}
        onChange={(e)=>{
            setSearchValue(e.target.value);
        }}/>
        
    );
  }
  export default TodoSearch;