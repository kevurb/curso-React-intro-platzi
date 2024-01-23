
import TodoButton from './components/TodoButton';
import TodoCounter from './components/TodoCounter/TodoCounter';
import TodoList from './components/TodoList';
import TodoSearch from './components/TodoSearch/TodoSearch';
import React from 'react';
import TodoItem from './components/TodoItem';

const defaultTodos = [
  {text: 'Cortar cosas', completed: true},
  {text: 'Cortar queso', completed: false},
  {text: 'pasar ingles', completed: true},
  {text: 'comer todos los sabores de pizza', completed: true},
];


function App() {
  return (
        <>
          <TodoCounter completed={16} total={25}/>
          <TodoSearch/>
          <TodoList>
            {defaultTodos.map( todo => (
            <TodoItem 
                  key={todo.text} 
                  text={todo.text}
                  completed = {todo.completed}
              />)              
            )}
          </TodoList>
          <TodoButton/>
        </>
          );
}
export default App;







