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

export const RefundImgWrap = styled.div`
  width: 80%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 취소/환불 신청 할 이미지 1장
export const RefundImg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.path});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  filter: drop-shadow(10px 10px 7px rgba(0, 0, 0, 0.4));
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
  backgroundColor: "#D9D9D9",
  marginTop: "1%",
  display: "flex",
  flexDirection: "row",
});

// '금액', '결제수단', '결제승인시각' 등 구체적인 주문정보 박스
export const RefundInfoTextBox = styled.div({
  width: "25%",
  margin: "1%",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
});

// '금액', '결제수단', '결제승인시각' 등 구체적인 주문정보 텍스트
export const RefundDetailInfoText = styled.div({
  color: "black",
  fontFamily: "pretendard",
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: "400",
  marginBlock: "10px",
  backgroundColor: "grey",
  width: "80%",
  height: "30%",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  justifyContent: "center",
  marginLeft: "5%",
});

// 실제 금액, 결제수단, 결제승인시각 데이터 텍스트
export const RefundInfoDataText = styled.div({
  color: "black",
  fontFamily: "pretendard",
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: "400",
  marginBlock: "25px",
});

// 실제 금액, 결제수단, 결제승인시각 데이터가 적힐 박스
export const RefundInfoDataBox = styled.div({
  width: "75%",
  margin: "1%",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
});

// 취소/환불하기 버튼
export const RefundButton = styled.button({
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
