import styled from "@emotion/styled";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LogoutIcon from "@mui/icons-material/Logout";
import backgroundImage from "/assets/baa.jpg";
//import ClearIcon from "@mui/icons-material/Clear";
//import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

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
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const IntroContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  height: 10dvh;
  align-items: center;
`;

export const BackIcon = styled(LogoutIcon)`
  transform: rotate(180deg);
  font-size: 25px;
  margin-left: 3dvw;
  color: #928a8a;
  &:hover {
    color: #2c2c2c;
  }
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
  justify-content: flex-start;
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
  color: #928a8a;
  padding-left: 40%;
`;

export const RightContainer = styled.div`
  height: 100%;
  width: 25%;
  display: flex;
  flex-direction: row;
  align-items: Center;
`;

export const RightArrowContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  &:hover {
    opacity: 1;
  }
`;

export const RightArrow = styled(ArrowForwardIosIcon)`
  font-size: 60px;
  color: #928a8a;
  cursor: pointer;
`;

export const RightMiddle = styled.div`
  display: flex;
  width: 100%;
  height: 83%;
  justify-content: flex-start;
  align-items: flex-end;
  padding-left: 15%;
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
  gap: 6px;
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
  align-items: center;
`;

export const PurchaseBox = styled.div`
  display: flex;
  flex-direction: row;
  color: #928a8a;
  &:hover {
    color: #2c2c2c;
  }
`;

export const DownArrow = styled(KeyboardArrowDownIcon)`
  font-size: 20px;
`;

export const PurchaseInformation = styled.div`
  cursor: pointer;
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
  cursor: pointer;
  color: ${(props) => (props.isSale ? "#121619" : "gray")};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 40px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background: #8c94a9;
`;

export const ModalButton = styled(Button)`
  background: #b5c0d0;
`;
