import React from "react";
import styled from "styled-components";
import { NavbarIcon } from "../branded";
import IconMenu from "../../Media/Icon-menu.svg";
import IconSwitch from "../../Media/Icon-switch.svg";
import IconRefresh from "../../Media/Icon-refresh.svg";
import { Link } from "react-router-dom";

function Navbar({ refreshPage, test, topic = "" }) {
  return (
    <NavbarWrapper>
      <IconGroup>
        {topic && (
          <React.Fragment>
            <NavbarIcon
              src={IconRefresh}
              left="20px"
              onClick={() => refreshPage}
            />
            <Link to={test === "ASTG" ? "/dichotomy" : "/astg"}>
              <NavbarIcon src={IconSwitch} left="20px" />
            </Link>
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

const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: var(--navbar-height);
  background-color: var(--color-menu-bg);
`;

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

const IconGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  justify-content: ${(props) => props.justify};
  width: 25vw;
`;
