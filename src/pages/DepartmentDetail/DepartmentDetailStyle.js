import styled from "@emotion/styled";
import InstagramIcon from "@mui/icons-material/Instagram";
import Pagination from "@mui/material/Pagination";
import { keyframes } from "@emotion/react";

export const Container = styled.div({
  width: "100dvw",
  height: "100dvh",
  backgroundColor: "#ffffff",
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

export const Intro = styled.div`
  width: 100%;
  height: 100dvh;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

export const TitleBackground = styled.div`
  background-color: ${(props) => `${props.color}`};
  width: 100%;
  height: 25dvh;
  animation: ${fadeIn} 1s ease-out;
`;

export const Img = styled.img`
  width: 100%;
  height: 65dvh;
  object-fit: cover;
  animation: ${fadeIn} 1s ease-out;
`;

const fadeInFromLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const TitleText = styled.div`
  font-family: "Pretendard-ExtraBold", Helvetica;
  font-weight: 800;
  color: #ffffff;
  font-size: 60px;
  width: 97%;
  position: relative;
  top: 30%;
  left: 3%;
  animation: ${fadeInFromLeft} 1s ease-out;
`;

export const DescriptionContainer = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  position: relative;
  box-shadow: 5px 5px 20px gray;
  margin-bottom: 7dvh;
`;

export const MiddleContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  width: 88%;
  margin: 5dvh 0 9dvh 0;
  flex-wrap: wrap;
`;

export const DescriptionExtra = styled.div`
  width: 27%;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  position: relative;
  color: #000000;
`;

export const ExtraTitle = styled.h2`
  width: 100%;
  color: #000000;
  font-family: "Pretendard-ExtraBold", Helvetica;
  font-size: 40px;
  font-weight: 800;
`;

export const LinkContainer = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: #000000;
  text-decoration: none;
`;

export const Insta = styled.div`
  align-items: flex-start;
  display: flex;
  font-size: 20px;
  text-decoration: none;
`;

export const InstaIcon = styled(InstagramIcon)`
  align-items: center;
  display: flex;
  padding-right: 2%;
`;

export const Link = styled.a`
  display: flex;
  font-size: 20px;
  color: #000000;
  margin-bottom: 9px;
  text-decoration: none;
  &:hover {
    color: #66a5ef; // 호버 상태일 때 색상을 오렌지로 변경
    text-decoration: underline; // 호버 상태일 때 밑줄 추가
  }
`;
export const DescriptionBox = styled.div`
  width: 58%;
  background-color: #ffffff;
  position: relative;
  flex-wrap: wrap;
`;

export const DescriptionText = styled.p`
  position: static;
  top: 9%;
  width: 100%;
  color: #000000;
  font-family: "Pretendard-Regular", Helvetica;
  font-size: 18px;
  line-height: 1.7;
  font-weight: 400;
  margin-top: 5dvh;
`;

/* ArtWorkList ---------------------------------------------- */

export const ArtWorkListContainer = styled.div({
  width: "100%",
  height: "100dvh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
});

export const ArtWorkListWrap = styled.div({
  width: "90%",
  height: "85%",
  display: "grid",
  gap: "40px",
  gridTemplateRows: "repeat(2, 1fr)",
  gridTemplateColumns: "repeat(3, 1fr)",
});

export const ArtWorkGridItem = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center; /* 자식 요소를 수평 중앙 정렬 */
`;

const zoomInWithShadow = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(255, 255, 255, 0);
  }
  100% {
    transform: scale(1.05); /* 약간의 확대 효과 */
    box-shadow: 0 8px 30px rgba(255, 255, 255, 0.6);
  }
`;
export const ArtWorkImgWrap = styled.div`
  width: 100%;
  height: 75%;
  margin-bottom: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* 애니메이션 부드럽게 전환 */

  &:hover {
    animation: ${zoomInWithShadow} 0.3s forwards; /* 호버 시 애니메이션 적용 */
  }
`;

// 이미지 로딩
export const PendingArtWorkImg = styled.div`
  z-index: 100;
  opacity: ${(props) => (props.imageLoaded ? 0 : 1)};
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & > span {
    display: inline-block;
    width: 15px;
    height: 15px;
    background-color: gray;
    border-radius: 50%;
    animation: loading 1s infinite linear;
  }
  & > span:nth-of-type(0) {
    margin: 5px;
    animation-delay: 0s;
    background-color: red;
  }
  & > span:nth-of-type(1) {
    margin: 5px;
    animation-delay: 0.2s;
    background-color: dodgerblue;
  }
  & > span:nth-of-type(2) {
    margin: 5px;
    animation-delay: 0.4s;
    background-color: greenyellow;
  }
  transition: opacity 0.1s ease-in-out;
  ${(props) =>
    !props.imageLoaded &&
    `
    opacity: 1;
  `}

  @keyframes loading {
    0% {
      opacity: 0;
      transform: scale(0.5);
    }
    50% {
      opacity: 1;
      transform: scale(1.2);
    }
    100% {
      opacity: 0;
      transform: scale(0.5);
    }
  }
`;

export const ArtWorkImg = styled.picture`
  opacity: ${(props) => (props.imageLoaded ? 1 : 0)};
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(10px 10px 7px rgba(0, 0, 0, 0.4));
  }
`;

export const ArtWorkTitle = styled.div({
  width: "100%",
  height: "10%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "20px",
  fontWeight: "bold",
});

export const ArtWorkDescription = styled.div({
  width: "100%",
  height: "10%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "15px",
});

export const Paginations = styled(Pagination)({
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});
