import Header from "./Components/Header/Header";
import Filter from "./Components/Filter/Filter";
import Toolbar from "./Components/Toolbar/Toolbar";
import ToDoList from "./Components/ToDoList/ToDoList";
import React, { useEffect } from "react";
import { AppStyled } from "./App.styled";
import { useDispatch, useSelector } from "react-redux";
import { fillState } from "./redux/todoSlice";
import { getTodosDB } from "./Components/api/TodoAPI";
import { filterSelect } from "./redux/selectors";

const App = () => {
  const dispatch = useDispatch();

  const filter = useSelector(filterSelect);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const response = await getTodosDB(filter);
        dispatch(fillState(response.data));
      } catch (err) {
        console.log(err);
      }
    };
    getTodos();
  }, [filter]);

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
