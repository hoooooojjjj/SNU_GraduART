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

  // 리렌더링 시키기 위한 키
  const [renderKey, setRenderKey] = useState(0);

  // 해당 유저가 담은 장바구니 리스트 가져오기
  useEffect(() => {
    const getUserCartItemList = async () => {
      let { data: cart_item, error } = await supabase
        .from("cart_item")
        .select("*")
        // 해당 유저의 상품만 필터링
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });
      if (error) {
        console.log(error);
      }
      setUserCartItemList(cart_item);
    };

    if (user) {
      getUserCartItemList();
    }
  }, [user, renderKey]);

  // 삭제하기 버튼 클릭 시 해당 작품 cart_item 테이블에서 삭제
  const handleCartItemDelete = async (item) => {
    if (user) {
      const { error } = await supabase
        .from("cart_item")
        .delete()
        .eq("item_id", item.item_id);
      if (error) {
        console.log(error);
      }
    }
    // 리렌더링 시키기 위한 키 변경
    setRenderKey(renderKey + 1);
  };

  return (
    <Container key={renderKey}>
      <Header></Header>
      <ContentContainer>
        <CartText>장바구니</CartText>
        <ListText>목록</ListText>
        <CartItemList>
          {userCartItemList ? (
            userCartItemList.map((item) => (
              <CartItem key={item.item_id}>
                <CheckBoxIcon></CheckBoxIcon>
                <CartItemImg path={item.imagePath}></CartItemImg>
                <CartItemText>
                  {item.title} | {item.artist}
                  <br></br>
                  <br></br>
                  {item.price} 원
                </CartItemText>
                <CartItemDelete
                  onClick={() => {
                    handleCartItemDelete(item);
                  }}
                >
                  삭제하기
                </CartItemDelete>
              </CartItem>
            ))
          ) : (
            <></>
          )}
        </CartItemList>
        <PriceContainer>
          <PriceText>전체 금액</PriceText>
          <PriceText>
            {userCartItemList
              ? userCartItemList.reduce((total, item) => total + item.price, 0)
              : 0}
            원
          </PriceText>
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
