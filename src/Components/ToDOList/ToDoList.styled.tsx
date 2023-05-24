import styled from "styled-components";

export const TaskStyled = styled.div<{ completed: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  border-bottom: 2px dashed lightgray;
  height: 30px;

  .button__complete:hover {
    color: #26e05b;
    cursor: pointer;
  }

  .button__remove:hover {
    color: red;
    cursor: pointer;
  }

  .task {
    cursor: pointer;
    font-size: 30px;
    text-decoration: ${(props) => (props.completed ? "line-through" : "null")};
  }
  .form__input {
    width: 100%;
    height: 50px;
    padding-left: 10px;
    border: 1px dashed;
    font-family: "Caveat";
    font-size: 25px;
  }
`;
