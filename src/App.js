
import TodoButton from './components/TodoButton';
import TodoCounter from './components/TodoCounter/TodoCounter';
import TodoList from './components/TodoList';
import TodoSearch from './components/TodoSearch/TodoSearch';
import React from 'react';
import TodoItem from './components/TodoItem';
import { useState } from 'react';

const defaultTodos = [
  {text: 'Cortar cosas', completed: true},
  {text: 'Cortar queso', completed: false},
  {text: 'pasar QUESO', completed: false},
  {text: 'comer todos los sabores de pizza', completed: true},
];


function App() {
  const [searchValue, setSerchValue] = React.useState('');
  const [todos, setTodos]= React.useState(defaultTodos);
  //console.log(searchValue)
  const completedTodos = defaultTodos.filter(todo => !!todo.completed).length;
  const totalTodos= todos.length;

  const serachedTodos  = todos.filter(
          (e)=>{
            const todoText= e.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            //console.log('los usuarios ', searchValue)
            
            return todoText.includes(searchText)});
  const completeTodo =(text) =>{ 
    const newTodos = [...todos];
    const tdIndex = newTodos.findIndex((todo)=> todo.text== text);
    newTodos[tdIndex].completed = true;
    setTodos(newTodos);
  }
  const deleteTodo = (text)=>{
    const newTodos = [...todos];
    const tdIndexDel = newTodos.findIndex((todo)=> todo.text== text);
    newTodos.splice(tdIndexDel,1);
    setTodos(newTodos);
  }

  return (
        <>
          <TodoCounter 
          completed={completedTodos} 
          total={totalTodos}/>
          <TodoSearch 
          searchValue={searchValue}
          setSerchValue = {setSerchValue}
          />
          <TodoList>
            {serachedTodos.map( todo => (
            <TodoItem 
                  key={todo.text} 
                  text={todo.text}
                  completed = {todo.completed}
                  onComplete = {()=>completeTodo(todo.text)}
                  onDelete = {()=>deleteTodo(todo.text)}
              />)              
            )}
          </TodoList>
          <TodoButton/>
        </>
          );
}
export default App;







