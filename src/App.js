import { useState } from 'react'
import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
// import data from './data'

function App() {
  const [todos, setTodos] = useState([])
  const [todoText, setTodoText] = useState('')

  const handleAddTodo = (event) => {
    event.preventDefault()
    const newTodo = {
      text: todoText,
      date: new Date().toLocaleString(),
      complete: false
    }
    setTodos([...todos, newTodo])
    setTodoText('')
  }

  const handleInputText =(event) => {
    setTodoText(event.target.value)
  }
  if(todos.length === 0) {
    return (
      <div className="App">
      <header className="App-header">
      <h1>Todo App</h1>
        <h3>You do not have todos yet</h3>
        <p>Add your first to do for today</p>
        <AddTodo handleAddTodo={handleAddTodo} handleInputText={handleInputText} todoText={todoText}/>
        </header>
    </div>
    )

  }

  return (
    <div className="App">
      <header className="App-header">
      <h1>Todo App</h1>
      <AddTodo handleAddTodo={handleAddTodo} handleInputText={handleInputText} todoText={todoText}/>
        <TodoList todos={todos}/>
      </header>
    </div>
  );
}

export default App;
