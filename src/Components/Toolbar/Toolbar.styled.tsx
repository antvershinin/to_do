import styled from "styled-components";

export const ToolbarStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const ToolbarButton = styled.input<{ complete?: boolean }>`
  background-color: #fff;
  border: none;
  cursor: pointer;
  font-family: "Caveat";
  font-size: 25px;

  :hover {
    color: ${(props) => (props.complete ? `#26e05b` : "red")};
  }
`;