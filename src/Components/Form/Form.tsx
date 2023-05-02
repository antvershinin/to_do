import React from "react";
import { useState } from "react";
import { FormStyled } from "./Form.styled";

type Props = {
  onSubmit: (value: string) => void;
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
    <FormStyled onSubmit={handleSubmit}>
      <input
        className="form__input"
        placeholder={props.placeholder}
        onChange={handleChange}
        value={currentValue}
      ></input>
    </FormStyled>
  );
};

export default Form;
