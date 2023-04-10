import style from "./ToDoItem.module.css";

const ToDoItem = ({ removeTask, markComplete, editTask, list }) => {
  return list.map((el) => (
    <div key={el.id} id={el.id} className={style.toDoItem}>
      <p className={style.button__complete} onClick={() => markComplete(el.id)}>
        ✔
      </p>
      <span
        onDoubleClick={() => {
          editTask(el.id);
        }}
        className={!el.completed ? style.task__active : style.task__completed}
      >
        {el.isEditing || el.text}
      </span>
      <p className={style.button__remove} onClick={() => removeTask(el.id)}>
        Х
      </p>
    </div>
  ));
};

export default ToDoItem;
