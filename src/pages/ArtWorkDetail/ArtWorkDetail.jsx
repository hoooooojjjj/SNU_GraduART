import { useEffect, useState } from "react";
import Header from "../../components/Header/Header.jsx";
import {
  Container,
  IntroContainer,
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
} from "./ArtWorkDetailStyle.js";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://wjoocdnkngzyrprnnytm.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indqb29jZG5rbmd6eXJwcm5ueXRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA0MzkyMjksImV4cCI6MjAzNjAxNTIyOX0.vBZyH45AvtMWgOzv2fRhMvJMO5xhcgaXpsV5rolYnq4"
);

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
    setIsPurchased(!isPurchased);
  };

  const handleMainContainerClick = () => {
    if (isPurchased) {
      setIsPurchased(false);
    }
  };

  return artWork ? (
    <Container isPurchased={isPurchased}>
      <IntroContainer>
        <Header></Header>
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
          <RightArrowContainer>
            <RightArrow onClick={onRightArrowClick}></RightArrow>
          </RightArrowContainer>
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
        </RightContainer>
      </MainContainer>
      <PurchaseContainer>
        <PurchaseMiddle onClick={HandlePurchaseClick}>
          {!isPurchased ? (
            <>
              <DownArrow />
              <PurchaseInformation>구매 정보</PurchaseInformation>
            </>
          ) : (
            <AlternateText>
              <Price>{artWork.price}</Price>
              <BuyInfo>장바구니 담기</BuyInfo>
            </AlternateText>
          )}
        </PurchaseMiddle>
      </PurchaseContainer>
    </Container>
  ) : (
    <></>
  );
}
export default ArtWorkDetail;
