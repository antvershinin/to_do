import { useState } from "react";
import { nanoid } from "nanoid";
import { Form } from "./Components/Form";
import Tasks from "./Components/Tasks";
import Filter from "./Components/Filter";
import "./App.css";

function App() {
  let [todoList, settodoList] = useState([]);
  let [filter, setFilter] = useState("All");

  function checkList() {
    return filter === "Active"
      ? todoList.filter((el) => !el.completed)
      : filter === "Completed"
      ? todoList.filter((el) => el.completed)
      : todoList;
  }

  const activeList = checkList();

  function addNewTask(text) {
    const newTask = {
      id: nanoid(8),
      text: text,
      completed: false,
    };
    settodoList([newTask, ...todoList]);
  }

  console.log(filter);

  function removeTask(e) {
    let index = e.target.closest("div").id;
    const newList = todoList.filter((el) => el.id !== index);
    settodoList([...newList]);
  }

  function markComplete(e) {
    let task = e.target.closest("div");
    task.classList.toggle("task__completed");
    todoList.map((el) => {
      if (el.id === task.id) el.completed = !el.completed;
    });

    settodoList([...todoList]);
    console.log(task);
  }

  return (
    <div className="app">
      <h1>TO DO</h1>
      <Form placeholder="Enter your duty" onSubmit={addNewTask} />
      <Tasks
        list={activeList}
        removeTask={removeTask}
        markComplete={markComplete}
      />
      <Filter setFilter={setFilter} />
    </div>
  );
}

export default App;
