import "./Styles.css";

const TaskList = ({ removeTask, markComplete, editTask, list }) => {
  return list.map((el) => (
    <div key={el.id} id={el.id} className="toDoItem">
      <p
        type="button"
        className="btn btn__complete"
        onClick={() => markComplete(el.id)}
      >
        ✔
      </p>
      <span
        onDoubleClick={() => {
          editTask(el.id);
        }}
        className={el.completed ? " task__completed" : "task__text"}
      >
        {el.isEditing || el.text}
      </span>
      <p className="btn btn__remove" onClick={() => removeTask(el.id)}>
        Х
      </p>
    </div>
  ));
};

export default TaskList;
