import Header from "../../components/Header/Header.jsx";
import { Container, IntroContainer } from "./ImageDetailStyle.js";

function ImageDetail() {
  return (
    <Container>
      <IntroContainer>
        <Header></Header>
      </IntroContainer>
      <MainContainer></MainContainer>
    </Container>
  );
}
export default ImageDetail;
