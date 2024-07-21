import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import React from "react";
export const Head = styled.header`
  padding: 1.5dvh 0;
  width: 100dvw;
  z-index: 10; //꼭대기에 올리기
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  gap: 2dvw;
  margin: 0 1dvh 0 0;
`;

export const NavBar = styled.nav`
  margin-top: 1.2dvh;
  margin-bottom: 1.2dvh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Seperator = styled.div`
  margin-right: 1dvw;
`;
export const StyledNavLink = styled(NavLink)`
  color: gray;
  text-decoration: none;
  padding-right: 0.75dvw;
  padding-left: 0.75dvw;
  font-weight: normal;
  font-size: medium;

  &.active {
    color: black;
    font-weight: bold;
  }
`;

export const HomeStyledNavLink = styled(NavLink)((props) => ({
  color: "dimgrey",
  fontFamily: 'DM Serif Display',
  fontWeight: 'Bold',
  fontSize:'23px',
  textDecoration: "none",
  marginLeft: props.margin,
  marginRight: '10dvw'
}));

export const Buttons = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  gap: 2dvw;
  margin: 0 1dvh 0 0;
`