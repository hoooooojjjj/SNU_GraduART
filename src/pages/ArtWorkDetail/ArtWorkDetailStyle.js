import styled from "@emotion/styled";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const Container = styled.div({
  width: "100dvw",
  height: "100dvh",
  backgroundColor: "#E7E6E4",
  overflowY: "scroll",
  msOverflowStyle: "none" /* Internet Explorer */,
  scrollbarWidth: "none" /* Firefox */,
  "&::-webkit-scrollbar": {
    display: "none",
  },
});

export const IntroContainer = styled.div`
  width: 100%;
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 80dvh;
  display: flex;
  flex-direction: row;
`;

export const ImageContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
  height: 67dvh;
  object-fit: cover;
  box-shadow: 11px 15px 20px 5px rgba(48, 48, 47, 0.8);
`;

export const LeftArrowContainer = styled.div`
  height: 100%;
  width: 25%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const LeftArrow = styled(ArrowBackIosIcon)`
  font-size: 60px;
  color: #c0c2c8;
  padding-right: 10%;
`;

export const RightArrowContainer = styled.div`
  height: 100%;
  width: 25%;
  display: flex;
  align-items: Center;
`;

export const RightMiddle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 10%;
`; //오른쪽 화살표, 작품 설명 박스를 묶어주는 div

export const RightArrow = styled(ArrowForwardIosIcon)`
  font-size: 60px;
  color: #c0c2c8;
`;

export const DescriptionContainer = styled.div`
  align-items: center;
  background-color: #f4f4f4;
  border-radius: 3px;
  display: flex;
  gap: 10px;
  height: 147px;
  justify-content: center;
  padding: 20px 13px;
  position: relative;
  width: 152px;
  box-shadow: 11px 15px 20px 5px rgba(48, 48, 47, 0.8);
`;

export const PurchaseContainer = styled.div`
  width: 100%;
  height: 10dvh;
`;
