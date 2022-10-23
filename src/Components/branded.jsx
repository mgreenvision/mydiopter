import styled from "styled-components";

export const NavbarIcon = styled.img`
  object-fit: contain;
  height: 22px;
  margin-left: ${(props) => props.left};
  margin-right: ${(props) => props.right};
  border: ${(props) => (props.border ? "solid 2px white" : "none")};
`;
