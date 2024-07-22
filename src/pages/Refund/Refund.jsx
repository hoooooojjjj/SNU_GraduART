import React, { useState } from "react";
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
import { useLocation } from "react-router-dom";

function Refund() {
  // 취소환불 클릭한 작품 정보 가져오기
  const refundItem = useLocation().state;

  //모달 정보
  const [isModalVisible, setIsModalVisible] = useState(false);

  // 모달을 표시하는 함수
  const showModal = () => {
    setIsModalVisible(true);
  };

  // 모달을 숨기는 함수
  const hideModal = () => {
    setIsModalVisible(false);
  };

  // 취소환불 버튼 클릭시
  const handleRefundClick = () => {
    showModal();
  };

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

  // 전화번호 입력 및 정보 수집 동의 모달창
  const Modal = ({ onClose }) => (
    <ModalOverlay>
      <ModalContent>
        <PhoneNumberContainer>
          <PhoneNumberText>환불받을 전화번호 입력</PhoneNumberText>
          <PhoneNumber
            placeholder="'-' 없이 숫자만 입력해주세요"
            type="tel"
            className="form-control"
            onInput={oninputPhone}
            maxlength="13"
          ></PhoneNumber>
        </PhoneNumberContainer>
        <AdmitContainer>
          <CheckBox type="checkbox" name="isChecked"></CheckBox>
          <AdmitText>개인정보 수집에 대한 동의</AdmitText>
        </AdmitContainer>
        <AdmitExpText>
          환불 처리를 위한 최소한의 개인정보이므로 동의를 해주셔야 서비스를
          이용하실 수 있습니다.
        </AdmitExpText>
        <ModalButton onClick={onClose}>취소</ModalButton>
        <Button>확인</Button>
      </ModalContent>
    </ModalOverlay>
  );

  return (
    <Container>
      <Header></Header>
      <ContentContainer>
        <CartText>취소/환불신청</CartText>
        <RefundItemContainer>
          {refundItem ? (
            <>
              <RefundImgContainer>
                <RefundImgWrap>
                  <RefundImg path={`${refundItem.imagePath}`}></RefundImg>
                </RefundImgWrap>
                <RefundItemText>
                  {refundItem.title} | {refundItem.artist}
                </RefundItemText>
              </RefundImgContainer>
              <RefundInfoContainer>
                <RefundInfoText>주문정보</RefundInfoText>
                <RefundInfoBox>
                  <RefundInfoTextBox>
                    <RefundDetailInfoText>금액</RefundDetailInfoText>
                    <RefundDetailInfoText>결제수단</RefundDetailInfoText>
                    <RefundDetailInfoText>결제승인시각</RefundDetailInfoText>
                    <RefundDetailInfoText>주문코드</RefundDetailInfoText>
                  </RefundInfoTextBox>
                  <RefundInfoDataBox>
                    <RefundInfoDataText>
                      {refundItem.price.toLocaleString()}원
                    </RefundInfoDataText>
                    <RefundInfoDataText>
                      {refundItem.payment_method}
                    </RefundInfoDataText>
                    <RefundInfoDataText>
                      {refundItem.created_at.slice(0, 10)}{" "}
                      {refundItem.created_at.slice(11, 19)}
                    </RefundInfoDataText>
                    <RefundInfoDataText>
                      {refundItem.order_id}
                    </RefundInfoDataText>
                  </RefundInfoDataBox>
                </RefundInfoBox>
              </RefundInfoContainer>
            </>
          ) : (
            <></>
          )}
        </RefundItemContainer>
        <RefundButton onClick={handleRefundClick}>취소/환불하기</RefundButton>
      </ContentContainer>
      {isModalVisible && <Modal onClose={hideModal} />}
    </Container>
  );
}

export default Refund;
