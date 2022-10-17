import React from "react";
import styled from "styled-components";
import Footer from "../../Components/Footer";

function Home() {
  return (
    <LayoutGrid>
      <Header>
        <HeaderText>FASTEST</HeaderText>
      </Header>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <ButtonWrapper>
        <StartButton>
          <Icon />
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
  grid-template-columns: auto;
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
  margin: 60px auto 79px;
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
  justify-content: center;
  width: 100vw;
  height: 100vw;
  background-color: var(--color-menu-bg2);
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
  margin: 79px auto 52px;
  border-radius: 29.5px;
  border: solid 1px var(--color-text);
  background-color: white;
`;

const Icon = styled.img`
  height: var(--text-size-running-text);
  color: var(--color-text);
`;

const Logo = styled.img`
  background-color: var(--color-bg2);
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
