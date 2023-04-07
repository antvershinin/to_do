import { useState } from "react";
import { nanoid } from "nanoid";
import { Form } from "./Components/Form";
import Tasks from "./Components/Tasks";
import { Counter } from "./Components/Tasks";
import Filter from "./Components/Filter";
import "./App.css";

function App() {
  let [todoList, settodoList] = useState([]);
  let [filter, setFilter] = useState("All");

  function checkList() {
    switch (filter) {
      case "Active":
        return todoList.filter((el) => !el.completed);

      case "Completed":
        return todoList.filter((el) => el.completed);

      case "Complete All":
        setFilter("Completed");
        return todoList.map((el) => (el.completed = true));

      case "Clear All":
        setFilter("All");
        settodoList([]);

      default:
        return todoList;
    }
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

  function removeTask(e) {
    let index = e.target.closest("div").id;
    const newList = todoList.filter((el) => el.id !== index);
    settodoList([...newList]);
  }

  function markComplete(e) {
    let task = e.target.closest("div");
    todoList.map((el) => {
      if (el.id === task.id) el.completed = !el.completed;
    });

    settodoList([...todoList]);
  }

  return (
    <div className="app">
      <h1>TO DO</h1>
      <h3>
        <Counter filter={filter} list={activeList} />
      </h3>
      <Filter setFilter={setFilter} />
      <Form placeholder="Enter your duty" onSubmit={addNewTask} />
      <div className="task__list">
        <Tasks
          list={activeList}
          removeTask={removeTask}
          markComplete={markComplete}
        />
      </div>
    </div>
  );
}

export default App;
