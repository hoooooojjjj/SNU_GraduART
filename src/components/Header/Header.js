import styled from '@emotion/styled'
import {NavLink} from "react-router-dom";
import React from "react";
export const Head = styled.header`
    position: absolute;
    margin-top: 0.5dvw;
    margin-left: 15dvw;
    background: transparent;
    color: white;
    z-index: 10; //꼭대기에 올리기
`

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
  justify-content: center;
`;

export const Seperator = styled.div`
  margin-right: 1dvw;
`;
export const StyledNavLink = styled(NavLink)`
  color: lightgray;
  text-decoration: none;
  padding-right: 0.75dvw;
  padding-left: 0.75dvw;
  font-weight: normal;
  font-size: medium;

  &.active {
    color: black;
    font-weight: bold;
    text-decoration: underline;
  }
`;

export const HomeStyledNavLink = styled(NavLink)((props) => ({
  color: "lightgray",
  textDecoration: "none",
  fontWeight: "normal",
  paddingTop: "0.5dvh",
  marginRight: props.margin,
  visibility: props.visible,
}));
