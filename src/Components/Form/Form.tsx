import React from "react";
import { useState } from "react";
import { useAppSelector } from "../../redux/store";

type Props = {
  onSubmit: (value: string) => void;
  type: React.InputHTMLAttributes<HTMLInputElement>['type'];
  placeholder: string;
  defaultValue?: string;
}

<<<<<<< HEAD

const Form: React.FC<Props> = (props) => {
=======
const Form = (props: any) => {
>>>>>>> 0c27b9d5ddb66c5a44698b36424c83f76677ee29
  const [currentValue, setCurrentValue] = useState(props.defaultValue || "");
  const {activeFilter} = useAppSelector((state) => state.tasks)

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
