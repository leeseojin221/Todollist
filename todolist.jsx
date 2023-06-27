import React from 'react'
import { useState } from 'react';
import uuid from 'react-uuid';

function Todolist({todos, setTodos, listisDone}) {
  return (
    <>
    <div>
      <h2>{listisDone ? `완료목록` : `할 일 목록`}</h2>
      {todos
      .filter((todo)=> todo.isDone === listisDone)
      .map((todo) => {
          return (
            <div 
              key={todo.id}
              style={{
              border: "1px solid black",
              margin: "10px",
              padding: "10px",
              paddingBottom: "20px",
            }}>
              <p>{todo.id}</p>
              <h3>{todo.title}</h3>
              <p>{todo.contents}</p>
              <p>완료여부 : {todo.isDone.toString()}</p>
              <button onClick={()=>{
                const newTodos = todos.map((item) => {
                  if(item.id === todo.id){
                    return {
                      ...item,
                      isDone: !item.isDone,
                    };
                  }else{ return item;}
                });

                setTodos(newTodos);
              }}>{listisDone ? `완료취소` : `완료`}</button>
              <button onClick={()=>{
                const deletedTodos = todos.filter((item)=>{
                  return item.id !== todo.id;
                });
                
                setTodos(deletedTodos);
              }}>삭제</button>
            </div>
          )
        })
      }
      </div>
    </>
  )
}

export default Todolist