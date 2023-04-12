import { useDispatch } from "react-redux";
import { markComplete } from "../../redux/todoSlice";
import { deleteTask } from "../../redux/todoSlice";
import { editTask } from "../../redux/todoSlice";
import style from "./ToDoList.module.css";

const ToDoItem = ({ id, text, completed, inEditing }) => {
  const dispatch = useDispatch();

  const onClickComplete = () => {
    dispatch(markComplete({ id: id }));
  };

  const onClickDelete = () => {
    dispatch(deleteTask({ id: id }));
  };

  const onDoubleClickEdit = () => {
    dispatch(editTask({ id: id }));
    console.log(text);
  };

  return (
    <div key={id} id={id} className={style.toDoItem}>
      <p
        id={id}
        onClick={() => onClickComplete()}
        className={style.button__complete}
      >
        ✔
      </p>
      <span
        id={id}
        className={completed ? style.task__completed : style.task__active}
        onDoubleClick={() => onDoubleClickEdit()}
      >
        {inEditing || text}
      </span>
      <p
        id={id}
        onClick={() => onClickDelete()}
        className={style.button__remove}
      >
        X
      </p>
    </div>
  );
};

export default ToDoItem;
