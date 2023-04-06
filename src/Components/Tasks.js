export default function Tasks({ removeTask, markComplete, el }) {
  return (
    <div id={el.id} className="toDoItem">
      <p onClick={markComplete}> {el.text} </p>
      <input type="button" onClick={removeTask} />
    </div>
  );
}
