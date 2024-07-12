import { css } from "@emotion/react";
import React from "react";
import {
  FooterContainer,
  FooterContent,
  Column,
  Title,
  Text,
  NavLink,
} from "./Footer.js";

const Footer = () => {
  return (
    <FooterContainer>
      <Column>
        <img
          style={{ margin: "0 auto" }}
          width={`60%`}
          src={`${import.meta.env.VITE_PUBLIC_URL}/assets/textLogo_LowRes.png`}
          alt="Graduart Logo"
        />
      </Column>
      <FooterContent>
        <Column>
          <Title>About Us</Title>
          <Text>상담/주문전화</Text>
          <Text>010-1234-5678</Text>
          <Text>CS 운영시간</Text>
          <Text>월-금 09:00-18:00</Text>
        </Column>
        <Column>
          <Title>작품 등록</Title>
          <Text>문의 이메일</Text>
          <Text>
            <NavLink to="mailto:snugraduart@naver.com">
              snugraduart@naver.com
            </NavLink>
          </Text>
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
            width={`60%`}
            src={`${import.meta.env.VITE_PUBLIC_URL}/assets/likeLion.png`}
            alt="LikeLion Logo"
          />
          <Title>Join Us</Title>
          <NavLink to="https://facebook.com">Facebook</NavLink>
          <NavLink to="https://instagram.com">Instagram</NavLink>
        </Column>
      </FooterContent>
      <Text style={{ margin: "0 auto" }}>
        SNUgraduART @ 2024. All rights reserved.
      </Text>
    </FooterContainer>
  );
};

export default Footer;
