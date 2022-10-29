import React from "react";
import styled from "styled-components";

export default function AstgLines({
  angle,
  num1,
  num2,
  clickTrigger,
  opacityLevel,
  finished,
}) {
  return (
    <Wrapper angle={angle} opacity={opacityLevel} onClick={clickTrigger}>
      <Num angle={-angle}>{num1}</Num>
      {/* {finished && (
        <ReportNum angle={-angle} opacity={opacityLevel}>
          <Data>{Math.round(opacityLevel * 100)}%</Data>
        </ReportNum>
      )} */}
      <LineGroup>
        <Line />
        <Line />
        <Line />
      </LineGroup>
      {/* {finished && (
        <ReportNum angle={-angle} opacity={opacityLevel} second>
          <Data>{Math.round(opacityLevel * 100)}%</Data>
        </ReportNum>
      )} */}

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

const ReportNum = styled(Num)`
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: var(--circle-height);
  max-height: var(--circle-height);
  border-radius: 50%;
  border: solid 1px black;
  opacity: ${(props) => props.opacity};
  transform: rotate(${(props) => props.angle}deg)
    /*  translate(${(props) =>
      props.second ? "100px, -100px" : "-100px, 100px"}) */;
  position: absolute;
  top: ${(props) => (props.second ? "0" : "10%")};
  bottom: ${(props) => (props.second ? "10%" : "0")};
  left: ${(props) => (props.second ? "0" : "10%")};
  right: ${(props) => (props.second ? "10%" : "0")};
`;

const Data = styled.p`
  font-size: var(--text-size-running-text);
  font-weight: 700;
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
