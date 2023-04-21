import { useDispatch } from "react-redux";
import { markComplete, deleteTask, changeText } from "../../redux/todoSlice";

import style from "./ToDoList.module.css";
import Form from "../Form/Form";
import { useState } from "react";

const ToDoItem = ({ id, text, completed }) => {
  const [editStatus, setEditStatus] = useState("");

  const dispatch = useDispatch();

  const onSubmitChangeText = (text) => {
    dispatch(changeText({ id: editStatus, text }));

    setEditStatus("");
  };

  return (
    <div className={style.toDoItem}>
      <p
        onClick={() => dispatch(markComplete({ id }))}
        className={style.button__complete}
      >
        ✔
      </p>
      {editStatus ? (
        <Form defaultValue={text} onSubmit={onSubmitChangeText} />
      ) : (
        <span
          onDoubleClick={() => setEditStatus(id)}
          className={completed ? style.task__completed : style.task__active}
        >
          {text}
        </span>
      )}
      <p
        onClick={() => dispatch(deleteTask({ id }))}
        className={style.button__remove}
      >
        X
      </p>
    </div>
  );
};

export default ToDoItem;
