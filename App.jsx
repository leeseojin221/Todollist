import "./App.css";
import { useState } from "react";
import uuid from "react-uuid";
import Input from "./components/input";
import Todolist from "./components/todolist";

function App() {

  const [todos, setTodos] = useState([
    {
      id: uuid(),
      title: `제목1`,
      contents: `내용1`,
      isDone: false,
    },
    {
      id: uuid(),
      title: `제목2`,
      contents: `내용2`,
      isDone: true,
    },
  ]);
  
  return <div>
    <header
     style  ={{
      backgroundColor: "#f3d294",
      padding:"10px",
     }}>
      
    헤더입니다.
      </header>
    <main
         style  ={{
          backgroundColor: "#8de781",
          padding:"10px",
         }}>
          <Input todos={todos} setTodos={setTodos} />
    <div>
      <h1>리스트 영역</h1>
      <Todolist todos={todos} setTodos={setTodos} listisDone={false}/>
      <Todolist todos={todos} setTodos={setTodos} listisDone={true}/>
    </div>
    </main>
    <footer
             style  ={{
              backgroundColor: "#eb7e6b",
              padding:"10px",
             }}>
    푸터입니다.
    </footer>
  </div>;
}

export default App;
