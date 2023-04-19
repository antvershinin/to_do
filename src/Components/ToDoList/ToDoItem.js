import style from "./ToDoItem.module.css";
import { useState } from "react";
import Form from "../Form/Form";

const ToDoItem = ({ removeTask, markComplete, el, editTask }) => {
  const [editStatus, setEditStatus] = useState("");

  const markEdit = () => {
    setEditStatus(el.id);
  };

  const getNewText = (newText) => {
    editTask(newText, editStatus);
    setEditStatus("");
  };

  const cancelChanges = () => {
    setEditStatus("");
  };

  return (
    <div className={style.toDoItem}>
      <p className={style.button__complete} onClick={() => markComplete(el.id)}>
        ✔
      </p>
      {!editStatus ? (
        <span
          onDoubleClick={markEdit}
          className={!el.completed ? style.task__active : style.task__completed}
        >
          {el.text}
        </span>
      ) : (
        <Form
          defaultValue={el.text}
          onSubmit={getNewText}
          cancelChanges={cancelChanges}
        />
      )}
      <p className={style.button__remove} onClick={() => removeTask(el.id)}>
        Х
      </p>
    </div>
  );
};

export default ToDoItem;
