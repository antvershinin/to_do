import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import Filter from "./Components/Filter/Filter";
import Toolbar from "./Components/Toolbar/Toolbar";
import ToDOList from "./Components/ToDOList/ToDoList";
import style from "./App.module.css";

function App() {
  return (
    <div className={style.app}>
      <Header />
      <Form placeholder="Enter your duty" />
      <Filter />
      <ToDOList />
      <Toolbar />
    </div>
  );
}

export default App;
