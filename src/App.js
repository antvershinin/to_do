import { useState } from "react";
import { nanoid } from "nanoid";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import Filter from "./Components/Filter/Filter";
import style from "./App.module.css";
import Toolbar from "./Components/Toolbar/Toolbar";
import ToDoList from "./Components/ToDoList/ToDoList";

function App() {
  let [todoList, settodoList] = useState([]);
  let [filter, setFilter] = useState("All");

  const checkList = () => {
    switch (filter) {
      case "Active":
        return todoList.filter((el) => !el.completed);

      case "Completed":
        return todoList.filter((el) => el.completed);

      default:
        return todoList;
    }
  };

  const activeList = checkList();

  const addNewTask = (text) => {
    if (!text.trim()) {
      return;
    }
    const newTask = {
      id: nanoid(8),
      text: text,
      completed: false,
    };
    settodoList([newTask, ...todoList]);
  };

  const removeTask = (id) => {
    const newList = todoList.filter((el) => el.id !== id);
    settodoList(newList);
  };

  const markComplete = (id) => {
    const newList = todoList.map((el) => {
      if (el.id !== id) return el;
      else return { ...el, completed: !el.completed };
    });

    settodoList(newList);
  };

  const completeAll = () => {
    let tumbler = todoList.some((el) => !el.completed);
    const newList = todoList.map((el) => {
      return {
        ...el,
        completed: tumbler,
      };
    });

    settodoList(newList);
  };

  const editTask = (newText, id) => {
    const newList = todoList.map((el) => {
      if (el.id !== id) return el;
      return { ...el, text: newText };
    });
    settodoList(newList);
  };

  const clearAll = () => {
    settodoList([]);
  };

  return (
    <div className={style.app}>
      <Header list={activeList} filter={filter} />

      <Form placeholder="Enter your duty" onSubmit={addNewTask} />
      <Filter setFilter={setFilter} />
      <ToDoList
        list={activeList}
        removeTask={removeTask}
        markComplete={markComplete}
        editTask={editTask}
      />
      <Toolbar completeAll={completeAll} clearAll={clearAll} />
    </div>
  );
}

export default App;
