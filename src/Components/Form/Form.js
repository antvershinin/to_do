import { useState } from "react";
import style from "./Form.module.css";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/todoSlice";

const Form = (props) => {
  const [currentValue, setCurrentValue] = useState(props.defaultValue || "");

  const dispatch = useDispatch();

  function handleChange(e) {
    setCurrentValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(
      addTask({
        text: currentValue,
      })
    );

    setCurrentValue("");
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        type={props.type}
        className={style.input}
        placeholder={props.placeholder}
        onChange={handleChange}
        value={currentValue}
      ></input>
    </form>
  );
};

export default Form;
