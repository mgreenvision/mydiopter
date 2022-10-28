import React from "react";
import styled from "styled-components";

export default function AstgLines({
  angle,
  num1,
  num2,
  clickTrigger,
  opacityLevel,
}) {
  return (
    <Wrapper angle={angle} opacity={opacityLevel} onClick={clickTrigger}>
      <Num angle={-angle}>{num1}</Num>
      <LineGroup>
        <Line />
        <Line />
        <Line />
      </LineGroup>
      <Num angle={-angle}>{num2}</Num>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 95vw;
  transform: translate(-50%, -50%) rotate(${(props) => props.angle}deg);
  opacity: ${(props) => props.opacity};
  position: absolute;
  top: 50%;
  left: 50%;
`;

const Num = styled.div`
  width: 30px;
  height: var(-button-text-height);
  font-size: var(--text-size-button);
  font-family: var(--font-text);
  transform: rotate(${(props) => props.angle}deg);
`;

const LineGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 17px;
  width: 100%;
  margin: 0px 10px;
`;

const Line = styled.div`
  height: 3px;
  background-color: black;
  width: 100%;
`;
