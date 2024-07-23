import { useContext, useEffect, useState } from "react";

import {
  Container,
  IntroContainer,
  BackIcon,
  MainContainer,
  LeftContainer,
  ImageContainer,
  Image,
  LeftArrow,
  RightArrow,
  RightContainer,
  RightArrowContainer,
  RightMiddle,
  DescriptionContainer,
  DescriptionMiddle,
  Title,
  Description,
  PurchaseContainer,
  DownArrow,
  PurchaseInformation,
  PurchaseMiddle,
  AlternateText,
  Price,
  BuyInfo,
  ImageWrap,
  ModalOverlay,
  ModalContent,
  ModalButton,
  Button,
  PurchaseBox,
} from "./ArtWorkDetailStyle.js";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { supabase } from "../../ServerClient.js";
import { userContext } from "../../App";

function ArtWorkDetail() {
  const nav = useNavigate();

  // 현재 라우트에 해당하는 작품 ID
  const { itemID } = useParams();

  // 현재 라우트에 해당하는 작품
  const [artWork, setArtWork] = useState(null);

  // 현재 라우트에 해당하는 과 작품 리스트
  const artWorkList = useLocation().state;

  // 구매 정보 토글
  const [isPurchased, setIsPurchased] = useState(false);

  // 유저 정보 가져오기
  const [user] = useContext(userContext);

  //모달 정보
  const [isModalVisible, setIsModalVisible] = useState(false);

  // 똑같은 상품을 담았을 때
  const [isOnConflict, setIsOnConflict] = useState(false);

  // 모달을 표시하는 함수
  const showModal = () => {
    setIsModalVisible(true);
  };

  // 모달을 숨기는 함수
  const hideModal = () => {
    setIsModalVisible(false);
  };

  //모달창 함수
  const Modal = ({ onClose }) => (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {isOnConflict ? (
          <>
            <p>이미 장바구니에 담긴 상품입니다.</p>
            <ModalButton onClick={onClose}>닫기</ModalButton>
          </>
        ) : (
          <>
            <p>장바구니에 추가되었습니다.</p>
            <ModalButton onClick={onClose}>계속 관람하기</ModalButton>
            <Button
              onClick={() => {
                onClose();
                nav("/cart");
              }}
            >
              장바구니 보기
            </Button>
          </>
        )}
      </ModalContent>
    </ModalOverlay>
  );

  // artWorkList에서 현재 라우트에 해당하는 작품만 필터링
  useEffect(() => {
    const curartWork = artWorkList.filter(
      (artWork) => artWork.itemID === itemID
    );
    setArtWork(curartWork[0]);
  }, [itemID]);

  // 오른쪽 화살표를 누르면 다음 작품 상세 페이지로 이동
  const onRightArrowClick = () => {
    // 현재 작품보다 오래된 작품 중 제일 첫번째 작품 필터링
    const nextArtWork = artWorkList.filter(
      (artworks) =>
        new Date(artWork.created_at) > new Date(artworks.created_at) &&
        artWork.itemID !== artworks.itemID
    );
    // 현재 작품보다 오랜된 작품이 없으면 가장 최신 작품으로 이동
    if (nextArtWork.length === 0) {
      nav(`/${artWorkList[0].department}/${artWorkList[0].itemID}`, {
        state: artWorkList,
      });
      // 현재 작품보다 오래된 작품이 있으면 그 작품으로 이동
    } else {
      nav(`/${nextArtWork[0].department}/${nextArtWork[0].itemID}`, {
        state: artWorkList,
      });
    }
  };

  // 왼쪽 화살표를 누르면 이전 작품 상세 페이지로 이동
  const onLeftArrowClick = () => {
    // 현재 작품보다 최신인 작품 중 제일 마지막 작품 필터링
    const prevArtWork = artWorkList.filter(
      (artworks) =>
        new Date(artWork.created_at) < new Date(artworks.created_at) &&
        artWork.itemID !== artworks.itemID
    );
    // 현재 작품보다 최신인 작품이 없으면 가장 오래된 작품으로 이동
    if (prevArtWork.length === 0) {
      nav(`/${artWorkList.at(-1).department}/${artWorkList.at(-1).itemID}`, {
        state: artWorkList,
      });
      // 현재 작품보다 최신인 작품이 있으면 그 작품으로 이동
    } else {
      nav(`/${prevArtWork.at(-1).department}/${prevArtWork.at(-1).itemID}`, {
        state: artWorkList,
      });
    }
  };

  const HandlePurchaseClick = () => {
    setIsPurchased(true);
  };

  const handleMainContainerClick = () => {
    if (isPurchased) {
      setIsPurchased(false);
    }
  };

  // 장바구니 담기 클릭 시 cart_item 테이블에 데이터 추가
  const onInsertCart = async () => {
    setIsOnConflict(false);
    // 로그인 안했다면 로그인 페이지로 이동
    if (!user) {
      nav("/login", {
        state: { redirectMessage: "로그인이 필요한 서비스입니다" },
      });
      return null;
    }
    if (!artWork.onSale) {
      return null;
    }
    // cart_item 테이블에 데이터 추가
    const { data, error } = await supabase
      .from("cart_item")
      .upsert(
        [
          {
            user_id: user.id,
            item_id: artWork.itemID,
            collection: artWork.collection,
            department: artWork.department,
            title: artWork.title,
            artist: artWork.artist,
            descriptions: artWork.descriptions,
            imagePath: artWork.imagePath,
            price: artWork.price,
            onSale: artWork.onSale,
            made_at: artWork.made_at,
            num_code: artWork.num_code,
          },
        ],

        // 중복되는 item_id가 있을 경우 onConflict 옵션으로 안 담기게 하기
        { onConflict: "item_id" }
      )
      .eq("onSale", true)
      .select();

    if (error) {
      console.log(error);
      // 중복되는 item_id가 있을 경우 이미 담겼다는 모달창 띄우기
      if (error.code === "42501") {
        setIsOnConflict(true);
      }
    }

    showModal();
  };

  const handleBackIconClick = () => {
    // department는 artWorkList에서 첫 번째 작품의 department를 가져오도록 설정
    const department = artWorkList[0]?.department;
    if (department) {
      nav(`/${department}`);
    }
  };

  return artWork ? (
    <Container isPurchased={isPurchased}>
      <IntroContainer>
        <BackIcon onClick={handleBackIconClick}></BackIcon>
      </IntroContainer>
      <MainContainer onClick={handleMainContainerClick}>
        <LeftContainer>
          <LeftArrow onClick={onLeftArrowClick}></LeftArrow>
        </LeftContainer>
        <ImageWrap>
          <ImageContainer>
            <Image
              url={artWork.imagePath}
              alt={`${artWork.artist}님의 작품`}
            ></Image>
          </ImageContainer>
        </ImageWrap>
        <RightContainer>
          <RightMiddle>
            <DescriptionContainer>
              <DescriptionMiddle>
                <Title>{artWork.title} </Title>
                <Description>
                  {artWork.artist} | {artWork.made_at.slice(0, 4)} <br />
                  {artWork.descriptions}
                </Description>
              </DescriptionMiddle>
            </DescriptionContainer>
          </RightMiddle>
          <RightArrowContainer>
            <RightArrow onClick={onRightArrowClick}></RightArrow>
          </RightArrowContainer>
        </RightContainer>
      </MainContainer>
      <PurchaseContainer>
        <PurchaseMiddle onClick={HandlePurchaseClick}>
          {!isPurchased ? (
            <PurchaseBox>
              <DownArrow />
              <PurchaseInformation>구매 정보</PurchaseInformation>
            </PurchaseBox>
          ) : (
            <AlternateText>
              <Price>{artWork.price.toLocaleString() + "원"}</Price>
              <BuyInfo onClick={onInsertCart} isSale={artWork.onSale}>
                {artWork.onSale ? "장바구니 담기" : "판매 완료"}
              </BuyInfo>
            </AlternateText>
          )}
        </PurchaseMiddle>
      </PurchaseContainer>
      {isModalVisible && <Modal onClose={hideModal} />}
    </Container>
  ) : (
    <></>
  );
}
export default ArtWorkDetail;
