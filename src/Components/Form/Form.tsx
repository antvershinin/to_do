import React from "react";
import { useState } from "react";
import { FormStyled } from "./Form.styled";
import { addTodoDB } from "../api/TodoAPI";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/todoSlice";

type Props = {
  onSubmit?: (value: string) => void;
  placeholder?: string;
  defaultValue?: string;
};

const Form: React.FC<Props> = (props) => {
  const [currentValue, setCurrentValue] = useState(props.defaultValue || "");
  const dispatch = useDispatch();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setCurrentValue(e.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      const newTask = await addTodoDB(currentValue);
      dispatch(addTask(newTask.data));
      setCurrentValue("");
    } catch (err) {
      console.log(err);
    }
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
