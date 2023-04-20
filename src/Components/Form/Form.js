import { useState } from "react";
import style from "./Form.module.css";

const Form = (props) => {
  const [currentValue, setCurrentValue] = useState(props.defaultValue || "");

  function handleChange(e) {
    setCurrentValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit(currentValue);

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
