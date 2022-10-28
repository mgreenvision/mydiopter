import React from "react";
import styled from "styled-components";
import { Button, ButtonText } from "../../Components/branded";
import DataBar from "../../Components/DataBar/DataBar";
import Navbar from "../../Components/Navbar/Navbar";
import AstgLines from "./AstgLines";

function AstgTest() {
  const [opacities, setOpacities] = React.useState([1, 1, 1, 1, 1, 1]);
  const [plusMinus, setPlusMinus] = React.useState(false);
  const [lastClicked, setLastClicked] = React.useState(" - / - ");
  const [percentage, setPercentage] = React.useState(" - ");

  const clickTrigger = (num) => {
    console.log(num);
    let temp = opacities;
    if (plusMinus && temp[num - 1] < 1) {
      temp[num - 1] = temp[num - 1] + 0.1;
    } else if (!plusMinus && temp[num - 1] >= 0.1) {
      temp[num - 1] = temp[num - 1] - 0.1;
    }
    setOpacities(temp);
    setLastClicked(`${num}/${num + 6}`);
    setPercentage(Math.round(temp[num - 1] * 100));
    console.log(opacities);
  };

  return (
    <ASTGLayout>
      <NavbarPlace topic="ASTG" />
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
        <FinishButton small>
          <ButtonText>Finish</ButtonText>
        </FinishButton>
      </ButtonWrapper>
    </ASTGLayout>
  );
}

export default AstgTest;

const ASTGLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: var(--navbar-height) 20vh 100vw auto;
  grid-template-areas:
    " navbar "
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

const StarWrapper = styled.div`
  grid-area: star;
  position: relative;

  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;
`;

const MiddleCircle = styled.div`
  width: 50px;
  height: 50px;
  background-color: black;
  border-radius: 50%;
  border: solid 6px white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
