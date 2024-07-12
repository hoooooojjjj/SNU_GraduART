import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { NavLink as NavigationLink } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: #6d6d6d;
  padding: 40px 20px;
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
  margin: 0 auto;
  flex-wrap: wrap;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 15dvw;
`;

export const Title = styled.h4`
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Text = styled.p((props) => ({
  margin: `20px 0`,
}));

export const NavLink = styled(NavigationLink)`
  color: white;
  text-decoration: none;
  margin: 5px 0;
  display: block;
  &:hover {
    text-decoration: underline;
  }
`;
