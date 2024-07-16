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
} from "./ArtWorkDetailStyle.js";
import { useParams } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://wjoocdnkngzyrprnnytm.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indqb29jZG5rbmd6eXJwcm5ueXRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA0MzkyMjksImV4cCI6MjAzNjAxNTIyOX0.vBZyH45AvtMWgOzv2fRhMvJMO5xhcgaXpsV5rolYnq4"
);

function ArtWorkDetail() {
  // URL로 현재 작품의 ID 가져오기
  const { itemID } = useParams();

  // 작품 정보
  const [artWork, setArtWork] = useState(null);

  // 현재 라우트에 해당하는 미술작품만 필터링해서 가져오기
  useEffect(() => {
    // 미술작품 가져오기
    const getArtWorksByItemID = async () => {
      let { data: items, error } = await supabase
        // items 테이블에서
        .from("items")
        // title,artist,descriptions,imagePath,price,onSale,made_at column 선택
        .select("title,artist,descriptions,imagePath,price,onSale,made_at")
        // 현재 라우트에 해당하는 미술작품만 필터링
        .eq("itemID", itemID);

      // 에러 없고 데이터가 있다면
      if (!error && items) {
        // 미술작품 데이터를 ArtWorkList 상태에 저장
        setArtWork(items[0]);
      } else {
        console.log(error);
      }
    };

    getArtWorksByItemID();
  }, [itemID]);

  const [isPurchased, setIsPurchased] = useState(false);

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
          <LeftArrow></LeftArrow>
        </LeftContainer>
        <ImageContainer>
          <Image src={artWork && artWork.imagePath}></Image>
        </ImageContainer>
        <RightContainer>
          <RightArrowContainer>
            <RightArrow></RightArrow>
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
