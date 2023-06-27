import React from 'react'
import uuid from "react-uuid";
import { useState } from 'react';

export function Input({todos, setTodos}) {
  
    const [title,setTitle] = useState(``);
    const [contents,setContents]=useState(``);
  

  return (
    <div>
    <form onSubmit={(event)=>{
      event.preventDefault();
      const newTodo = {
        id: uuid(),
        title: title,
        contents: contents,
        isDone: false,
      };

      setTodos([...todos, newTodo]);
    }}>
    <input value={title} 
    onChange={(event)=>{
      setTitle(event.target.value);
    }}/>
    <input value={contents}
    onChange={(event)=>{
      setContents(event.target.value);
    }}/>
    <button type="submit">입력</button>
    </form>
  </div>
  )
}

export default Input