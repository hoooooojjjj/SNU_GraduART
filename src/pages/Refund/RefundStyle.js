import styled from "@emotion/styled";

// 취소/환불 신청 할 작품 리스트 컨테이너
export const RefundItemContainer = styled.div({
  width: "80%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  borderBottom: "solid",
  borderBottomColor: "grey",
  borderTop: "solid #818181",
  paddingTop: "3%",
  paddingBottom: "3%",
});

// 작품 이미지와 작품 설명을 담을 컨테이너
export const RefundImgContainer = styled.div({
  width: "40%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

// 취소/환불 신청 할 이미지 1장
export const RefundImg = styled.img`
  width: 80%;
  height: 300px;
  background-image: url(${(props) => props.path});
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 3px 3px 5px gray;
`;

// 취소/환불신청 페이지의 작품명 및 작가명 텍스트
export const RefundItemText = styled.div({
  fontFamily: "pretendard",
  fontWeight: "400",
  width: "70%",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  marginTop: "5%",
});

// '주문정보' 텍스트 및 주문정보가 담길 전체 컨테이너
export const RefundInfoContainer = styled.div({
  width: "65%",
  padding: "1%",
  marginRight: "3%",
});

// '주문정보' 텍스트
export const RefundInfoText = styled.div({
  color: "black",
  fontFamily: "pretendard",
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "110%",
  marginBottom: "3%",
});

// 구체적인 주문정보를 담을 회색 네모 배경
export const RefundInfoBox = styled.div({
  width: "100%",
  height: "237px",
  marginTop: "1%",
  display: "flex",
  flexDirection: "row",
  // backgroundColor: "#F1F1F1",
  borderRadius: "30px",
});

// '금액', '결제수단', '결제승인시각' 등 구체적인 주문정보 박스
export const RefundInfoTextBox = styled.div({
  width: "25%",
  margin: "1%",
  marginRight: "0",
  display: "flex",
  flexDirection: "column",
  textAlign: "left",
});

// '금액', '결제수단', '결제승인시각' 등 구체적인 주문정보 텍스트
export const RefundDetailInfoText = styled.div({
  color: "black",
  fontFamily: "pretendard",
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: "400",
  width: "100%",
  height: "30%",
  display: "flex",
  flexDirection: "column",
  textAlign: "left",
  justifyContent: "center",
  marginBlock: "10px",
  marginLeft: "20%",
});

// 실제 금액, 결제수단, 결제승인시각 데이터 텍스트
export const RefundInfoDataText = styled.div({
  color: "black",
  fontFamily: "pretendard",
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: "400",
  width: "100%",
  height: "30%",
  display: "flex",
  flexDirection: "column",
  textAlign: "left",
  justifyContent: "center",
  marginBlock: "10px",
  marginLeft: "20%",
});

// 실제 금액, 결제수단, 결제승인시각 데이터가 적힐 박스
export const RefundInfoDataBox = styled.div({
  width: "75%",
  margin: "1%",
  marginLeft: "0",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
});

// 취소/환불하기 버튼
export const RefundButton = styled.button({
  cursor: "pointer",
  display: "flex",
  width: "80%",
  height: "10%",
  padding: "16px 12px",
  justifyContent: "center",
  alignItems: "center",
  flexShrink: "0",
  fontFamily: "pretendard",
  fontSize: "16px",
  fontWeight: "350",
  letterSpacing: "1px",
  backgroundColor: "white",
  borderWidth: "1px",
  marginBottom: "5%",
  marginTop: "5%",
});

// 전화번호 및 개인정보 수집 체크박스 모달 overlay
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

// 모달창
export const ModalContent = styled.div`
  background: white;
  padding: 50px;
  padding-bottom: 30px;
  border-radius: 8px;
  width: 60%;
  max-width: 500px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

// "환불받을 전화번호" 텍스트 및 전화번호 입력창 담을 컨테이너
export const PhoneNumberContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  margin-bottom: 5dvh;
`;

// "환불받을 전화번호" 텍스트
export const PhoneNumberText = styled.div`
  text-align: left;
  width: 40%;
  color: black;
  font-family: pretendard;
  font-weight: 600;
  font-size: 18px;
  font-style: bold;
`;

// 환불받을 전화번호 입력창
export const PhoneNumber = styled.input`
  align-items: center;
  display: flex;
  justify-content: center;
  font-family: pretendard;
  width: 40%;
  padding-left: 5px;
`;

// 개인정보 수집 동의 체크박스랑 텍스트 담을 컨테이너
export const AdmitContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: left;
  align-items: center;
  text-align: center;
`;

// 개인정보 수집 동의 체크박스
export const CheckBox = styled.input`
  align-items: center;
  display: flex;
`;

// 개인정보 수집 동의 텍스트
export const AdmitText = styled.div`
  margin-left: 5px;
  padding-top: 3px;
  color: black;
  font-family: pretendard;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
`;

// 개인정보 수집에 대한 부가 설명 텍스트 '환불 처리를 위한 최소한의~'
export const AdmitExpText = styled.div`
  width: 100%;
  font-weight: 200;
  font-family: pretendard;
  color: grey;
  font-size: 12px;
  margin-top: 2%;
  margin-bottom: 5%;
  text-align: left;
`;

// 취소 버튼
export const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  background-color: #7391c8;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

// 확인 버튼
export const ModalButton = styled(Button)`
  background-color: #bdc6d9;
`;
