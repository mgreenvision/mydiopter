import React from "react";
import styled from "styled-components";
import Navbar from "../../Components/Navbar/Navbar";
import { ColorBox } from "../../Components/branded";
import { HeaderText } from "../../Components/branded";
import greenPath from "../../Utils/greenPath.json";

function DichotomyTest() {
  const [colorPath, setColorPath] = React.useState("");
  const [stepCount, setStepCount] = React.useState(0);

  const choosePath = (colorPath, stepCount) => {
    let nextStep;
    if (colorPath === "green") {
      let nextStep = greenPath[stepCount];
    } else {
      console.log("error");
    }
    return nextStep;
  };

  return (
    <DichotomyLayout>
      <NavbarPlace topic="DICHOTOMY" test="dichotomy" />
      <Header>
        <HeaderText>Pick stronger color</HeaderText>
      </Header>
      <UpperColorBox
        red="0"
        green="255"
        blue="0"
        onClick={(stepCount) => {
          setColorPath("green");
          setStepCount(stepCount + 1);
          choosePath(colorPath, stepCount);
        }}
      >
        <OuterCircle />
        <InnerCircle />
      </UpperColorBox>
      <LowerColorBox
        color="red"
        red="255"
        green="0"
        blue="0"
        onClick={(color) => setColorPath(color)}
      >
        <OuterCircle />
        <InnerCircle />
      </LowerColorBox>
    </DichotomyLayout>
  );
}

export default DichotomyTest;

const DichotomyLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: var(--navbar-height) auto 1fr 1fr;
  grid-template-areas:
    " navbar "
    " header "
    " upper-color "
    " lower-color ";
`;

const NavbarPlace = styled(Navbar)`
  grid-area: navbar;
`;

const Header = styled.div`
  grid-area: header;
  display: flex;
  flex-direction: row;
  place-items: center;
`;

const UpperColorBox = styled(ColorBox)`
  grid-area: upper-color;
  place-items: center;
`;

const LowerColorBox = styled(ColorBox)`
  grid-area: lower-color;
  place-items: center;
`;

const OuterCircle = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  border: solid 20px #000;
  position: relative;
`;

const InnerCircle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: solid 10px #000;
  position: absolute;
`;
