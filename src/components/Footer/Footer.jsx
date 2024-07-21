import React from "react";
import {
  FooterContainer,
  FooterContent,
  Column,
  Title,
  Text,
  NavLink, FooterLogo,
} from "./Footer.js";

const navigateToURL = () => {
  window.open("https://snulion.com", '_blank', "noreferrer").focus()
}

const Footer = () => {
  return (
    <FooterContainer>
      <Column>
        <FooterLogo>GraduART</FooterLogo>
      </Column>
      <FooterContent>
        <Column>
          <Title>Created & Operated By</Title>
          <Text>박민서·유호준·김대유·김민석</Text>
        </Column>
        <Column>
          <Title>작품 등록 문의</Title>
            <NavLink to="mailto:snugraduart@naver.com">
              snugraduart@naver.com
            </NavLink>
        </Column>
        <Column>
          <Title>운영정책</Title>
          <NavLink to="/terms">이용약관</NavLink>
          <NavLink to="/privacy">개인정보처리방침</NavLink>
        </Column>
        <Column>
          <Title>Made by</Title>
          <img
            style={{ margin: "0 auto" }}
            width={`100%`}
            src={`/assets/likeLion.png`}
            alt="LikeLion Logo"
            onClick={navigateToURL}
          />
        </Column>
      </FooterContent>
      <Text style={{margin: "0 auto"}}>
        GraduART @ 2024. All rights reserved.
      </Text>
    </FooterContainer>
  );
};

export default Footer;
