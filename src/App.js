import { useState } from "react";
import { nanoid } from "nanoid";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import Filter from "./Components/Filter/Filter";
import style from "./App.module.css";
import Toolbar from "./Components/Toolbar/Toolbar";
import ToDoItem from "./Components/ToDoItem/ToDoItem";

function App() {
  let [todoList, settodoList] = useState([]);
  let [filter, setFilter] = useState("All");

  function checkList() {
    switch (filter) {
      case "Active":
        return todoList.filter((el) => !el.completed);

      case "Completed":
        return todoList.filter((el) => el.completed);

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

  const completeAll = () => {
    let tumbler = todoList[0].completed;
    todoList.map((el) => {
      el.completed = !tumbler;
    });

    settodoList([...todoList]);
  };

  const clearAll = () => {
    settodoList([]);
  };

  return (
    <div className={style.app}>
      <Header list={activeList} filter={filter} />

      <Form placeholder="Enter your duty" onSubmit={addNewTask} />
      <Filter setFilter={setFilter} />
      <div className={style.list}>
        <ToDoItem
          list={activeList}
          removeTask={removeTask}
          markComplete={markComplete}
          editTask={editTask}
        />
      </div>
      <Toolbar completeAll={completeAll} clearAll={clearAll} />
    </div>
  );
}

export default App;
