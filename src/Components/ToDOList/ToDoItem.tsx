import { useDispatch } from "react-redux";
import { changeText, deleteTask, markComplete } from "../../redux/todoSlice";
import { useState } from "react";
import React from "react";
import { ITask } from "../../redux/todoSlice";
import { TaskStyled } from "./ToDoList.styled";
import { deleteTodoDB, editTodoDB } from "../api/TodoAPI";

type Props = {
  task: ITask;
};

const ToDoItem: React.FC<Props> = (props) => {
  const {
    task: { id, text, completed },
  } = props;
  const [editStatus, setEditStatus] = useState("");
  const [currentValue, setCurrentValue] = useState("");
  const dispatch = useDispatch();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setCurrentValue(e.target.value);
  };


  const onSubmitChangeText: React.FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();
    try {
      await editTodoDB({
        completed,
        id,
        text: currentValue,
      });
      dispatch(changeText({ id, text: currentValue }));

      setEditStatus("");
    } catch (err) {
      console.log(err);
    }
  };

  const onClickComplete = async () => {
    try {
      await editTodoDB({
        completed: !completed,
        id,
        text,
      });
      dispatch(markComplete({ id }));
    } catch (err) { }
  };

  const onClickDelete = async () => {
    try {
      await deleteTodoDB(id);
      dispatch(deleteTask({ id }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <TaskStyled completed={completed}>
      <p className="button__complete" onClick={onClickComplete}>
        ✔
      </p>
      {editStatus ? (
        <form onSubmit={onSubmitChangeText}>
          <input
            className="form__input"
            defaultValue={text}
            onChange={handleChange}
          ></input>
        </form>
      ) : (
        <p className="task" onDoubleClick={() => setEditStatus(id)}>
          {text}
        </p>
      )}
      <p className="button__remove" onClick={onClickDelete}>
        X
      </p>
    </TaskStyled>
  );
};

export default ToDoItem;
