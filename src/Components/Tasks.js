import "./Styles.css";

export default function Tasks({ removeTask, markComplete, list }) {
  return list.map((el) => (
    <div key={el.id} id={el.id} className="toDoItem">
      <p type="button" className="btn btn__complete" onClick={markComplete}>
        ✔
      </p>
      <p
        onClick={markComplete}
        className={el.completed ? " task__completed" : "task__text"}
      >
        {el.text}
      </p>
      <p className="btn btn__remove" onClick={removeTask}>
        Х
      </p>
    </div>
  ));
}

export function Counter({ list, filter }) {
  let count = list.length;
  if (count === 0) return "You have no duties";
  return `${count} ${count > 1 ? "duties" : "duty"} ${
    filter === "Completed"
      ? "completed"
      : filter === "Active"
      ? "left"
      : `overall`
  }`;
}
