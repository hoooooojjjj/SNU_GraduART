import React from "react";
import {
  Container,
  ContentContainer,
  CartText,
  ListText,
  CartItem,
  CheckBoxIcon,
  CartItemImg,
  CartItemText,
  CartItemDelete,
} from "./CartStyle.js";
import { NavLink } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import Header from "../../components/Header/Header.jsx";

function Cart() {
  return (
    <Container>
      <Header></Header>
      <ContentContainer>
        <CartText>장바구니</CartText>
        <ListText>목록</ListText>
        <CartItem>
          <CheckBoxIcon></CheckBoxIcon>
          <CartItemImg path={`/assets/cartImg.jpg`}></CartItemImg>
          <CartItemText>
            장면-표백하지 않은 흰색 | 김륜아<br></br>
            <br></br>600,000 원
          </CartItemText>
          <CartItemDelete>삭제하기</CartItemDelete>
        </CartItem>
        <CartItem>메롱</CartItem>
      </ContentContainer>
    </Container>
  );
}

export default Cart;
