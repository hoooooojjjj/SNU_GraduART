import React from "react";
import Header from "../../components/Header/Header.jsx";
import {
  Container,
  MainContainer,
  ContentContainer,
  MainText,
  ButtonContainer,
  GreyButton,
  GreenButton,
} from "./PaymentSuccessStyle.js";

function PaymentSuccess() {
  return (
    <Container>
      <Header></Header>
      <MainContainer>
        <ContentContainer>
          <img src="/assets/paymentSuccessIcon.svg"></img>
          <MainText>결제가 완료되었습니다.</MainText>
          <ButtonContainer>
            <GreyButton>메인페이지로</GreyButton>
            <GreenButton>구매내역으로</GreenButton>
          </ButtonContainer>
        </ContentContainer>
      </MainContainer>
    </Container>
  );
}

export default PaymentSuccess;
