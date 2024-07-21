import React from "react";
import {
  Container,
  LeftTopContainer,
  Close,
  KakaoPayImg,
  MainContainer,
  MainText,
  Button,
} from "./PaymentApproveStyle.js";

function PaymentApprove() {
  return (
    <Container>
      <LeftTopContainer>
        <Close />
        <KakaoPayImg src={`/assets/kakaopayImg.png`} alt="카카오페이 이미지" />
      </LeftTopContainer>
      <MainContainer>
        <MainText>
          카카오페이 결제 후, <br></br>
          <b>결제완료 </b>버튼을 눌러주세요.
        </MainText>
        <Button>결제완료</Button>
      </MainContainer>
    </Container>
  );
}

export default PaymentApprove;
