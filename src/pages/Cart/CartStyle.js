import styled from "@emotion/styled";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

// 페이지 전체 컨테이너
export const Container = styled.div({
  width: "100dvw",
  backgroundColor: "#FFFFFF",
});

// 헤더 제외한 나머지 중앙정렬시키기 위한 컨테이너
export const ContentContainer = styled.div({
  width: "100dvw",
  height: "100dvh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

// "장바구니" 텍스트
export const CartText = styled.div({
  color: "black",
  fontFamily: "Pretendard",
  fontSize: "36px",
  fontWeight: "700",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingBottom: "5%",
  marginTop: "3%",
  width: "80%",
});

// "목록" 텍스트
export const ListText = styled.div({
  color: "black",
  fontFamily: "Pretendard",
  fontSize: "20px",
  fontWeight: "500",
  textAlign: "left",
  width: "80%",
  lineHeight: "110%",
  display: "flex",
  justifyContent: "flex-start",
  marginBottom: "2%",
  paddingBottom: "0.5%",
  borderBottom: "solid #818181",
});

// 장바구니에 있는 항목 1개
export const CartItem = styled.div({
  width: "80%",
  height: "20%",
  marginBottom: "3%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

// 장바구니 체크 아이콘
export const CheckBoxIcon = styled(CheckBoxOutlineBlankIcon)`
  align-items: center;
  display: flex;
  margin: 2%;
`;

// 장바구니 항목 사진
export const CartItemImg = styled.img`
  width: 30%;
  height: 90%;
  background-image: url(${(props) => props.path});
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 3px 3px 5px gray;
  margin-right: 1%;
`;

// 장바구니 항목 텍스트
export const CartItemText = styled.div({
  width: "70%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  backgroundColor: "white",
  marginRight: "8%",
  marginLeft: "2%",
});

// 장바구니 항목 내 "삭제하기" 텍스트
export const CartItemDelete = styled.div({
  color: "black",
  textAlign: "center",
  fontFamily: "pretendard",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: "500",
  width: "10%",
  padding: "1%",
  marginRight: "3%",
});

// 아래 회색 선

// 전체 금액 컨테이너

// "전체 금액" 텍스트

// "n원" 텍스트

// 주문 버튼 컨테이너

// 주문 버튼
