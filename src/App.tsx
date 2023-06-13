import Header from "./Components/Header/Header";
import Filter from "./Components/Filter/Filter";
import Toolbar from "./Components/Toolbar/Toolbar";
import ToDoList from "./Components/ToDoList/ToDoList";
import React, { useEffect } from "react";
import { AppStyled } from "./App.styled";
import { useDispatch } from "react-redux";
import { fillState } from "./redux/todoSlice";
import { getTodosDB } from "./Components/api/TodoAPI";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getTodos = async () => {
      try {
        const response = await getTodosDB();
        dispatch(fillState(response.data));
        console.log(response.data)
      } catch (err) {
        console.log(err);
      }
    };
    getTodos();
  });

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
