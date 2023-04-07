export default function Filter({ setFilter }) {
  function onClick(e) {
    setFilter(e.target.value);
  }

  return (
    <div onClick={onClick} className="app__filter">
      <div className="filter__button">
        <input id="All" type="radio" value="All" name="filter" />
        <label htmlFor="All">All</label>
      </div>
      <div className="filter__button">
        <input id="Active" type="radio" value="Active" name="filter" />
        <label htmlFor="Active">Active</label>
      </div>
      <div className="filter__button">
        <input id="Completed" type="radio" value="Completed" name="filter" />
        <label htmlFor="Completed">Completed</label>
      </div>
      <input
        type="button"
        className="manage__button manage__button--complete"
        value="Complete All"
      ></input>
      <input
        type="button"
        className="manage__button manage__button--clear"
        value="Clear All"
      ></input>
    </div>
  );
}
