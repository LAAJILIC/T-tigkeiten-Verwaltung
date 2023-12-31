import React, {useRef } from 'react'
import './styles.css'

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleTodos: (e: React.FormEvent) => void;
}
function InputTask({ todo, setTodo, handleTodos }: Props) {

  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form className='form' onSubmit={(e) => {
      handleTodos(e);
      inputRef.current?.blur();

      }}>
    <input ref={inputRef} className='input' type='input' placeholder='Geben Sie die Aufgabe ein' value={todo} onChange={(e) => setTodo(e.target.value)}></input>
    <button className='button' type='submit'>Weiter</button>
    </form>
  )
}

export default InputTask