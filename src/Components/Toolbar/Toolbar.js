import style from "./Toolbar.module.css";
import { useDispatch } from "react-redux";
import { completeAll, clearAll } from "../../redux/todoSlice";

const Toolbar = () => {
  const dispatch = useDispatch();

  const onClickComplete = () => {
    dispatch(completeAll());
  };

  const onClickClear = () => {
    dispatch(clearAll());
  };

  return (
    <div className={style.toolbar}>
      <input
        onClick={() => onClickComplete()}
        type="button"
        className={`${style.button} ${style.button__complete}`}
        value="Complete All"
      ></input>
      <input
        onClick={() => onClickClear()}
        type="button"
        className={`${style.button} ${style.button__clear}`}
        value="Clear All"
      ></input>
    </div>
  );
};

export default Toolbar;
