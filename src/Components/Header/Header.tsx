import Form from "../Form/Form";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/todoSlice";
import React from "react";

const Header = () => {
  const dispatch = useDispatch();

  const handleSubmit = (text: string) => {
    dispatch(addTask({ text }));
  };

  return (
    <>
      <div>
        <h1 className="title">To DO List</h1>
      </div>
      <Form
        onSubmit={handleSubmit}
        type="text"
        placeholder="Enter your Duty..."
      />
    </>
  );
};

export default Header;
