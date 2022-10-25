import React from "react";
import styled from "styled-components";
import Footer from "../../Components/Footer";
import { HeaderText, Button, ButtonText } from "../../Components/branded";
import IconFocus from "../../Media/Icon-focus.svg";
import IconEye from "../../Media/Icon-eye.svg";
import IconTouch from "../../Media/Icon-touch.svg";

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
        <Button>
          <ButtonText start>
            <Touch src={IconTouch} />
            Start
          </ButtonText>
        </Button>
      </ButtonWrapper>
      <Footer></Footer>
    </LayoutGrid>
  );
}

export default Home;

const LayoutGrid = styled.div`
  height: 100vh;
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

const LogoWrapper = styled.div`
  grid-area: logo;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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

const Frame = styled.img`
  width: 90vw;
`;

const Eye = styled.img`
  width: 60vw;
  position: absolute;
  top: 31%;
`;

const Touch = styled.img`
  height: calc(var(--button-text-height) - 10);
  margin-right: 20px;
`;
