import React, { useContext } from "react";
import Header from "../../components/Header/Header.jsx";
import {
  Container,
  MainContainer,
  ContentContainer,
  MainText,
  ButtonContainer,
  GreyButton,
} from "./PaymentSuccessStyle.js";
import { RedButton } from "./PaymentFailStyle.js";
import { userContext } from "../../App.jsx";
import { useNavigate } from "react-router-dom";

export const PaymentFail = () => {
  const [user] = useContext(userContext);

  const navigate = useNavigate();

  const onClickToMain = () => {
    navigate("/");
  };

  const onClickToPurchased = () => {
    navigate("/cart");
  };

  return (
    <Container>
      <Header></Header>
      <MainContainer>
        <ContentContainer>
          <img src="/assets/paymentFailIcon.svg"></img>
          <MainText>결제가 실패하였습니다.</MainText>
          <ButtonContainer>
            <GreyButton onClick={onClickToMain}>메인페이지로</GreyButton>
            <RedButton onClick={onClickToPurchased}>장바구니로</RedButton>
          </ButtonContainer>
        </ContentContainer>
      </MainContainer>
    </Container>
  );
};

export default PaymentFail;
