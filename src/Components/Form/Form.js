import { useState } from "react";
import style from "./Form.module.css";

const Form = (props) => {
  let [current, setCurrent] = useState(props.defaultValue || "");

  function handleChange(e) {
    setCurrent(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit(current);
    setCurrent("");
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        type={props.type}
        className={style.input}
        placeholder={props.placeholder}
        onChange={handleChange}
        value={current}
      ></input>
    </form>
  );
};

export default Form;
