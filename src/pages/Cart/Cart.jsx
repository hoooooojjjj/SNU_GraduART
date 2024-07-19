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
} from "./CartStyle.js";
import Header from "../../components/Header/Header.jsx";
import { userContext } from "../../App.jsx";
import { supabase } from "../../ServerClient.js";
import {useNavigate} from "react-router-dom";
import {isMobile} from "react-device-detect";

function Cart() {
  // 유저가 장바구니에 담은 작품 리스트
  const [userCartItemList, setUserCartItemList] = useState(null);

  // 유저 정보 가져오기
  const [user] = useContext(userContext);

  // 리렌더링 시키기 위한 키
  const [renderKey, setRenderKey] = useState(0);

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

      const isMobileDevice = () => {
        // Check for common mobile user agents
        const mobileRegex = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
        // Check for common desktop user agents to exclude them explicitly
        const desktopRegex = /Windows|Macintosh|Linux|X11|CrOS|BSD/i;

        const userAgent = navigator.userAgent;
        return mobileRegex.test(userAgent) && !desktopRegex.test(userAgent);
      };

      if (isMobile) {
        window.location.assign(`${response.next_redirect_mobile_url}?tid=${tid}`);
      } else {
        window.location.assign(`${response.next_redirect_pc_url}?tid=${tid}`);
      }

      setSelectedItems([]);
      setIsCheckedAll(false);
      setRenderKey(renderKey + 1); // Refresh cart items
    } catch (error) {
      console.error('Order failed:', error);
    }
  };

  return (
    <Container key={renderKey}>
      <Header></Header>
      <ContentContainer>
        <CartText>장바구니</CartText>
        <ListText>
          목록<CheckAll onClick={handleCheckAll}>전체 작품 선택</CheckAll>
        </ListText>

        <CartItemList>
          {userCartItemList ? (
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
            <></>
          )}
        </CartItemList>
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
          <OrderButton onClick={handleOrderSelectedItems}>선택 작품 주문</OrderButton>
        </OrderContainer>
      </ContentContainer>
    </Container>
  );
}

export default Cart;
