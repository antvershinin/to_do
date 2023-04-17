import style from "./ToDoItem.module.css";
import { useState } from "react";
import Form from "../Form/Form";

const ToDoItem = ({ removeTask, markComplete, el }) => {
  const [editStatus, setEditStatus] = useState(true);

  const editTask = (el) => {
    el.isEditing = editStatus;
    setEditStatus(false);
  };

  const checkEditing = (text) => {
    if (!text) return;
    el.text = text;
    el.isEditing = editStatus;
    setEditStatus(true);
  };

  const cancelChanges = () => {
    el.isEditing = editStatus;
    setEditStatus(true);
  };

  return (
    <div className={style.toDoItem}>
      <p className={style.button__complete} onClick={() => markComplete(el.id)}>
        ✔
      </p>
      {!el.isEditing ? (
        <span
          onDoubleClick={() => {
            editTask(el);
          }}
          className={!el.completed ? style.task__active : style.task__completed}
        >
          {el.isEditing || el.text}
        </span>
      ) : (
        <Form
          defaultValue={el.text}
          onSubmit={checkEditing}
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
