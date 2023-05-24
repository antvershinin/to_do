import React from "react";
import { ToolbarButton, ToolbarStyled } from "./Toolbar.styled";
import { completeAllTodoDB, deleteAllTodosDB } from "../api/TodoAPI";
import { useSelector, useDispatch } from "react-redux";
import { listByFilter } from "../../redux/selectors";
import { fillState } from "../../redux/todoSlice";

type Props = {};

const Toolbar: React.FC<Props> = () => {
  const tasks = useSelector(listByFilter);
  const dispatch = useDispatch();

  const onClickComplete = async () => {
    const tumbler = tasks.some((el) => !el.completed);
    try {
      const response = await completeAllTodoDB(tumbler);
      dispatch(fillState(response.data));
    } catch (err) {
      console.log(err);
    }
  };

  const onClickClear = async () => {
    try {
      const response = await deleteAllTodosDB();
      dispatch(fillState(response.data));
    } catch (err) {
      console.log(err);
    }
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
