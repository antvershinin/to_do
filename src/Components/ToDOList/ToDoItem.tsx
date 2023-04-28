import { useDispatch } from "react-redux";
import { markComplete, deleteTask, changeText } from "../../redux/todoSlice";
import Form from "../Form/Form";
import { useState } from "react";
import React from "react";
import { ITask } from "../../redux/todoSlice";

const ToDoItem: React.FC<ITask> = ({ id, text }) => {
  const [editStatus, setEditStatus] = useState("");

  const dispatch = useDispatch();

  const onSubmitChangeText = (text: string) => {
    dispatch(changeText({ id: editStatus, text }));

    setEditStatus("");
  };

  return (
    <div>
      <p onClick={() => dispatch(markComplete({ id }))}>✔</p>
      {editStatus ? (
        <Form defaultValue={text} onSubmit={onSubmitChangeText} />
      ) : (
        <span onDoubleClick={() => setEditStatus(id)}>{text}</span>
      )}
      <p onClick={() => dispatch(deleteTask({ id }))}>X</p>
    </div>
  );
};

export default ToDoItem;
