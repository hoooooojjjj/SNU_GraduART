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
  ModalOverlay,
  ModalButton,
  ModalContent,
  Button,
  CheckBox,
  AdmitContainer,
  AdmitText,
  AdmitExpText,
  PhoneNumber,
  PhoneNumberText,
  PhoneNumberContainer,
} from "./RefundStyle.js";

function Refund() {
  // 전화번호 사이에 자동으로 하이픈 넣어주는 기능 및 최대 길이 제한
  const oninputPhone = (event) => {
    const target = event.target;
    let value = target.value.replace(/[^0-9]/g, ""); // 숫자만 남김

    if (value.length > 11) {
      value = value.slice(0, 11); // 숫자가 11자리를 넘으면 자름
    }

    // 하이픈 추가
    if (value.length <= 3) {
      value = value;
    } else if (value.length <= 7) {
      value = value.slice(0, 3) + "-" + value.slice(3, 7);
    } else {
      value =
        value.slice(0, 3) + "-" + value.slice(3, 7) + "-" + value.slice(7, 11);
    }

    target.value = value; // 입력값 갱신
  };
  return (
    <Container>
      <Header></Header>
      <ContentContainer>
        <CartText>취소/환불신청</CartText>
        <RefundItemContainer>
          <RefundImgContainer>
            <RefundImg path={`/assets/cartImg1.jpg`}></RefundImg>
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
        <ModalOverlay>
          <ModalContent>
            <PhoneNumberContainer>
              <PhoneNumberText>환불받을 전화번호 입력</PhoneNumberText>
              <PhoneNumber
                type="tel"
                className="form-control"
                onInput={oninputPhone}
                maxlength="13"
              ></PhoneNumber>
            </PhoneNumberContainer>

            <AdmitContainer>
              <CheckBox
                type="checkbox"
                name="isChecked"
                onChange={(event) => handleCheckboxChange(event, item)}
              ></CheckBox>
              <AdmitText>개인정보 수집에 대한 동의</AdmitText>
            </AdmitContainer>
            <AdmitExpText>
              환불 처리를 위한 최소한의 개인정보이므로 동의를 해주셔야 서비스를
              이용하실 수 있습니다.
            </AdmitExpText>
            <ModalButton>취소</ModalButton>
            <Button>확인</Button>
          </ModalContent>
        </ModalOverlay>
      </ContentContainer>
    </Container>
  );
}

export default Refund;
