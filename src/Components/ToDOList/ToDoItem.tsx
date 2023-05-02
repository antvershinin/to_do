import { useDispatch } from "react-redux";
import { markComplete, deleteTask, changeText } from "../../redux/todoSlice";
import Form from "../Form/Form";
import { useState } from "react";
import React from "react";
import { ITask } from "../../redux/todoSlice";
import { TaskStyled } from "./ToDoList.styled";

type Props = {
  task: ITask;
};

const ToDoItem: React.FC<Props> = (props) => {
  const {
    task: { id, text, completed },
  } = props;
  const [editStatus, setEditStatus] = useState("");

  const dispatch = useDispatch();

  const onSubmitChangeText = (text: string) => {
    dispatch(changeText({ id: editStatus, text }));

    setEditStatus("");
  };

  return (
    <TaskStyled completed={completed}>
      <p
        className="button__complete"
        onClick={() => dispatch(markComplete({ id }))}
      >
        ✔
      </p>
      {editStatus ? (
        <Form defaultValue={text} onSubmit={onSubmitChangeText} />
      ) : (
        <p className="task" onDoubleClick={() => setEditStatus(id)}>
          {text}
        </p>
      )}
      <p
        className="button__remove"
        onClick={() => dispatch(deleteTask({ id }))}
      >
        X
      </p>
    </TaskStyled>
  );
};

export default ToDoItem;
