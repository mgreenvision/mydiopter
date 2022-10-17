import React from "react";
import styled from "styled-components";
import Footer from "../../Components/Footer";
import IconFocus from "../../Media/Icon-focus.svg";
import IconEye from "../../Media/Icon-eye.svg";

function Home() {
  return (
    <LayoutGrid>
      <Header>
        <HeaderText>FASTESTS</HeaderText>
      </Header>
      <LogoWrapper>
        <Frame src={IconFocus} />
        <Eye src={IconEye} />
      </LogoWrapper>
      <ButtonWrapper>
        <StartButton>
          <ButtonText>Start</ButtonText>
        </StartButton>
      </ButtonWrapper>
      <Footer></Footer>
    </LayoutGrid>
  );
}

export default Home;

const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: 1fr 100vw 1fr var(--footer-height);
  grid-template-areas:
    " header "
    " logo "
    " button "
    " footer ";
`;

const Header = styled.div`
  grid-area: header;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10vh 0px 0px;
  height: 65px;
`;

const HeaderText = styled.span`
  font-family: var(--font-topic);
  font-size: var(--text-size-h1);
  font-weight: 700;
  color: var(--color-text);
`;

const LogoWrapper = styled.div`
  grid-area: logo;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100vw;
  height: 100vw;
  position: relative;
`;

const ButtonWrapper = styled.div`
  grid-area: button;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StartButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 59px;
  margin: 9vh auto 6vh;
  border-radius: 29.5px;
  border: solid 1px var(--color-text);
  background-color: white;
`;

const Frame = styled.img`
  width: 85vw;
`;

const Eye = styled.img`
  width: 60vw;
  position: absolute;
  top: 31%;
`;

const ButtonText = styled.span`
  font-family: var(--font-text);
  font-size: var(--text-size-button);
  width: 212px;
  height: 38px;
  /* padding: 3.3px 170.5px 3.3px 19px; */
  text-align: center;
  color: var(--color-text);
`;
