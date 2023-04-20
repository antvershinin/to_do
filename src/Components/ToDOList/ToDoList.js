import { listByFilter } from "../../redux/selectors";
import ToDoItem from "./ToDoItem";
import { useSelector } from "react-redux";

const ToDoList = () => {
  const tasks = useSelector(listByFilter);

  return tasks.map((el) => (
    <ToDoItem
      completed={el.completed}
      inEditing={el.inEditing}
      key={el.id}
      id={el.id}
      text={el.text}
    />
  ));
};

export default ToDoList;
