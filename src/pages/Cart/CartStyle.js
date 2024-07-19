import styled from "@emotion/styled";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

// 페이지 전체 컨테이너
export const Container = styled.div({
  width: "100dvw",
  height: "100dvh",
  backgroundColor: "#FFFFFF",
  overflow: "auto",
});

// 헤더 제외한 나머지 중앙정렬시키기 위한 컨테이너
export const ContentContainer = styled.div({
  width: "100dvw",
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
  marginTop: "5%",
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

// 장바구니 모든 항목 포함하는 리스트
export const CartItemList = styled.div({
  width: "80%",
  height: "auto",
  borderBottom: "solid",
  borderBottomColor: "grey",
});

// 전체 선택을 포함하는 컨테이너
export const CheckAllContainer = styled.div({
  width: "100%",
  height: "30%",
  display: "flex",
  flexDirection: "row",
});

// "전체 선택" 체크박스 버튼
export const CheckAll = styled.button`
  margin-left: 3%;
  background-image: url(${(props) => props.path});
`;

// "전체 선택" 텍스트
export const CheckAllText = styled.div({
  textAlign: "left",
  fontFamily: "pretendard",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: "400",
  marginLeft: "1%",
});

// 장바구니에 있는 항목 1개
export const CartItem = styled.div({
  width: "100%",
  height: "50%",
  marginBottom: "3%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

// 장바구니 체크 아이콘
export const CheckBoxIcon = styled.input`
  align-items: center;
  display: flex;
  margin: 3%;
  margin-right: 5%;
`;

// 장바구니 항목 사진
export const CartItemImg = styled.img`
  width: 15%;
  height: 125px;
  background-image: url(${(props) => props.path});
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 3px 3px 5px gray;
  margin-right: 1%;
`;

// 장바구니 항목 텍스트
export const CartItemText = styled.div({
  fontFamily: "pretendard",
  fontWeight: "350",
  width: "70%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  backgroundColor: "white",
  marginRight: "8%",
  marginLeft: "2%",
});

// 장바구니 항목 내 "삭제하기" 버튼
export const CartItemDelete = styled.button({
  cursor: "pointer",
  color: "black",
  textAlign: "center",
  fontFamily: "pretendard",
  fontSize: "15px",
  fontStyle: "normal",
  fontWeight: "500",
  width: "10%",
  padding: "1%",
  marginRight: "3%",
  backgroundColor: "white",
  border: "none",
});

// 전체 금액 컨테이너
export const PriceContainer = styled.div({
  width: "80%",
  marginTop: "2%",
  marginBottom: "2%",
  display: "inline-flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
});

// "전체 금액", "n원"을 쓸 텍스트
export const PriceText = styled.div({
  fontFamily: "pretendard",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "100%",
  letterSpacing: "0.5px",
  paddingLeft: "3%",
  paddingRight: "3%",
});

// 주문 버튼 컨테이너
export const OrderContainer = styled.div({
  width: "80%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  marginTop: "1%",
});

// 선택 상품 주문, 전체 상품 주문에 사용될 주문 버튼
export const OrderButton = styled.button({
  display: "flex",
  width: "95%",
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
});
