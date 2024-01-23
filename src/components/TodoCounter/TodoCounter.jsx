const estilos = {
  fontSize : 24,
  textAlign: 'center',
  margin: 0,
  padding: '48px'
}


function TodoCounter({total, completed}){
    return(
    <h1 style={estilos}>
      Has completado {completed} de {total} 
       to do's</h1>
  );
    }
  export default TodoCounter;