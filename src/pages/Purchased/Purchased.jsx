import React, { useContext, useEffect, useState } from "react";
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
import { supabase } from "../../ServerClient.js";
import { userContext } from "../../App.jsx";

function Purchased() {
  const nav = useNavigate();

  // 유저 정보 가져오기
  const [user] = useContext(userContext);

  // 유저가 구매한 작품 리스트
  const [userPurchaseItemList, setUserPurchaseItemList] = useState([]);

  // 취소환불 페이지로 이동
  const onClick = () => {
    nav("/refund");
  };

  // 해당 유저가 담은 장바구니 리스트 가져오기
  useEffect(() => {
    const getUserCartItemList = async () => {
      let { data: purchased, error } = await supabase
        .from("purchased")
        .select("*")
        // 해당 유저의 상품만 필터링
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });
      if (error) {
        console.log(error);
      }
      setUserPurchaseItemList(purchased);
    };

    if (user) {
      getUserCartItemList();
    }
  }, [user]);

  return (
    <Container>
      <Header></Header>
      <ContentContainer>
        <CartText>구매내역</CartText>
        <ListText>목록</ListText>
        <CartItemList>
          {userPurchaseItemList.length > 0 ? (
            userPurchaseItemList.map((item) => (
              <CartItem key={item.item_id}>
                <PurchasedItemImg path={item.imagePath}></PurchasedItemImg>
                <CartItemText>
                  {item.title} | {item.artist}
                  <br></br>
                  <br></br>
                  {item.price} 원
                </CartItemText>
                <PurchasedItemDelete onClick={onClick}>
                  취소/환불 신청하기
                </PurchasedItemDelete>
              </CartItem>
            ))
          ) : (
            <>
              <p
                style={{
                  marginBottom: "40px",
                  textAlign: "center",
                  color: "gray",
                }}
              >
                구매하신 상품이 없습니다.
              </p>
            </>
          )}
        </CartItemList>
      </ContentContainer>
    </Container>
  );
}

export default Purchased;
