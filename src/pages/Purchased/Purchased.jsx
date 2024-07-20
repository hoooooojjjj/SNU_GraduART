import React from "react";
import {
  Container,
  ContentContainer,
  CartText,
  ListText,
  CartItem,
  CartItemList,
  CartItemText,
} from "../Cart/CartStyle.js";
import { PurchasedItemImg, PurchasedItemDelete } from "./Purchased.js";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header.jsx";

function Purchased() {
  const nav = useNavigate();

  const onClick = () => {
    nav("/refund");
  };

  return (
    <Container>
      <Header></Header>
      <ContentContainer>
        <CartText>구매내역</CartText>
        <ListText>목록</ListText>
        <CartItemList>
          <CartItem>
            <PurchasedItemImg path={`/assets/cartImg1.jpg`}></PurchasedItemImg>
            <CartItemText>
              장면-표백하지 않은 흰색 | 김륜아<br></br>
              <br></br>600,000 원
            </CartItemText>
            <PurchasedItemDelete onClick={onClick}>
              취소/환불 신청하기
            </PurchasedItemDelete>
          </CartItem>
          <CartItem>
            <PurchasedItemImg path={`/assets/cartImg2.jpg`}></PurchasedItemImg>
            <CartItemText>
              풍경2 | 오승현<br></br>
              <br></br>400,000 원
            </CartItemText>
            <PurchasedItemDelete onClick={onClick}>
              취소/환불 신청하기
            </PurchasedItemDelete>
          </CartItem>
        </CartItemList>
      </ContentContainer>
    </Container>
  );
}

export default Purchased;
