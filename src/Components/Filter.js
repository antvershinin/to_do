export default function Filter({ setFilter }) {
  function onClick(e) {
    setFilter(e.target.value);
  }

  return (
    <div onClick={onClick} className="app__filter">
      <input type="button" value="All" />
      <input type="button" value="Active" />
      <input type="button" value="Completed" />
    </div>
  );
}
