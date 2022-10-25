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

export const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: ${(props) =>
    props.small ? "var(--button-small-height)" : "var(--button-height)"};
  border-radius: ${(props) => (props.small ? "17px" : "29.5px")};
  border: solid 1px var(--color-text);
  background-color: white;
  padding: ${(props) =>
    props.small ? "var(--button-small-padding)" : "var(--button-padding)"};
`;

export const ButtonText = styled.span`
  font-family: ${(props) =>
    props.start ? "var(--font-text)" : "var(--font-topic)"};
  font-weight: ${(props) => (props.start ? "400" : "700")};
  font-stretch: condensed;
  font-size: ${(props) =>
    props.start ? "var(--text-size-button)" : "var(--text-size-footer)"};

  height: ${(props) =>
    props.start
      ? "var(--button-text-height)"
      : "var(--button-small-text-height)"};

  text-align: center;
  color: var(--color-text);
`;
