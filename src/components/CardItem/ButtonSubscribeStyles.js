import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  display: block;
  width: 196px;
  height: 50px;
  margin-right: auto;
  margin-left: auto;
  padding: 14px 28px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border: transparent;
  text-transform: uppercase;
  border-radius: 10.3108px;
  &:hover {
    background-color: #c5a9e2;
  }
  &.green {
    background: #5cd3a8;
    &:hover {
      background-color: #318567;
    }
  }
`;
