import React from "react";
import {
  Container,
  ContentContainer,
  CartText,
  ListText,
  CartItemList,
  CartItem,
  CheckBoxIcon,
  CartItemImg,
  CartItemText,
  CartItemDelete,
  PriceContainer,
  PriceText,
  OrderContainer,
  OrderButton,
} from "./CartStyle.js";
import Header from "../../components/Header/Header.jsx";

function Cart() {
  return (
    <Container>
      <Header></Header>
      <ContentContainer>
        <CartText>장바구니</CartText>
        <ListText>목록</ListText>
        <CartItemList>
          <CartItem>
            <CheckBoxIcon></CheckBoxIcon>
            <CartItemImg path={`/assets/cartImg1.jpg`}></CartItemImg>
            <CartItemText>
              장면-표백하지 않은 흰색 | 김륜아<br></br>
              <br></br>600,000 원
            </CartItemText>
            <CartItemDelete>삭제하기</CartItemDelete>
          </CartItem>
          <CartItem>
            <CheckBoxIcon></CheckBoxIcon>
            <CartItemImg path={`/assets/cartImg2.jpg`}></CartItemImg>
            <CartItemText>
              풍경2 | 오승현<br></br>
              <br></br>400,000 원
            </CartItemText>
            <CartItemDelete>삭제하기</CartItemDelete>
          </CartItem>
        </CartItemList>
        <PriceContainer>
          <PriceText>전체 금액</PriceText>
          <PriceText>1,600,000원</PriceText>
        </PriceContainer>
        <OrderContainer>
          <OrderButton>선택 상품 주문</OrderButton>
          <OrderButton>전체 상품 주문</OrderButton>
        </OrderContainer>
      </ContentContainer>
    </Container>
  );
}

export default Cart;
