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
  CheckAll,
  CheckAllContainer,
  CheckAllText,
} from "./CartStyle.js";
import Header from "../../components/Header/Header.jsx";
import { userContext } from "../../App.jsx";
import { supabase } from "../../ServerClient.js";

function Cart() {
  // 유저가 장바구니에 담은 작품 리스트
  const [userCartItemList, setUserCartItemList] = useState([]);

  // 유저 정보 가져오기
  const [user] = useContext(userContext);

  // 선택된 작품 리스트
  const [selectedItems, setSelectedItems] = useState([]);

  // 전체 상품 선택 여부
  const [isCheckedAll, setIsCheckedAll] = useState(false);

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
  }, [user]);

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

    const newCartItemList = userCartItemList.filter(
      (cartItem) => cartItem.item_id !== item.item_id
    );
    setUserCartItemList(newCartItemList);
  };

  // 전체 작품 선택 클릭 시
  const handleCheckAll = () => {
    // 만약 다 체크되어 있었다면 선택된 작품 리스트를 비움
    if (isCheckedAll) {
      setSelectedItems([]);
      // 체크되어 있지 않았다면 유저가 담은 장바구니 리스트 모두를 선택된 작품 리스트에 추가
    } else {
      setSelectedItems(userCartItemList);
    }

    setIsCheckedAll(!isCheckedAll);
  };

  // 체크박스가 변경될 때마다 선택된 작품을 업데이트
  const handleCheckboxChange = (event, item) => {
    // 체크를 눌렀으면 선택된 작품 리스트에 추가,
    if (event.target.checked) {
      setSelectedItems([...selectedItems, item]);
    } else {
      // 체크를 해제했으면 선택된 작품 리스트에서 제거
      setSelectedItems(
        selectedItems.filter((selectedItem) => selectedItem !== item)
      );
    }
  };

  // 선택된 작품 주문하기
  const handleOrderSelectedItems = () => {
    // 선택된 상품에 대한 주문 로직 구현
  };

  return (
    <Container>
      <Header></Header>
      <ContentContainer>
        <CartText>장바구니</CartText>
        <ListText>목록</ListText>
        <CartItemList>
          <CheckAllContainer>
            <CheckAll onClick={handleCheckAll}>체크박스 이미지</CheckAll>
            <CheckAllText>전체 선택</CheckAllText>
          </CheckAllContainer>
          {userCartItemList.length > 0 ? (
            userCartItemList.map((item) => (
              <CartItem key={item.item_id}>
                <CheckBoxIcon
                  type="checkbox"
                  id={item.item_id}
                  name="isChecked"
                  checked={selectedItems.includes(item)}
                  onChange={(event) => handleCheckboxChange(event, item)}
                ></CheckBoxIcon>
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
            <p
              style={{
                marginBottom: "40px",
                textAlign: "center",
                color: "gray",
              }}
            >
              장바구니에 담긴 작품이 없습니다.
            </p>
          )}
        </CartItemList>
        {userCartItemList.length > 0 ? (
          <>
            <PriceContainer>
              <PriceText>선택한 작품 총액</PriceText>
              <PriceText>
                {selectedItems.length > 0
                  ? selectedItems.reduce((total, item) => total + item.price, 0)
                  : 0}
                원
              </PriceText>
            </PriceContainer>
            <OrderContainer>
              <OrderButton>선택 작품 주문</OrderButton>
            </OrderContainer>
          </>
        ) : (
          <></>
        )}
      </ContentContainer>
    </Container>
  );
}

export default Cart;
