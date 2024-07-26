import styled from "@emotion/styled";

export const PurchasedItemImgWrap = styled.div`
  width: 15%;
  height: 125px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1%;
  margin-left: 3%;
  position: relative;
`;

// 구매내역 내 작품 이미지 (margin-left 위해 만듦)
export const PurchasedItemImg = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(10px 10px 7px rgba(0, 0, 0, 0.4));
  }
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
