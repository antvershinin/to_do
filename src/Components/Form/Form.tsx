import React from "react";
import { useState } from "react";

const Form = (props: any) => {
  const [currentValue, setCurrentValue] = useState(props.defaultValue || "");

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setCurrentValue(e.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    props.onSubmit(currentValue);

    setCurrentValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type={props.type}
        placeholder={props.placeholder}
        onChange={handleChange}
        value={currentValue}
      ></input>
    </form>
  );
};

export default Form;
