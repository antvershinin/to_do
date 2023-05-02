import React from "react";
import { listByFilter } from "../../redux/selectors";
import ToDoItem from "./ToDoItem";
import { useSelector } from "react-redux";
import { ITask } from "../../redux/todoSlice";

const ToDoList: React.FC = () => {
  const tasks = useSelector(listByFilter);

  return (
    <>
      {tasks.map((el) => (
        <ToDoItem
          task={el}
          key={el.id}
        />
      ))}
    </>
  )
};

export default ToDoList;
