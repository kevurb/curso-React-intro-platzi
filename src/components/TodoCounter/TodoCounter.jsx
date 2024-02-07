import './index.css'
function TodoCounter({total, completed}){
    return(
    <h1 className="TodoCounter">
      Has completado <span>{completed}
      </span> de <span>{total}</span> to do's</h1>
  );
    }
  export default TodoCounter;