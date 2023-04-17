import style from "./ToDoItem.module.css";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ removeTask, markComplete, list }) => {
  return list.map((el) => (
    <ToDoItem
      key={el.id}
      el={el}
      removeTask={removeTask}
      markComplete={markComplete}
    />
  ));
};

export default ToDoList;
