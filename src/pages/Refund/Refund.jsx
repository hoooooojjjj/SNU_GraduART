import React, { useCallback, useState } from "react";
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
import emailjs from "emailjs-com";

function Refund() {
  // 취소환불 클릭한 작품 정보 가져오기
  const refundItem = useLocation().state;

  //모달 정보
  const [isModalVisible, setIsModalVisible] = useState(false);

  // confirmRefund모달 정보
  const [isConfirmRefundModalVisible, setConfirmRefundIsModalVisible] =
    useState(false);

  // 사용자 전화번호
  const [phoneNumber, setPhoneNumber] = useState("");

  // 개인정보 동의 시
  const [isAdmit, setIsAdmit] = useState(false);

  // 모달을 표시하는 함수
  const showModal = () => {
    setIsModalVisible(true);
  };

  // 모달을 숨기는 함수
  const hideConfirmRefundModal = () => {
    setConfirmRefundIsModalVisible(false);
  };

  // 모달을 표시하는 함수
  const showConfirmRefundModal = () => {
    setConfirmRefundIsModalVisible(true);
  };

  // 모달을 숨기는 함수
  const hideModal = () => {
    setIsModalVisible(false);
  };

  // 취소환불 버튼 클릭시
  const handleRefundClick = () => {
    showModal();
  };

  const handlePhoneNumberChange = (e) => {
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
    setPhoneNumber(e.target.value);
  };

  // 취소환불 신청 확인 시
  const handleSubmit = () => {
    // EmailJS에 전달할 데이터
    const templateParams = {
      from_phoneNum: phoneNumber,
      user_id: refundItem.user_id,
      item_id: refundItem.item_id,
      created_at: refundItem.created_at,
      title: refundItem.title,
      artist: refundItem.artist,
      descriptions: refundItem.descriptions,
      imagePath: refundItem.imagePath,
      price: refundItem.price,
      payment_method: refundItem.payment_method,
      order_id: refundItem.order_id,
      card_info: JSON.stringify(refundItem.card_info),
      total_price: refundItem.total_price,
    };

    // EmailJS를 통해 이메일 발송
    emailjs
      .send(
        "service_lt887ql", // EmailJS에서 발급받은 Service ID
        "template_3zeogat", // EmailJS에서 설정한 Template ID
        templateParams,
        "fYUyq_r6dfVD0R2eO" // EmailJS에서 발급받은 User ID
      )
      .then(
        // 성공 시
        (response) => {
          hideModal();
          showConfirmRefundModal();
        },
        // 실패 시
        (error) => {
          console.log("FAILED...", error);
          hideModal();
          alert("환불신청에 실패했습니다. 다시 시도해주세요.");
        }
      );
  };

  // 취소/환불 신청 확인 시 뜨는 모달
  const confirmRefund = () => (
    <ModalOverlay>
      <ModalContent>
        <p style={{ fontSize: 20, fontWeight: "bold" }}>
          환불신청이 완료되었습니다
        </p>
        <p>빠른 시일 내에 환불가능 여부와 안내문자를 발송해드리겠습니다</p>
        <Button onClick={hideConfirmRefundModal}>확인</Button>
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
                  <RefundImg>
                    <source
                      type="image/webp"
                      srcSet={`${refundItem.imagePath}`}
                    />
                    <img src={refundItem.imagePath} alt="ArtWork" />
                  </RefundImg>
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
                      {refundItem.payment_method} /{" "}
                      {refundItem.card_info?.kakaopay_issuer_corp}
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
      {isModalVisible && (
        <ModalOverlay>
          <ModalContent>
            <PhoneNumberContainer>
              <PhoneNumberText>환불받을 전화번호 입력</PhoneNumberText>
              <PhoneNumber
                placeholder="'-' 없이 숫자만 입력해주세요"
                type="tel"
                className="form-control"
                value={phoneNumber}
                onChange={(e) => {
                  handlePhoneNumberChange(e);
                }}
                maxlength="13"
              ></PhoneNumber>
            </PhoneNumberContainer>
            <AdmitContainer>
              <CheckBox
                type="checkbox"
                name="isChecked"
                onChange={(e) => {
                  if (e.target.checked) {
                    setIsAdmit(true);
                  }
                }}
              ></CheckBox>
              <AdmitText>개인정보 수집에 대한 동의</AdmitText>
            </AdmitContainer>
            <AdmitExpText>
              환불 처리를 위한 최소한의 개인정보이므로 동의를 해주셔야 서비스를
              이용하실 수 있습니다.
            </AdmitExpText>
            <ModalButton onClick={hideModal}>취소</ModalButton>
            <Button
              onClick={() => {
                if (isAdmit && phoneNumber.length === 13) {
                  handleSubmit();
                } else if (phoneNumber.length !== 13) {
                  alert("전화번호를 입력해주세요.");
                } else if (!isAdmit) {
                  alert("개인정보 수집에 대한 동의를 해주세요.");
                }
              }}
            >
              확인
            </Button>
          </ModalContent>
        </ModalOverlay>
      )}
      {isConfirmRefundModalVisible && confirmRefund()}
    </Container>
  );
}

export default Refund;
