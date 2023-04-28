
import Form from "../Form/Form";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/todoSlice";
import React from "react";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h1 className="title">To DO List</h1>
      </div>
      <Form
        placeholder="Enter your duty"
        onSubmit={(text: string) => dispatch(addTask({ text }))}
      />
    </>
  );
};

export default Header;
