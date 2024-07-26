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

  return (
    <Container>
      <Header></Header>
      <MainContainer>
        <ContentContainer>
          <img src="/assets/paymentFailIcon.svg"></img>
          <MainText>결제가 실패하였습니다.</MainText>
          <ButtonContainer>
            <GreyButton>메인페이지로</GreyButton>
            <RedButton>장바구니로</RedButton>
          </ButtonContainer>
        </ContentContainer>
      </MainContainer>
    </Container>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
  },
  button: {
    fontSize: "2rem",
    padding: "20px 40px",
    backgroundColor: "orange",
    color: "dimgrey",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default PaymentFail;
