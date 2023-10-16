import React, { useState } from 'react';
import './App.css';
import InputTask from './components/InputTask';
import { Todo } from './model';
import TodoList from './components/TodoList';

let date: Date = new Date();  
let tasks: string[] = [""];

function App() {
  console.log(tasks);
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

 const handleTodos = (e: React.FormEvent) => {
  e.preventDefault();

  if(todo) {
    setTodos([...todos, { id: Date.now(), name: todo, isDone: false}]);
  }
  setTodo("");
};
  console.log(todos);
  return (
    <div className="app"> 
    <div className='header'>
    <h2 className='name'>Tätigkeiten</h2>
    <h3 className='date'>{date.getMonth()+1}/{date.getDate()}/{date.getFullYear()}</h3>
    </div>
    <InputTask todo={todo} setTodo={setTodo} handleTodos={handleTodos} />
    <TodoList setTodo={setTodo} todos={todos} setTodos={setTodos} /> 
    </div>
  );
}

export default App;
