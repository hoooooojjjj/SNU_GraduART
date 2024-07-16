import styled from "@emotion/styled";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const Container = styled.div`
  width: 100dvw;
  height: 100dvh;
  background-color: #e7e6e4;
  ${({ isPurchased }) =>
    isPurchased &&
    ` background: linear-gradient(180deg, #E7E6E4 90.5%, #C6C5C3 98%, #BCBCBC 100%);
      backdrop-filter: blur(5px);
    `}
  overflow-y: scroll;
  -ms-overflow-style: none; /* Internet Explorer */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const IntroContainer = styled.div`
  width: 100%;
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 80dvh;
  display: flex;
  flex-direction: row;
`;

export const ImageWrap = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImageContainer = styled.div`
  height: 90%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => `url(${props.url})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  filter: drop-shadow(10px 10px 7px rgba(0, 0, 0, 0.4));
`;

export const LeftContainer = styled.div`
  height: 100%;
  width: 25%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  &:hover {
    opacity: 1;
  }
`;

export const LeftArrow = styled(ArrowBackIosIcon)`
  cursor: pointer;
  font-size: 60px;
  color: #c0c2c8;
  padding-right: 10%;
`;

export const RightContainer = styled.div`
  height: 100%;
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: Center;
`;

export const RightArrowContainer = styled.div`
  height: 54%;
  width: 100%;
  display: flex;
  align-items: flex-end;
  padding-left: 30%;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  &:hover {
    opacity: 1;
  }
`;

export const RightArrow = styled(ArrowForwardIosIcon)`
  font-size: 60px;
  color: #c0c2c8;
  cursor: pointer;
`;

export const RightMiddle = styled.div`
  display: flex;

  width: 100%;
  height: 46%;
  justify-content: flex-start;
  padding-left: 30%;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f4f4f4;
  border-radius: 3px;
  height: 13dvh;
  width: 15dvh;
  padding: 20px 13px;
  box-shadow: 10px 10px 8px 0px rgba(0, 0, 0, 0.25);
  position: relative;
`;

export const DescriptionMiddle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Title = styled.div`
  color: #2c2c2c;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
`;

export const Description = styled.div`
  color: #2c2c2c;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
`;

export const PurchaseContainer = styled.div`
  width: 100%;
  height: 10dvh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PurchaseMiddle = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DownArrow = styled(KeyboardArrowDownIcon)`
  font-size: 20px;
  color: #2c2c2c;
`;

export const PurchaseInformation = styled.div`
  color: #2c2c2c;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
`;

export const AlternateText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 40dvw;
`;

export const Price = styled.div`
  color: #121619;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
`;

export const BuyInfo = styled.div`
  color: ${(props) => (props.isSale ? "#121619" : "gray")};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
`;
