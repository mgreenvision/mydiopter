import React from "react";
import styled from "styled-components";

export default function DataBar({ lastClicked, plusMinus, setPlusMinus }) {
  return (
    <GridWrapper>
      <FlexWrapper>
        <PlusMinusIcon
          isActive={!plusMinus}
          onClick={() => setPlusMinus(false)}
        >
          -
        </PlusMinusIcon>
        <DataView>{lastClicked}</DataView>
        <PlusMinusIcon isActive={plusMinus} onClick={() => setPlusMinus(true)}>
          +
        </PlusMinusIcon>
      </FlexWrapper>
      <InfoText>LAST CLICKED</InfoText>
    </GridWrapper>
  );
}

const GridWrapper = styled.div`
  display: grid;
  height: 100%;
  grid-template-rows: 1fr 34px 14px 1fr;
  grid-template-columns: 100vw;

  grid-template-areas:
    "."
    "bar"
    "info"
    ".";
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  grid-area: bar;
`;
const PlusMinusIcon = styled.div`
  height: 34px;
  width: 34px;
  text-align: center;
  line-height: 34px;
  border-radius: 17px;
  padding-bottom: 1px;
  background-color: var(--color-grey);
  opacity: ${(props) => (props.isActive ? "100%" : "36%")};
  color: white;
  font-family: var(--font-text);
  font-size: var(--text-size-navbar);
`;

const DataView = styled.div`
  border-radius: 17px;
  border: solid 1px var(--color-grey);
  color: var(--color-grey);
  font-family: var(--font-text);
  font-size: var(--text-size-footer);
  text-align: center;
  background-color: white;
  padding: 2px 30px;
`;

const InfoText = styled.div`
  height: 14px;
  font-size: var(--text-size-info);
  color: var(--color-grey);
  text-align: center;
  grid-area: info;
`;
