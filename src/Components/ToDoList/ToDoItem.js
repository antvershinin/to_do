import style from "./ToDoItem.module.css";
import { useState } from "react";
import Form from "../Form/Form";

const ToDoItem = ({ removeTask, markComplete, el }) => {
  const [editing, setEditing] = useState(true);
  const [newText, setNewText] = useState(el.text);

  const editTask = (el) => {
    el.isEditing = editing;
    setEditing(false);
  };

  const checkEditing = (text) => {
    if (!text) return;
    el.text = text;
    el.isEditing = editing;
    setNewText("");
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
        <Form defaultValue={newText} onSubmit={checkEditing} />
      )}
      <p className={style.button__remove} onClick={() => removeTask(el.id)}>
        Х
      </p>
    </div>
  );
};

export default ToDoItem;
