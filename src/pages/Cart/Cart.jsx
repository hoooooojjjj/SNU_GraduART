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
  CheckAllIcon,
  CheckAllContainer,
  CheckAllText,
  CartImgContainer, LogoutButton,
} from "./CartStyle.js";
import Header from "../../components/Header/Header.jsx";
import { userContext } from "../../App.jsx";
import { supabase } from "../../ServerClient.js";
import {isMobile} from "react-device-detect";
import { useNavigate } from "react-router-dom";

function Cart() {
  const nav = useNavigate();

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

  // 로컬 스토리지에서 선택된 아이템 id 복원
  useEffect(() => {
    const savedSelectedItemIds = JSON.parse(
      localStorage.getItem("selectedItems")
    );
    const savedIsCheckedAll = JSON.parse(localStorage.getItem("isCheckedAll"));
    if (savedSelectedItemIds) {
      const savedSelectedItems = userCartItemList.filter((item) =>
        savedSelectedItemIds.includes(item.item_id)
      );
      setSelectedItems(savedSelectedItems);
    }
    if (savedIsCheckedAll !== null) {
      setIsCheckedAll(savedIsCheckedAll);
    }
  }, [userCartItemList]);

  // 선택된 아이템 상태가 변경될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    const selectedIds = selectedItems.map((item) => item.item_id);
    localStorage.setItem("selectedItems", JSON.stringify(selectedIds));
    localStorage.setItem("isCheckedAll", JSON.stringify(isCheckedAll));
  }, [selectedItems, isCheckedAll]);

  // selectedItems가 변경될 때 isCheckedAll 상태를 업데이트
  useEffect(() => {
    if (
      selectedItems.length === userCartItemList.length &&
      userCartItemList.length > 0
    ) {
      setIsCheckedAll(true);
    } else {
      setIsCheckedAll(false);
    }
  }, [selectedItems, userCartItemList]);

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
        selectedItems.filter(
          (selectedItem) => selectedItem.item_id !== item.item_id
        )
      );
    }
  };

  // 선택된 작품 주문하기

  const orderSelectedItems = async (userId, itemIds) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/purchaseItems`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          user_id: userId,
          item_ids: itemIds,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error ordering items:', error);
      throw error;
    }
  };

  //실제 주문 Handling
  const handleOrderSelectedItems = async () => {
    try {
      const itemIds = selectedItems.map(item => item.item_id);
      console.log(itemIds);
      const response = await orderSelectedItems(user.id, itemIds);
      console.log('Order successful:', response);
      const tid = response.tid;
      window.localStorage.setItem('temp_tid', tid)

      if (isMobile) {
        window.location.assign(`${response.next_redirect_mobile_url}`);
      } else {
        window.location.assign(`${response.next_redirect_pc_url}`);
      }

      setSelectedItems([]);
      setIsCheckedAll(false);
      setRenderKey(renderKey + 1); // Refresh cart items
    } catch (error) {
      console.error('Order failed:', error);
    }
  };

  return (
    <Container>
      <Header></Header>
      <ContentContainer>
        <CartText>장바구니</CartText>
        <ListText>목록</ListText>
        <CartItemList>
          {userCartItemList.length > 0 ? (
            <CheckAllContainer>
              <CheckAllIcon
                type="checkbox"
                name="isChecked"
                checked={isCheckedAll}
                onChange={handleCheckAll}
              ></CheckAllIcon>
              <CheckAllText>전체 선택</CheckAllText>
            </CheckAllContainer>
          ) : (
            <></>
          )}
          {userCartItemList.length > 0 ? (
            userCartItemList.map((item) => (
              <CartItem key={item.item_id}>
                <CheckBoxIcon
                  type="checkbox"
                  id={item.item_id}
                  name="isChecked"
                  checked={selectedItems.some(
                    (selectedItem) => selectedItem.item_id === item.item_id
                  )}
                  onChange={(event) => handleCheckboxChange(event, item)}
                ></CheckBoxIcon>
                <CartImgContainer>
                  <CartItemImg
                    onClick={() =>
                      nav(`/${item.department}`, { state: item.item_id })
                    }
                    path={item.imagePath}
                  ></CartItemImg>
                </CartImgContainer>
                <CartItemText>
                  {item.title} | {item.artist}
                  <br></br>
                  <br></br>
                  {item.price.toLocaleString()} 원
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
                  ? selectedItems
                      .reduce((total, item) => total + item.price, 0)
                      .toLocaleString()
                  : 0}
                원
              </PriceText>
            </PriceContainer>
            <OrderContainer>
          <OrderButton onClick={handleOrderSelectedItems}>선택 작품 주문</OrderButton>
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
