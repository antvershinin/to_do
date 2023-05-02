import Header from "./Components/Header/Header";
import Filter from "./Components/Filter/Filter";
import Toolbar from "./Components/Toolbar/Toolbar";
import ToDoList from "./Components/ToDoList/ToDoList";
import React from "react";
import { AppStyled } from "./App.styled";

const App = () => {
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
