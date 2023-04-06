export default function Tasks({ removeTask, markComplete, list }) {
  return list.map((el) => (
    <div key={el.id} id={el.id} className="toDoItem">
      <p onClick={markComplete}> {el.text} </p>
      <input type="button" onClick={removeTask} />
    </div>
  ));
}
