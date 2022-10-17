import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterWrapper>
      <Text>Dr. Michal Green</Text>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  grid-area: footer;
  background-color: var(--color-menu-bg);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: var(--footer-height);
`;

const Text = styled.span`
  font-family: var(--font-topic);
  font-weight: 700;
  color: white;

  height: 26px;
  font-size: var(--text-size-footer);
  font-stretch: condensed;
  text-align: center;
`;
