import React from "react";
import styled from "styled-components";
import {
  Button,
  ButtonText,
  StarWrapper,
  MiddleCircle,
} from "../../Components/branded";
import AstgLines from "./AstgLines";
import ReportData from "./ReportData";

export default function ASTGReport({ opacities }) {
  const clickNoTrigger = () => {};

  return (
    <ReportLayout>
      <StarWrapper>
        <AstgLines
          angle="120"
          num1="1"
          num2="7"
          clickTrigger={clickNoTrigger}
          opacityLevel={opacities[0]}
        />
        <AstgLines
          angle="150"
          num1="2"
          num2="8"
          clickTrigger={clickNoTrigger}
          opacityLevel={opacities[1]}
        />
        <AstgLines
          angle="0"
          num1="9"
          num2="3"
          clickTrigger={clickNoTrigger}
          opacityLevel={opacities[2]}
        />

        <AstgLines
          angle="30"
          num1="10"
          num2="4"
          clickTrigger={clickNoTrigger}
          opacityLevel={opacities[3]}
        />
        <AstgLines
          angle="60"
          num1="11"
          num2="5"
          clickTrigger={clickNoTrigger}
          opacityLevel={opacities[4]}
        />
        <AstgLines
          angle="90"
          num1="12"
          num2="6"
          clickTrigger={clickNoTrigger}
          opacityLevel={opacities[5]}
        />

        <MiddleCircle />
      </StarWrapper>
      <ReportData data={opacities} />
      <ButtonPlace>
        <Button small>
          <ButtonText>Done</ButtonText>
        </Button>
      </ButtonPlace>
    </ReportLayout>
  );
}

const ReportLayout = styled.div`
  height: var(--layout-height);
  grid-area: layout;
  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: 50px 100vw auto calc(
      var(--footer-height) + var(--button-small-height)
    );
  grid-template-areas:
    " . "
    " star "
    " report-data "
    " button ";
`;

const ButtonPlace = styled.div`
  grid-area: button;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
