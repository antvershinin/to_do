import React from "react";
import { useState } from "react";
import { useAppSelector } from "../../redux/store";

type Props = {
  onSubmit: (value: string) => void;
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
  placeholder?: string;
  defaultValue?: string;
};

const Form: React.FC<Props> = (props) => {
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
