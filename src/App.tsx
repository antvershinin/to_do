import Header from "./Components/Header/Header";
import Filter from "./Components/Filter/Filter";
import Toolbar from "./Components/Toolbar/Toolbar";
import ToDoList from "./Components/ToDoList/ToDoList";
import React, { useEffect, useState } from "react";
import { AppStyled } from "./App.styled";
import { getAllTodos } from "./Components/api/TodoAPI";
import { fillState } from "./redux/todoSlice";
import { useDispatch } from "react-redux";

const App = () => {

  const [state, Setstate] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    const getTodosDB = async () => {
      try {
        const response = await getAllTodos()
        Setstate(response.data)
        dispatch(fillState(state))
      } catch (err) {
        console.log(err)
      }
    }
    getTodosDB()
  }, [dispatch, state])

  return (
    <AppStyled>
      <Header />
      <Filter />
      <ToDoList />
      <Toolbar />
    </AppStyled>
  );
};

export default App;


