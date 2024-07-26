import React, { useContext, useEffect, useState } from "react";
import {
  Container,
  ContentContainer,
  CartText,
  ListText,
  CartItem,
  CartItemList,
  CartItemText,
  LogoutButton,
} from "../Cart/CartStyle.js";
import {
  PurchasedItemImg,
  PurchasedItemDelete,
  PurchasedItemImgWrap,
} from "./Purchased.js";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header.jsx";
import { supabase } from "../../ServerClient.js";
import { userContext } from "../../App.jsx";
import { useQuery } from "@tanstack/react-query";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

// 해당 유저가 담은 구매내역 리스트 가져오는 함수
const getUserPurchaseItemList = async (user) => {
  let { data: purchased, error } = await supabase
    .from("purchased")
    .select("*")
    // 해당 유저의 상품만 필터링
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });
  if (error) {
    console.log(error);
    throw new Error(error.message);
  }
  return purchased;
};

function Purchased() {
  const nav = useNavigate();

  // 유저 정보 가져오기
  const [user, setUser] = useContext(userContext);

  // 취소환불 페이지로 이동
  const handleRefund = (item) => {
    nav(`/refund/${item.item_id}`, { state: item });
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error logging out:", error.message);
    } else {
      nav("/");
      setUser(null);
    }
  };

  // 해당 유저가 담은 구매내역 리스트 가져오기
  const { isPending, isError, data, error } = useQuery({
    queryKey: [`getUserPurchaseItemList`, user],
    queryFn: () => getUserPurchaseItemList(user),
  });

  if (isPending) {
    return (
      <Container>
        <Header></Header>
        <ContentContainer>
          <CartText>구매내역</CartText>
          <ListText>목록</ListText>
          <CartItemList>
            <Box
              style={{
                width: "100%",
                height: "20dvh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress color="inherit" />
            </Box>
          </CartItemList>
          {user ? (
            <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
          ) : (
            <></>
          )}
        </ContentContainer>
      </Container>
    );
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <Container>
      <Header></Header>
      <ContentContainer>
        <CartText>구매내역</CartText>
        <ListText>목록</ListText>
        <CartItemList>
          {data && data.length > 0 ? (
            data.map((item) => (
              <CartItem key={item.item_id}>
                <PurchasedItemImgWrap>
                  <PurchasedItemImg>
                    <source type="image/webp" srcSet={`${item.imagePath}`} />
                    <img src={item.imagePath} alt="ArtWork" />
                  </PurchasedItemImg>
                </PurchasedItemImgWrap>
                <CartItemText>
                  {item.title} | {item.artist}
                  <br></br>
                  <br></br>
                  {item.price} 원
                </CartItemText>
                <PurchasedItemDelete onClick={() => handleRefund(item)}>
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
        <br></br>
        {user ? (
          <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
        ) : (
          <></>
        )}
      </ContentContainer>
    </Container>
  );
}

export default Purchased;
