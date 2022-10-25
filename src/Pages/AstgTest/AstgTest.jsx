import React from "react";
import styled from "styled-components";
import { Button, ButtonText } from "../../Components/branded";
import DataBar from "../../Components/DataBar/DataBar";
import Navbar from "../../Components/Navbar/Navbar";

function AstgTest() {
  return (
    <ASTGLayout>
      <NavbarPlace topic="ASTG" />
      <DataWrapper>
        <DataBar direction="12/6" percentage="70" />
      </DataWrapper>
      <StarWrapper />
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
  place-items: center;
  background-color: crimson;
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
