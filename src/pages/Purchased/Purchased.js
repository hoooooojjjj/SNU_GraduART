import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

// 구매내역 내 작품 이미지 (margin-left 위해 만듦)
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
  cursor: "pointer",
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

// export const PurchasedItemDelete = styled(NavLink)`
//   color: black,
//   textAlign: "center",
//   fontFamily: "pretendard",
//   fontSize: "15px",
//   fontStyle: "normal",
//   fontWeight: "500",
//   width: "15%",
//   padding: "1%",
//   marginRight: "3%",
//   backgroundColor: "white",
//   border: "none",
// `;
