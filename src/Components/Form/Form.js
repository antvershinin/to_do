import { useState } from "react";
import style from "./Form.module.css";

const Form = (props) => {
  let [current, setCurrent] = useState(props.defaultValue || "");

  const handleChange = (e) => {
    setCurrent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(current);
    setCurrent("");
  };

  const cancelChanges = (e) => {
    if (e.key === "Escape") {
      props.cancelChanges();
    }
  };

  return (
    <form
      className={style.form}
      onSubmit={handleSubmit}
      onKeyDown={(e) => cancelChanges(e)}
    >
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
