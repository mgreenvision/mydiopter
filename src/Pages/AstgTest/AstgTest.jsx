import React from "react";
import styled from "styled-components";
import {
  Button,
  ButtonText,
  StarWrapper,
  MiddleCircle,
} from "../../Components/branded";
import DataBar from "../../Components/DataBar/DataBar";
import Navbar from "../../Components/Navbar/Navbar";
import AstgLines from "./AstgLines";
import ASTGReport from "./ASTGReport";

function AstgTest() {
  const [opacities, setOpacities] = React.useState([1, 1, 1, 1, 1, 1]);
  const [plusMinus, setPlusMinus] = React.useState(false);
  const [lastClicked, setLastClicked] = React.useState(" - / - ");
  const [percentage, setPercentage] = React.useState(" - ");
  const [finished, setFinished] = React.useState(false);

  const clickTrigger = (num) => {
    /* this part is computing the change in opacity */
    let temp = opacities;
    if (plusMinus && temp[num - 1] < 1) {
      temp[num - 1] = temp[num - 1] + 0.1;
    } else if (!plusMinus && temp[num - 1] >= 0.1) {
      temp[num - 1] = temp[num - 1] - 0.1;
    }
    /* this part is setting the change to UI elements (DataBar, ASTG star) */
    setOpacities(temp);
    setLastClicked(`${num}/${num + 6}`);
    setPercentage(Math.round(temp[num - 1] * 100));
    console.log(opacities);
  };

  const finishTest = (opacities) => {
    const roundedOpacities = opacities.map(rounding);
    function rounding(value, index, array) {
      return Math.round(value * 10) / 10;
    }
    console.log(roundedOpacities);
    setFinished(true);
  };

  return (
    <ASTGLayout>
      <NavbarPlace topic="ASTG" />
      {finished ? (
        <ASTGReport opacities={opacities} finished={finished} />
      ) : (
        <TestLayout>
          <DataWrapper>
            <DataBar
              plusMinus={plusMinus}
              setPlusMinus={setPlusMinus}
              direction={lastClicked}
              percentage={percentage}
            />
          </DataWrapper>
          <StarWrapper>
            <AstgLines
              angle="120"
              num1="1"
              num2="7"
              clickTrigger={() => clickTrigger(1)}
              opacityLevel={opacities[0]}
            />
            <AstgLines
              angle="150"
              num1="2"
              num2="8"
              clickTrigger={() => clickTrigger(2)}
              opacityLevel={opacities[1]}
            />
            <AstgLines
              angle="0"
              num1="9"
              num2="3"
              clickTrigger={() => clickTrigger(3)}
              opacityLevel={opacities[2]}
            />

            <AstgLines
              angle="30"
              num1="10"
              num2="4"
              clickTrigger={() => clickTrigger(4)}
              opacityLevel={opacities[3]}
            />
            <AstgLines
              angle="60"
              num1="11"
              num2="5"
              clickTrigger={() => clickTrigger(5)}
              opacityLevel={opacities[4]}
            />
            <AstgLines
              angle="90"
              num1="12"
              num2="6"
              clickTrigger={() => clickTrigger(6)}
              opacityLevel={opacities[5]}
            />

            <MiddleCircle />
          </StarWrapper>
          <ButtonWrapper>
            <FinishButton small onClick={() => finishTest(opacities)}>
              <ButtonText>Finish</ButtonText>
            </FinishButton>
          </ButtonWrapper>
        </TestLayout>
      )}
    </ASTGLayout>
  );
}

export default AstgTest;

const ASTGLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: var(--navbar-height) var(--layout-height);
  grid-template-areas:
    " navbar "
    " layout ";
`;

const TestLayout = styled.div`
  height: var(--layout-height);
  grid-area: layout;
  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: 20vh 100vw auto;
  grid-template-areas:
    " click-data "
    " star "
    " button ";
`;

const NavbarPlace = styled(Navbar)`
  grid-area: navbar;
`;

const DataWrapper = styled.div`
  grid-area: click-data;
  place-items: center;
`;

const ButtonWrapper = styled.div`
  grid-area: button;
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: flex-end;
`;

const FinishButton = styled(Button)`
  margin-bottom: var(--footer-height);
`;
