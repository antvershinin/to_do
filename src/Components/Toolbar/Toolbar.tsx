import { useDispatch } from "react-redux";
import { completeAll, clearAll } from "../../redux/todoSlice";
import React from "react";
import { ToolbarButton, ToolbarStyled } from "./Toolbar.styled";

type Props = {};

const Toolbar: React.FC<Props> = () => {
  const dispatch = useDispatch();

  const onClickComplete = () => {
    dispatch(completeAll());
  };

  const onClickClear = () => {
    dispatch(clearAll());
  };

  return (
    <ToolbarStyled>
      <ToolbarButton
        complete={true}
        onClick={() => onClickComplete()}
        type="button"
        value="Complete All"
      ></ToolbarButton>
      <ToolbarButton
        complete={false}
        onClick={() => onClickClear()}
        type="button"
        value="Clear All"
      ></ToolbarButton>
    </ToolbarStyled>
  );
};

export default Toolbar;
