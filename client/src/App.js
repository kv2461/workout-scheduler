import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import TodoForm from "./Components/TodoForm"
import TodoList from "./Components/TodoList"
import './App.css';

function App() {

  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([todo,...todos]);
  }


  return (
    <div className="App">
      <header className='App-header'>
        <p>React Todo</p>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} />
      </header>
    </div>
  );
}

export default App;
