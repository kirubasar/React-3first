  import Todo from "./components/Todo";
  const App = () => {
    const todos = [
      {id: 1, title: 'Buy milk', completed: false},
      {id: 2, title: 'Buy bread', completed: true},
      {id: 3, title: 'Buy butterr', completed: false}
    ]
 
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
          {
            todos.map(todo => 
              <Todo 
              key={todo.id}
              todo={todo}
              />
            )
          }
      </ul>
    </div>
  
   
  )
}
  
export default App;