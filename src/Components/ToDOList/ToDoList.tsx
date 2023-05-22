import React, { useEffect, useState } from "react";
import { listByFilter } from "../../redux/selectors";
import ToDoItem from "./ToDoItem";
import { useSelector, useDispatch } from "react-redux";

import { fillState } from "../../redux/todoSlice";
import { getTodosDB } from "../api/TodoAPI";

type Props = {};

const ToDoList: React.FC<Props> = () => {
  const [state, setState] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getTodos = async () => {
      try {
        const response = await getTodosDB();
        setState(response.data);
        dispatch(fillState(state));
      } catch (err) {
        console.log(err);
      }
    };
    getTodos();
  }, [dispatch, state]);

  const tasks = useSelector(listByFilter);

  return (
    <>
      {tasks.map((el) => (
        <ToDoItem task={el} key={el._id} />
      ))}
    </>
  );
};

export default ToDoList;
