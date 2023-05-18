import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(NavLink)`
  color: black;
  &.active {
    color: #00acee;
    text-decoration-line: underline;
  }
`;
