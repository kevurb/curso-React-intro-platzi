import TodoButton from '../TodoButton/index'
import TodoCounter from '../TodoCounter/TodoCounter';
import TodoList from '../TodoList';
import TodoSearch from '../TodoSearch/TodoSearch';
import React from 'react';
import TodoItem from '../TodoItem';

function AppUI({
  loading,
  error,
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
}) {
  return (
    <>
      <TodoCounter
        completed={completedTodos}
        total={totalTodos} 
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList> 
        {loading && <p>Estamos Cargando</p>}
        {error && <p>ocurrio un error</p>}
        {(!loading && searchedTodos < 0 ) &&<p>CREA TU PRIMER TODO</p>}
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      
      <TodoButton />
    </>
  );
}

export { AppUI };