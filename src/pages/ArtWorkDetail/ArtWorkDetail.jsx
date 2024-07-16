import { useState } from "react";
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

function ArtWorkDetail() {
  const [isPurchased, setIsPurchased] = useState(false);

  const HandlePurchaseClick = () => {
    setIsPurchased(!isPurchased);
  };

  const handleMainContainerClick = () => {
    if (isPurchased) {
      setIsPurchased(false);
    }
  };

  return (
    <Container isPurchased={isPurchased}>
      <IntroContainer>
        <Header></Header>
      </IntroContainer>
      <MainContainer onClick={handleMainContainerClick}>
        <LeftContainer>
          <LeftArrow></LeftArrow>
        </LeftContainer>
        <ImageContainer>
          <Image
            src={`${import.meta.env.VITE_PUBLIC_URL}/assets/forest.png`}
          ></Image>
        </ImageContainer>
        <RightContainer>
          <RightMiddle>
            <DescriptionContainer>
              <DescriptionMiddle>
                <Title>Roll Series Chair </Title>
                <Description>
                  작가 | 2023 <br />
                  43x66x82 cm
                </Description>
              </DescriptionMiddle>
            </DescriptionContainer>
          </RightMiddle>
          <RightArrowContainer>
            <RightArrow></RightArrow>
          </RightArrowContainer>
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
              <Price>600,000원</Price>
              <BuyInfo>장바구니 담기</BuyInfo>
            </AlternateText>
          )}
        </PurchaseMiddle>
      </PurchaseContainer>
    </Container>
  );
}
export default ArtWorkDetail;
