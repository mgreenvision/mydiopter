import styled from "styled-components";

export const NavbarIcon = styled.img`
  height: 22px;
  margin-left: ${(props) => props.left};
  margin-right: ${(props) => props.right};
`;

export const HeaderText = styled.h1`
  text-align: center;
  font-family: var(--font-topic);
  font-size: var(--text-size-h1);
  font-weight: 700;
  color: var(--color-text);
`;

export const ColorBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(
    ${(props) => props.red},
    ${(props) => props.green},
    ${(props) => props.blue}
  );
`;
