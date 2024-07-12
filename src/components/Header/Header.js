import styled from "@emotion/styled";
import { Link, NavLink } from "react-router-dom";
export const Head = styled.header`
  height: 6vh;
  background-color: darkgrey; //랜딩페이지에 붙일 때는 transparent;
  padding: 10px;
  color: lightgray;
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

export const HeaderIcons = styled.li`
  width: 23px;
  height: 23px;
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
