import style from "./ToDoItem.module.css";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ removeTask, markComplete, list, editTask }) => {
  return list.map((el) => (
    <ToDoItem
      key={el.id}
      el={el}
      removeTask={removeTask}
      markComplete={markComplete}
      editTask={editTask}
    />
  ));
};

export default ToDoList;
