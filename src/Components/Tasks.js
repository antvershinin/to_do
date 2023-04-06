import "./Styles.css";

export default function Tasks({ removeTask, markComplete, list }) {
  return list.map((el) => (
    <div key={el.id} id={el.id} className="toDoItem">
      <p type="button" className="btn btn__complete" onClick={markComplete}>
        ✔
      </p>
      <p onClick={markComplete} className="task__text">
        {el.text}
      </p>
      <p className="btn btn__remove" onClick={removeTask}>
        Х
      </p>
    </div>
  ));
}
