import React from 'react'
import { Todo } from '../model'
import TodoTask from './TodoTask';

interface Props {
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
function TodoList({ todos, setTodos } : Props) {
  return (
    <div className='list'>
        <div className='active-list'> 
           <span className='active'>Aktive Aufgaben</span>
            { 
                todos.map(todo => ( !todo.isDone ? 
    //<li>{todo.name}</li>
                 <TodoTask todo={todo} key={todo.id} todos={todos} setTodos={setTodos} /> : null
                ))
            }
        </div>

        <div className='done-list'>
        <span className='done'>Erledigte Aufgaben</span>
            {
                todos.map(todo => ( todo.isDone ?
    //<li>{todo.name}</li>
                 <TodoTask todo={todo} key={todo.id} todos={todos} setTodos={setTodos} /> : null
                ))
            }

        </div>
    </div>


  )
}

export default TodoList