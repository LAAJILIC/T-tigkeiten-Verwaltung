import React, { useState } from 'react'
import { Todo } from '../model'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md'

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
 
function TodoTask({ todo, todos, setTodos }: Props) {

  const [edit, setEdit] = useState<boolean>(false);
  const [editTask, setEditTask] = useState<string>("");

  const handleDone = (id : number) =>
  {
  setTodos(todos.map(todo => todo.id === id ? {...todo, isDone: !todo.isDone} : todo))
  }

  const handleDelete = (id : number) => 
  {
  setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleSubmit = (id : number, e: React.FormEvent) => {
    e.preventDefault();
    if(editTask)
           {setTodos(todos.map(todo => todo.id === id ? {...todo, name: editTask} : todo))
           setEdit(false)}
  }
  return (     
                  <form className='box_task'  onSubmit={(e) => {
                    handleSubmit(todo.id,e)
                     }}>
                    {
                      edit ? ( 
                        <div className='update'>
                       <input className='new_task' type='input' value={editTask} placeholder='Geben Sie die Aufgabe ein' 
                       onChange={(e) => setEditTask(e.target.value)}></input>
                       <button className='validate_task' type='submit'>Weiter</button> </div>
                       ) : 
                    todo.isDone ? (
                      <s className='task_name'>{todo.name}</s>
                    ) : (
                      <span className='task_name'>{todo.name}</span>
                    )}
                  
                      <div>
                        <span className='icon'>
                          <AiFillEdit onClick={() => {
                            if(!edit && !todo.isDone)
                            setEdit(!edit);
                          }}/>
                        </span>
                        <span className='icon' onClick={() => { 
              handleDelete(todo.id)
            }}>
              <AiFillDelete />
            </span>
            <span className='icon' 
            onClick={() => { handleDone(todo.id)
            }}>
              <MdDone />
            </span>
          </div>
       </form> 
                
    
               
         )}
export default TodoTask