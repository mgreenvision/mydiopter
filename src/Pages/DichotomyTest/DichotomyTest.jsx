import React from "react";
import styled from "styled-components";
import Navbar from "../../Components/Navbar/Navbar";
import { ColorBox } from "../../Components/branded";
import { HeaderText } from "../../Components/branded";

function DichotomyTest() {
  return (
    <DichotomyLayout>
      <NavbarPlace topic="DICHOTOMY" />
      <CTA>
        <HeaderText>Pick stronger color</HeaderText>
      </CTA>
      <UpperColorBox red="200" green="200" blue="200">
        <OuterCircle />
        <InnerCircle />
      </UpperColorBox>
      <LowerColorBox red="100" green="100" blue="100">
        {" "}
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
    " cta "
    " upper-color "
    " lower-color ";
`;

const NavbarPlace = styled(Navbar)`
  grid-area: navbar;
`;

const CTA = styled.div`
  grid-area: cta;
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
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: solid 20px #000;
  position: relative;
`;

const InnerCircle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: solid 10px #000;
  position: absolute;
`;
