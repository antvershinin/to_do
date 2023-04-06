import { useState } from "react";
import { nanoid } from "nanoid";
import { Form } from "./Components/Components";
import Tasks from "./Components/Tasks";
import Filter from "./Components/Filter";
import "./App.css";

function App() {
  let [todoList, settodoList] = useState([]);
  let [completedTask, setCompleted] = useState([]);
  let [activeTask, setActiveTask] = useState([]);

  function addNewTask(text) {
    const newTask = {
      id: nanoid(8),
      text: text,
      completed: false,
    };
    settodoList([newTask, ...todoList]);
  }

  function removeTask(e) {
    let index = e.target.closest("div").id;
    const newList = todoList.filter((el) => el.id !== index);
    settodoList([...newList]);
  }

  function markComplete(e) {
    let task = e.target.closest("div").id;
    todoList.map((el) => {
      if (el.id === task) el.completed = !el.completed;
    });
    settodoList([...todoList]);
    console.log(e.target.closest("div"));
  }

  return (
    <div className="App">
      <h1>TO DO</h1>
      <Form placeholder="Enter your duty" onSubmit={addNewTask} />
      <Tasks
        list={todoList}
        removeTask={removeTask}
        markComplete={markComplete}
      />
      <Filter />
    </div>
  );
}

export default App;
