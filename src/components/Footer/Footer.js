import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { NavLink as NavigationLink } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: #6d6d6d;
  padding: 30px 8dvw;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 7dvh;
  font-family: "Pretendard Variable";
`;

export const FooterLogo = styled.div({
    color: "white",
    fontFamily: 'DM Serif Display',
    fontWeight: 'Bold',
    fontSize:'23px',
    textDecoration: "none",
})

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 10px;
  width: 15dvw;
`;

export const Title = styled.h4`
  font-weight: bold;
  font-size: 17px;
`;

export const Text = styled.p((props) => ({
  fontSize: '15px',
  fontWeight: 'light',
  margin: `10px 0`,
}));

export const NavLink = styled(NavigationLink)`
  color: white;
  text-decoration: none;
  margin: 10px 0;
  font-size: 15px;
  font-weight: normal;
  display: block;
  &:hover {
    text-decoration: underline;
  }
`;
