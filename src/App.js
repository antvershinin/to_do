import { useState } from "react";
import { nanoid } from "nanoid";
import { Form } from "./Components/Form";
import Tasks from "./Components/Tasks";
import Counter from "./Components/Counter";
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
    if (!text.trim()) {
      return;
    }
    const newTask = {
      id: nanoid(8),
      text: text,
      completed: false,
      isEditing: false,
    };
    settodoList([newTask, ...todoList]);
  }

  function removeTask(id) {
    const newList = todoList.filter((el) => el.id !== id);
    settodoList([...newList]);
  }

  function markComplete(id) {
    todoList.map((el) => {
      if (el.id === id) el.completed = !el.completed;
    });

    settodoList([...todoList]);
  }

  const editTask = (id) => {
    todoList.map((el) => {
      if (el.id === id) {
        el.isEditing = (
          <Form
            defaultValue={el.text}
            onSubmit={(newText) => {
              el.text = newText;
              el.isEditing = false;
              settodoList([...todoList]);
            }}
          />
        );
      }
    });

    settodoList([...todoList]);
  };

  return (
    <div className="app">
      <div className="header">
        <h1>TO DO</h1>
        <h3>
          <Counter filter={filter} list={activeList} />
        </h3>
      </div>
      <Filter setFilter={setFilter} />
      <Form placeholder="Enter your duty" onSubmit={addNewTask} />
      <div className="task__list">
        <Tasks
          list={activeList}
          removeTask={removeTask}
          markComplete={markComplete}
          editTask={editTask}
        />
      </div>
    </div>
  );
}

export default App;
