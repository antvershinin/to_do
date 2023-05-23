import React, { useEffect, useState } from "react";
import { listByFilter } from "../../redux/selectors";
import ToDoItem from "./ToDoItem";
import { useSelector, useDispatch } from "react-redux";

import { fillState } from "../../redux/todoSlice";
import { getTodosDB } from "../api/TodoAPI";
import axios from "axios";

type Props = {};

type User = {
  id: number;
  name: string;
  username: string;
}

const ToDoList: React.FC<Props> = () => {
  const [state, setState] = useState([]);
  const [users, setUsers] = useState<User[]>([])
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const getTodos = async () => {
  //     try {
  //       const response = await getTodosDB();
  //       setState(response.data);
  //       dispatch(fillState(state));
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getTodos();
  // }, [dispatch, state]);

  // const tasks = useSelector(listByFilter);


  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
        await new Promise((res) => {
          setTimeout(() => {
            res(1)
          }, 2000)
        })
        setUsers(response.data)
      } catch (err) {
        console.log(err)
      }

    })();
  }, [])


  return (
    <>
      {users.length ? (
        users.map((i) => {
          return <div>
            <p>{i.name}</p>
            <p>{i.username}</p>
          </div>
        })
      ) : (
        <div>Loading.....</div>
      )}
      {/* {tasks.map((el) => (
        <ToDoItem task={el} key={el._id} />
      ))} */}
    </>
  );
};

export default ToDoList;
