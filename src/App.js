import { useState } from "react";
import Form from "./Form/Form";
import "./App.css";

function App() {
  let [todoList, settodoList] = useState([]);

  function addNewTask(text) {
    const newTask = {
      text: text,
      completed: false,
    };
    settodoList([newTask, ...todoList]);
  }

  function ListAllTasks() {
    const Alltasks = todoList.map((el) => (
      <div className="toDoItem">
        <button className="complete__task"></button>
        <p> {el.text} </p>
        <button className="remove__task"></button>
      </div>
    ));
    return Alltasks;
  }

  return (
    <div className="App">
      <h1>TO DO</h1>
      <Form placeholder="Enter your duty" addNewValue={addNewTask} />
      <ListAllTasks />
    </div>
  );
}

export default App;
