import styled from "@emotion/styled";

//
export const PurchasedItemImg = styled.img`
  width: 15%;
  height: 125px;
  background-image: url(${(props) => props.path});
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 3px 3px 5px gray;
  margin-right: 1%;
  margin-left: 3%;
`;

// 구매내역 항목 내 "취소/환불하기" 버튼
export const PurchasedItemDelete = styled.button({
  color: "black",
  textAlign: "center",
  fontFamily: "pretendard",
  fontSize: "15px",
  fontStyle: "normal",
  fontWeight: "500",
  width: "15%",
  padding: "1%",
  marginRight: "3%",
  backgroundColor: "white",
  border: "none",
});
