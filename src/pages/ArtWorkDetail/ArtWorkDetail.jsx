import Header from "../../components/Header/Header.jsx";
import {
  Container,
  IntroContainer,
  MainContainer,
  LeftArrowContainer,
  ImageContainer,
  Image,
  LeftArrow,
  RightArrow,
  RightArrowContainer,
  RightMiddle,
  DescriptionContainer,
  PurchaseContainer,
} from "./ArtWorkDetailStyle.js";

function ArtWorkDetail() {
  return (
    <Container>
      <IntroContainer>
        <Header></Header>
      </IntroContainer>
      <MainContainer>
        <LeftArrowContainer>
          <LeftArrow></LeftArrow>
        </LeftArrowContainer>
        <ImageContainer>
          <Image
            src={`${import.meta.env.VITE_PUBLIC_URL}/assets/forest.png`}
          ></Image>
        </ImageContainer>
        <RightArrowContainer>
          <RightMiddle>
            <RightArrow></RightArrow>
            <DescriptionContainer>ㅁㅁ</DescriptionContainer>
          </RightMiddle>
        </RightArrowContainer>
      </MainContainer>
      <PurchaseContainer></PurchaseContainer>
    </Container>
  );
}
export default ArtWorkDetail;
