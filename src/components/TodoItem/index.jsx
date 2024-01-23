import './TodoItem.css'

function TodoItem(props){

    return (
      <div>
          <li className="lista">
             <span> V 
                <p>{props.text}
                </p>
             </span>
             <span>X </span>
          </li>
      </div>
    );
  }
  export default TodoItem;