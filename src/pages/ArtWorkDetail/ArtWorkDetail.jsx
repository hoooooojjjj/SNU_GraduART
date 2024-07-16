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
} from "./ArtWorkDetailStyle.js";

function ArtWorkDetail() {
  const [isPurchased, setIsPurchased] = useState(false);

  const HandlePurchaseClick = () => {
    setIsPurchased(!isPurchased);
  };
  return (
    <Container isPurchased={isPurchased}>
      <IntroContainer>
        <Header></Header>
      </IntroContainer>
      <MainContainer>
        <LeftContainer>
          <LeftArrow></LeftArrow>
        </LeftContainer>
        <ImageContainer>
          <Image
            src={`${import.meta.env.VITE_PUBLIC_URL}/assets/forest.png`}
          ></Image>
        </ImageContainer>
        <RightContainer>
          <RightArrowContainer>
            <RightArrow></RightArrow>
          </RightArrowContainer>
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
        </RightContainer>
      </MainContainer>
      <PurchaseContainer>
        <PurchaseMiddle>
          <DownArrow></DownArrow>
          <PurchaseInformation onClick={HandlePurchaseClick}>
            구매 정보
          </PurchaseInformation>
        </PurchaseMiddle>
      </PurchaseContainer>
    </Container>
  );
}
export default ArtWorkDetail;
