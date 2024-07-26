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
  CartImgContainer,
  LogoutButton,
  AlreadyPurchased,
} from "./CartStyle.js";
import Header from "../../components/Header/Header.jsx";
import { userContext } from "../../App.jsx";
import { supabase } from "../../ServerClient.js";
import { isMobile } from "react-device-detect";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

// 해당 유저가 담은 장바구니 리스트 가져오는 함수
const getUserCartItemList = async (user) => {
  let { data: cart_item, error } = await supabase
    .from("cart_item")
    .select("*")
    // 해당 유저의 상품만 필터링
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });
  if (error) {
    console.log(error);
    throw new Error(error.message);
    // Error handling 추가
  }
  return cart_item;
};

// 장바구니에서 삭제하는 함수
const deleteItem = async (item) => {
  const { error } = await supabase
    .from("cart_item")
    .delete()
    .eq("item_id", item.item_id);
  if (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

function Cart() {
  const queryClient = useQueryClient();

  const nav = useNavigate();

  // 유저 정보 가져오기
  const [user] = useContext(userContext);

  // 선택된 작품 리스트
  const [selectedItems, setSelectedItems] = useState([]);

  // 전체 상품 선택 여부
  const [isCheckedAll, setIsCheckedAll] = useState(false);

  // 선택 작품 주문 클릭 시 애니메이션
  const [clickAnime, setClickAnime] = useState(false);

  // 해당 유저가 담은 장바구니 리스트 가져오기
  const { isPending, isError, data, error } = useQuery({
    queryKey: [`getUserCartItemList`, user],
    queryFn: () => getUserCartItemList(user),
  });

  // 작품 삭제하는 mutation
  const mutation = useMutation({
    // 작품 삭제하는 함수
    mutationFn: deleteItem,
    // 작품 삭제가 성공되었을 때
    onSuccess: () => {
      // 해당 작품을 삭제하고 나서 cart_item 테이블을 다시 fetch
      queryClient.invalidateQueries("getUserCartItemList");
    },
    onError: (error) => {
      console.error("Error deleting item:", error.message);
    },
  });

  // 전체 작품 선택 클릭 시
  const handleCheckAll = () => {
    // 판매 중인 항목만 필터링
    const onSaleItems = data.filter((item) => item.onSale);

    if (isCheckedAll) {
      setSelectedItems([]);
    } else {
      // 판매 중인 항목만 selectedItems에 추가
      setSelectedItems(onSaleItems);
    }

    // isCheckedAll을 판매 중인 모든 항목이 선택되었는지에 따라 조정
    setIsCheckedAll(!isCheckedAll);
  };

  // 체크박스가 변경될 때마다 선택된 작품을 업데이트
  const handleCheckboxChange = (event, item) => {
    if (event.target.checked) {
      setSelectedItems((prevSelectedItems) => {
        const updatedItems = [...prevSelectedItems, item];
        return updatedItems;
      });
    } else {
      setSelectedItems((prevSelectedItems) => {
        const updatedItems = prevSelectedItems.filter(
          (selectedItem) => selectedItem.item_id !== item.item_id
        );
        return updatedItems;
      });
    }
  };

  // 선택된 작품 주문하기
  const orderSelectedItems = async (userId, itemIds) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/purchaseItems`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({ user_id: userId, item_ids: itemIds }),
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }
      const orderData = await response.json();
      return orderData;
    } catch (error) {
      console.error("Error ordering items:", error);
      throw error;
    }
  };

  //실제 주문 Handling
  const handleOrderSelectedItems = async () => {
    setClickAnime(true);
    try {
      const itemIds = selectedItems.map((item) => item.item_id);
      console.log(itemIds);
      const response = await orderSelectedItems(user.id, itemIds);
      console.log("Order successful:", response);
      const tid = response.tid;
      window.localStorage.setItem("temp_tid", tid);
      if (isMobile) {
        window.location.assign(`${response.next_redirect_mobile_url}`);
      } else {
        window.location.assign(`${response.next_redirect_pc_url}`);
      }
      setSelectedItems([]);
      setIsCheckedAll(false);
      setRenderKey(renderKey + 1);
      setClickAnime(false);
      // Refresh cart items
    } catch (error) {
      console.error("Order failed:", error);
    }
  };

  // 삭제하기 버튼 클릭 시 해당 작품 cart_item 테이블에서 삭제
  const handleCartItemDelete = (item) => {
    if (user) {
      if (data) {
        mutation.mutate(item);
      }
    }
  };

  // 로컬 스토리지에서 선택된 아이템 id 복원
  useEffect(() => {
    if (data) {
      const savedSelectedItemIds = JSON.parse(
        localStorage.getItem("selectedItems")
      );
      const savedIsCheckedAll = JSON.parse(
        localStorage.getItem("isCheckedAll")
      );
      if (savedSelectedItemIds) {
        const savedSelectedItems = data.filter((item) =>
          savedSelectedItemIds.includes(item.item_id)
        );
        setSelectedItems(savedSelectedItems);
      }
      if (savedIsCheckedAll !== null) {
        setIsCheckedAll(savedIsCheckedAll);
      }
    }
  }, [data]);

  // 선택된 아이템 상태가 변경될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    const selectedIds = selectedItems.map((item) => item.item_id);
    localStorage.setItem("selectedItems", JSON.stringify(selectedIds));
    localStorage.setItem("isCheckedAll", JSON.stringify(isCheckedAll));
  }, [selectedItems, isCheckedAll]);

  // selectedItems가 변경될 때 isCheckedAll 상태를 업데이트
  useEffect(() => {
    if (data) {
      const allSelected =
        data.length > 0 &&
        selectedItems.length === data.filter((item) => item.onSale).length;
      setIsCheckedAll(allSelected);
    }
  }, [selectedItems, data]);

  if (isPending) {
    return (
      <Container>
        <Header></Header>
        <ContentContainer>
          <CartText>장바구니</CartText> <ListText>목록</ListText>
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
        <CartText>장바구니</CartText> <ListText>목록</ListText>
        <CartItemList>
          {data && data.filter((item) => item.onSale).length ? (
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
          {data && data.length > 0 ? (
            data.map((item) => (
              <CartItem isOnSale={item.onSale} key={item.item_id}>
                {item.onSale ? (
                  <CheckBoxIcon
                    type="checkbox"
                    id={item.item_id}
                    name="isChecked"
                    checked={selectedItems.some(
                      (selectedItem) => selectedItem.item_id === item.item_id
                    )}
                    onChange={(event) => handleCheckboxChange(event, item)}
                  ></CheckBoxIcon>
                ) : (
                  <AlreadyPurchased>판매완료</AlreadyPurchased>
                )}
                <CartImgContainer>
                  <CartItemImg
                    onClick={() =>
                      nav(`/${item.department}`, { state: item.item_id })
                    }
                  >
                    <source type="image/webp" srcSet={`${item.imagePath}`} />
                    <img src={item.imagePath} alt="ArtWork" />
                  </CartItemImg>
                </CartImgContainer>
                <CartItemText>
                  {item.title} | {item.artist} <br></br> <br></br>
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
        {data && data.length > 0 ? (
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
              <OrderButton onClick={handleOrderSelectedItems}>
                {clickAnime ? (
                  <CircularProgress size={20} color="inherit" />
                ) : (
                  "선택 작품 주문"
                )}
              </OrderButton>
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
