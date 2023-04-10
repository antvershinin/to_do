import style from "./Filter.module.css";

const Filter = ({ setFilter }) => {
  function onClick(e) {
    setFilter(e.target.value);
  }
  return (
    <div onClick={onClick} className={style.filter}>
      <div className={style.button}>
        <input id="All" type="radio" value="All" name="filter" />
        <label htmlFor="All">All</label>
      </div>
      <div className={style.button}>
        <input id="Active" type="radio" value="Active" name="filter" />
        <label htmlFor="Active">Active</label>
      </div>
      <div className={style.button}>
        <input id="Completed" type="radio" value="Completed" name="filter" />
        <label htmlFor="Completed">Completed</label>
      </div>
    </div>
  );
};

export default Filter;
