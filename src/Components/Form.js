import { useState } from "react";

export const Form = (props) => {
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
    <form className="app__form" onSubmit={handleSubmit}>
      <input
        type={props.type}
        className="form__input"
        placeholder={props.placeholder}
        onChange={handleChange}
        value={current}
      ></input>
    </form>
  );
};
