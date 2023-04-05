import { useState } from "react";
import { nanoid } from "nanoid";
import Form from "./Components/Form";
import Filter from "./Components/Filter";
import "./App.css";

function App() {
  let [todoList, settodoList] = useState([]);
  let [completed, setCompleted] = useState([]);

  function addNewTask(text) {
    const newTask = {
      id: nanoid(8),
      text: text,
      completed: false,
    };
    settodoList([newTask, ...todoList]);
  }

  function removeTask(e) {
    const id = e.target.closest("div").id;
    const newList = todoList.filter((el) => el.id !== id);
    settodoList([...newList]);
  }

  function markComplete(e) {
    const id = e.target.closest("div").id;
    todoList.map((el) => {
      if (el.id === id) el.completed = !el.completed;
    });
    settodoList([...todoList]);
  }

  function ListAllTasks() {
    const Alltasks = todoList.map((el) => (
      <div key={el.id} id={el.id} className="toDoItem">
        <button onClick={markComplete} className="complete__task"></button>
        <p> {el.text} </p>
        <button onClick={removeTask} className="remove__task"></button>
      </div>
    ));
    return Alltasks;
  }

  return (
    <div className="App">
      <h1>TO DO</h1>
      <Form placeholder="Enter your duty" onSubmit={addNewTask} />
      <ListAllTasks />
      <Filter />
    </div>
  );
}

export default App;
