import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [Todolist, setTodolist] = useState([
    {
      id: 0,
      title: `리액트 공부하기`,
      boby: `리액트 기초를 공부해봅시다.`,
      isDone: false,
    },
  ]);

  console.log(Todolist);

  const [title, setTitle] = useState(``);
  const [boby, setBoby] = useState(``);

  //title 입력하기
  const inputTitle = (event) => {
    setTitle(event.target.value);
  };
  //boby 입력하기
  const inputBoby = (event) => {
    setBoby(event.target.value);
  };
  //제목과 내용 추가하기
  const onSubmitHandler = () => {
    const NewTodolist = { id: Todolist.length + 1, title, boby };
    setTodolist([...Todolist, NewTodolist]);
    setTitle(``);
    setBoby(``);
  };
  //삭제하기
  const onChangeHandler = (id) => {
    const newId = Todolist.filter((Todolist) => Todolist.id !== id);
    setTodolist(newId);
  };

  //완료하기
  

  return (
    <div className="layout">
      <div className="container">
        <div>My Todo List</div>
        <div>React</div>
      </div>
      <form className="add-form">
      <div className="input">
        제목:&nbsp;
        <input value={title} onChange={inputTitle} />
        내용:&nbsp;
        <input value={boby} onChange={inputBoby} />
        <button onClick={onSubmitHandler}>추가</button>
        {}
      </div>
      </form>
      <div className="list-container">
        <h2>Working</h2>
        <div className="list-wrapper">
          <div className="todo-container">
        <div>
        {Todolist.map((item) => {
          return (
            <div key={item.id}>
              <h2 className="todo-title">{item.title}</h2>
              <div>{item.boby}</div>
              <div className="button-set">
              <button
                className="botton-style"
                onClick={() => onChangeHandler(item.id)}>
                삭제하기
              </button>
              <button 
               className="botton-style-two"
              >완료</button>
              </div>
            </div>  
          );
        })}
        </div>  
          </div>
       </div>
       <h2>Done..!</h2>
      </div>
    </div>
  );
  
}

export default App;
