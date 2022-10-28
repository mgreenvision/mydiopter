import React from "react";
import styled from "styled-components";
import {
  Button,
  ButtonText,
  StarWrapper,
  MiddleCircle,
} from "../../Components/branded";
import AstgLines from "./AstgLines";

export default function ASTGReport({ opacities, finished }) {
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
          finished={finished}
        />
        <AstgLines
          angle="150"
          num1="2"
          num2="8"
          clickTrigger={clickNoTrigger}
          opacityLevel={opacities[1]}
          finished={finished}
        />
        <AstgLines
          angle="0"
          num1="9"
          num2="3"
          clickTrigger={clickNoTrigger}
          opacityLevel={opacities[2]}
          finished={finished}
        />

        <AstgLines
          angle="30"
          num1="10"
          num2="4"
          clickTrigger={clickNoTrigger}
          opacityLevel={opacities[3]}
          finished={finished}
        />
        <AstgLines
          angle="60"
          num1="11"
          num2="5"
          clickTrigger={clickNoTrigger}
          opacityLevel={opacities[4]}
          finished={finished}
        />
        <AstgLines
          angle="90"
          num1="12"
          num2="6"
          clickTrigger={clickNoTrigger}
          opacityLevel={opacities[5]}
          finished={finished}
        />

        <MiddleCircle />
      </StarWrapper>
    </ReportLayout>
  );
}

const ReportLayout = styled.div`
  height: var(--layout-height);
  grid-area: layout;
  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: 50px 100vw auto 20vh;
  grid-template-areas:
    " . "
    " star "
    " report-data "
    " button ";
`;
