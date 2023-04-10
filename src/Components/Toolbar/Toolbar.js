import style from "./Toolbar.module.css";

const Toolbar = ({ completeAll, clearAll }) => {
  return (
    <div className={style.toolbar}>
      <input
        onClick={completeAll}
        type="button"
        className={`${style.button} ${style.button__complete}`}
        value="Complete All"
      ></input>
      <input
        onClick={clearAll}
        type="button"
        className={`${style.button} ${style.button__clear}`}
        value="Clear All"
      ></input>
    </div>
  );
};

export default Toolbar;
