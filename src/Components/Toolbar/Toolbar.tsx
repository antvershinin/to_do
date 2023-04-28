import { useDispatch } from "react-redux";
import { completeAll, clearAll } from "../../redux/todoSlice";
import React from "react";

const Toolbar = () => {
  const dispatch = useDispatch();

  const onClickComplete = () => {
    dispatch(completeAll());
  };

  const onClickClear = () => {
    dispatch(clearAll());
  };

  return (
    <div >
      <input
        onClick={() => onClickComplete()}
        type="button"
   
        value="Complete All"
      ></input>
      <input
        onClick={() => onClickClear()}
        type="button"

        value="Clear All"
      ></input>
    </div>
  );
};

export default Toolbar;
