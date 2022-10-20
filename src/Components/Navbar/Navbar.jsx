import React from "react";
import styled from "styled-components";
import { NavbarIcon } from "../branded";
import IconMenu from "../../Media/Icon-menu.svg";
import IconSwitch from "../../Media/Icon-switch.svg";
import IconRefresh from "../../Media/Icon-refresh.svg";

function Navbar({ test, topic = "" }) {
  return (
    <NavbarWrapper>
      <IconGroup>
        {test && (
          <React.Fragment>
            <NavbarIcon src={IconRefresh} border left="20px" />
            <NavbarIcon src={IconSwitch} left="20px" />
          </React.Fragment>
        )}
      </IconGroup>
      <Header>{topic}</Header>
      <IconGroup justify="right">
        <NavbarIcon src={IconMenu} right="20px" />
      </IconGroup>
    </NavbarWrapper>
  );
}

export default Navbar;

const Header = styled.span`
  height: 36px;
  font-size: var(--text-size-navbar);
  color: white;
  font-weight: 700;
  font-stretch: condensed;
  text-align: center;
  font-family: var(--font-topic);
  width: 50vw;
`;

const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: var(--navbar-height);
  background-color: var(--color-menu-bg);
`;

const IconGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  justify-content: ${(props) => props.justify};
  width: 25vw;
`;
