import Header from "./Components/Header/Header";
import Filter from "./Components/Filter/Filter";
import Toolbar from "./Components/Toolbar/Toolbar";
import ToDoList from "./Components/ToDoList/ToDoList";
import style from "./App.module.css";

function App() {
  return (
    <div className={style.app}>
      <Header />
      <Filter />
      <ToDoList />
      <Toolbar />
    </div>
  );
}

export default App;
