import React from "react";
import Header from "../../components/Header/Header.jsx";
import { Container, ContentContainer, CartText } from "../Cart/CartStyle.js";
import {
  RefundItemContainer,
  RefundImgContainer,
  RefundImg,
  RefundInfoContainer,
  RefundItemText,
  RefundInfoText,
  RefundInfoBox,
  RefundInfoTextBox,
  RefundDetailInfoText,
  RefundInfoDataBox,
  RefundButton,
  RefundInfoDataText,
  RefundImgWrap,
} from "./RefundStyle.js";

function Refund() {
  return (
    <Container>
      <Header></Header>
      <ContentContainer>
        <CartText>취소/환불신청</CartText>
        <RefundItemContainer>
          <RefundImgContainer>
            <RefundImgWrap>
              <RefundImg path={`/assets/cartImg1.jpg`}></RefundImg>
            </RefundImgWrap>
            <RefundItemText>장면-표백하지 않은 흰색 | 김륜아</RefundItemText>
          </RefundImgContainer>
          <RefundInfoContainer>
            <RefundInfoText>주문정보</RefundInfoText>
            <RefundInfoBox>
              <RefundInfoTextBox>
                <RefundDetailInfoText>금액</RefundDetailInfoText>
                <RefundDetailInfoText>결제수단</RefundDetailInfoText>
                <RefundDetailInfoText>결제승인시각</RefundDetailInfoText>
              </RefundInfoTextBox>
              <RefundInfoDataBox>
                <RefundInfoDataText>600,000원</RefundInfoDataText>
                <RefundInfoDataText>카드</RefundInfoDataText>
                <RefundInfoDataText>2024.07.18 01:42</RefundInfoDataText>
              </RefundInfoDataBox>
            </RefundInfoBox>
          </RefundInfoContainer>
        </RefundItemContainer>
        <RefundButton>취소/환불하기</RefundButton>
      </ContentContainer>
    </Container>
  );
}

export default Refund;
