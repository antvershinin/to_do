import React from "react";
import { ToolbarButton, ToolbarStyled } from "./Toolbar.styled";
import { completeAllTodoDB, deleteAllTodos } from "../api/TodoAPI";
import { ITask } from "../../redux/todoSlice";
import { useSelector } from "react-redux";
import { listByFilter } from "../../redux/selectors";

type Props = {};

const Toolbar: React.FC<Props> = () => {
  const tasks = useSelector(listByFilter);

  const onClickComplete = () => {
    const tumbler = tasks.some((el) => !el.completed);
    completeAllTodoDB(tumbler);
  };

  const onClickClear = () => {
    deleteAllTodos();
  };

  return (
    <ToolbarStyled>
      <ToolbarButton
        complete
        onClick={onClickComplete}
        type="button"
        value="Complete All"
      ></ToolbarButton>
      <ToolbarButton
        onClick={onClickClear}
        type="button"
        value="Clear All"
      ></ToolbarButton>
    </ToolbarStyled>
  );
};

export default Toolbar;
