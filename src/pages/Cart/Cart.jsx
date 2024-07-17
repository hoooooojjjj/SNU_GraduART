import React, { useContext, useEffect, useState } from "react";
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
import { userContext } from "../../App.jsx";
import { supabase } from "../../ServerClient.js";

function Cart() {
  // 유저가 장바구니에 담은 작품 리스트
  const [userCartItemList, setUserCartItemList] = useState(null);

  // 유저 정보 가져오기
  const [user] = useContext(userContext);

  // 해당 유저가 담은 장바구니 리스트 가져오기
  useEffect(() => {
    const getUserCartItemList = async () => {
      let { data: cart_item, error } = await supabase
        .from("cart_item")
        .select("*")
        // 해당 유저의 상품만 필터링
        .eq("user_id", user.id);
      console.log(cart_item);
      setUserCartItemList(cart_item);
    };

    if (user) {
      getUserCartItemList();
    }
  }, [user]);

  return (
    <Container>
      <Header></Header>
      <ContentContainer>
        <CartText>장바구니</CartText>
        <ListText>목록</ListText>
        <CartItemList>
          {userCartItemList ? (
            userCartItemList.map((item) => (
              <CartItem key={item.item_id}>
                <CheckBoxIcon></CheckBoxIcon>
                <CartItemImg path={"/"}></CartItemImg>
                <CartItemText>
                  장면-표백하지 않은 흰색 | 김륜아<br></br>
                  <br></br>600,000 원
                </CartItemText>
                <CartItemDelete>삭제하기</CartItemDelete>
              </CartItem>
            ))
          ) : (
            <></>
          )}
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
