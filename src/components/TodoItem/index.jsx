import './TodoItem.css'

function TodoItem(props){

    return (
      <div>
          <li className="item">
             <span>V
             </span>
                <p>{props.text}
                </p>
             
             <span>X </span>
          </li>
      </div>
    );
  }
  export default TodoItem;