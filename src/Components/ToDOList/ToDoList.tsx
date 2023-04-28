import React from "react";
import { listByFilter } from "../../redux/selectors";
import ToDoItem from "./ToDoItem";
import { useSelector } from "react-redux";
import { ITask } from "../../redux/todoSlice";

const ToDoList = () => {
  const tasks = useSelector(listByFilter);

  return tasks.map((el: ITask) => (
    <ToDoItem completed={el.completed} key={el.id} id={el.id} text={el.text} />
  ));
};

export default ToDoList;
