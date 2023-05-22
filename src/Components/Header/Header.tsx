import Form from "../Form/Form";
import { useDispatch } from "react-redux";
import React from "react";
import { HeaderStyled } from "./Header.styled";

type Props = {};

const Header: React.FC<Props> = () => {
  const dispatch = useDispatch();

  return (
    <HeaderStyled>
      <div>
        <h1 className="title">To Do List</h1>
      </div>
      <Form placeholder="Enter your Duty..." />
    </HeaderStyled>
  );
};

export default Header;
