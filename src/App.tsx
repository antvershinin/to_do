import Header from "./Components/Header/Header";
import Filter from "./Components/Filter/Filter";
import Toolbar from "./Components/Toolbar/Toolbar";
import ToDoList from "./Components/ToDoList/ToDoList";
import React from "react";


const App = () => {
  return (
    <div>
      <Header />
      <Filter />
      <ToDoList />
      <Toolbar />
    </div>
  );
}

export default  App;
