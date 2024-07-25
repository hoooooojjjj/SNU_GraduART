import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { keyframes } from "@emotion/react";
import "animate.css";

// ContentContainer
export const ContentContainer = styled.div`
  width: 100dvw;
`;

//maintext 애니메이션
const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const FadeInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const FadeInFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

// MainPicture
export const MainPicture = styled.section`
  animation: fadeInRight;
  animation-duration: 0.7s;
  animation-timing-function: linear;
  width: 100%;
  height: 94dvh;
  background-image: url(${(props) => props.path});
  background-size: cover;
  background-position-y: 50%;
  &.fade-out {
    animation: fadeOutUp;
  }
`;

// GraduART Text
export const MainText = styled.div`
  animation: ${FadeIn};
  animation-duration: 2s;
  animation-timing-function: linear;
  color: #ffffff;
  font-family: "DM Serif Display";
  font-size: 96px;
  font-style: normal;
  font-weight: 400;
  line-height: 290%; /* 278.4px */
  position: absolute;
  left: -165px;
  top: 150px;
  transform: rotate(90deg);
`;

// 서울대학교 미술대학 졸업전시 Text
export const SubText = styled.div`
  animation: fadeInUp;
  animation-duration: 2s;
  color: #ffffff;
  font-family: Pretendard;
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: 110%; /* 105.6px */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  text-align: right;
  position: absolute;
  right: 15px;
  bottom: 10px;
  padding-bottom: 3%;
  padding-right: 3%;
`;

// DepartmentBanner
// OrientalContainer
export const OrientalContainer = styled.div`
  width: 100%;
  height: 50dvh;
  display: flex;
  position: relative;
`;

export const SectionContainer = styled(NavLink)`
  width: 100%;
  height: 50dvh;
  display: flex;
  position: relative;
`;

// OrientalPaintingBlock
export const OrientalPaintingBlock = styled.div((props) => ({
  position: "relative",
  backgroundColor: props.color,
  width: "30%",
  height: "100%",
  left: 0,
  opacity: 0, // Start with opacity 0
  transition: "opacity 1s ease-in-out",
  "&.animate": {
    display: "block",
    opacity: 1,
    transform: "translateX(0)",
    animation: `${FadeInFromLeft} 1s ease-in-out`,
  },
}));

// OrientalPaintingEngText
export const OrientalPaintingEngText = styled.div`
  position: absolute;
  left: 10%;
  top: 15%;
  color: #ffffff;
  font-family: Pretendard;
  font-size: 200%;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 45px */
  opacity: 0;
  transition: opacity 1s ease-in-out;
  &.animate {
    opacity: 1;
    animation: ${FadeInFromLeft} 1s ease-in-out;
  }
`;

// OrientalPaintingKorText
export const OrientalPaintingKorText = styled.div`
  position: absolute;
  left: 10%;
  top: 25%;
  color: #ffffff;
  font-family: Pretendard;
  font-size: 150%;
  font-style: normal;
  font-weight: 350;
  line-height: 100%; /* 35px */
  opacity: 0;
  transition: opacity 1s ease-in-out;
  &.animate {
    opacity: 1;
    animation: ${FadeInFromLeft} 1s ease-in-out;
  }
`;

// OrientalPaintingImg
export const OrientalPaintingImg = styled.div((props) => ({
  backgroundImage: `url(${props.img})`,
  backgroundSize: "cover",
  backgroundPosition: "70% 55%",
  width: "100%",
  height: "100%",
  position: "absolute",
}));

// WesternContainer
export const WesternContainer = styled.div`
  width: 100%;
  height: 50dvh;
  display: flex;
  position: relative;
`;

// WesternPaintingImg
export const WesternPaintingImg = styled.div((props) => ({
  backgroundImage: `url(${props.img})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100%",
  height: "100%",
  position: "absolute",
}));

// WesternPaintingBlock
export const WesternPaintingBlock = styled.div((props) => ({
  position: "absolute",
  backgroundColor: props.color,
  width: "30%",
  height: "100%",
  right: 0,
  display: "none", // Start with display none
  opacity: 0, // Start with opacity 0
  transition: "opacity 1s ease-in-out",
  "&.animate": {
    display: "block",
    opacity: 1,
    transform: "translateX(0)",
    animation: `${FadeInFromRight} 1s ease-in-out`,
  },
}));

// WesternPaintingEngText
export const WesternPaintingEngText = styled.div`
  position: absolute;
  left: 10%;
  top: 15%;
  color: #ffffff;
  font-family: Pretendard;
  font-size: 200%;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 45px */
  opacity: 0;
  transition: opacity 1s ease-in-out;
  &.animate {
    opacity: 1;
    animation: ${FadeInFromRight} 1s ease-in-out;
  }
`;

// WesternPaintingKorText
export const WesternPaintingKorText = styled.div`
  position: absolute;
  left: 10%;
  top: 25%;
  color: #ffffff;
  font-family: Pretendard;
  font-size: 150%;
  font-style: normal;
  font-weight: 350;
  line-height: 100%; /* 35px */
  opacity: 0;
  transition: opacity 1s ease-in-out;
  &.animate {
    opacity: 1;
    animation: ${FadeInFromRight} 1s ease-in-out;
  }
`;

// SculptureContainer
export const SculptureContainer = styled.div`
  width: 100%;
  height: 50dvh;
  display: flex;
  position: relative;
`;

// SculptureBlock
export const SculptureBlock = styled.div((props) => ({
  position: "relative",
  backgroundColor: props.color,
  width: "30%",
  height: "100%",
  left: 0,
  opacity: 0, // Start with opacity 0
  transition: "opacity 1s ease-in-out",
  "&.animate": {
    display: "block",
    opacity: 1,
    transform: "translateX(0)",
    animation: `${FadeInFromLeft} 1s ease-in-out`,
  },
}));

// SculptureEngText
export const SculptureEngText = styled.div`
  position: absolute;
  left: 10%;
  top: 15%;
  color: #ffffff;
  font-family: Pretendard;
  font-size: 200%;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 45px */
  opacity: 0;
  transition: opacity 1s ease-in-out;
  &.animate {
    opacity: 1;
    animation: ${FadeInFromLeft} 1s ease-in-out;
  }
`;

// SculptureKorText
export const SculptureKorText = styled.div`
  position: absolute;
  left: 10%;
  top: 25%;
  color: #ffffff;
  font-family: Pretendard;
  font-size: 150%;
  font-style: normal;
  font-weight: 350;
  line-height: 100%; /* 35px */
  opacity: 0;
  transition: opacity 1s ease-in-out;
  &.animate {
    opacity: 1;
    animation: ${FadeInFromLeft} 1s ease-in-out;
  }
`;

// SculptureImg
export const SculptureImg = styled.div((props) => ({
  backgroundImage: `url(${props.img})`,
  backgroundSize: "cover",
  backgroundPosition: "50% 50%",
  width: "100%",
  height: "100%",
  position: "absolute",
}));

// CraftContainer
export const CraftContainer = styled.div`
  width: 100%;
  height: 50dvh;
  display: flex;
  position: relative;
`;

// CraftImg
export const CraftImg = styled.div((props) => ({
  backgroundImage: `url(${props.img})`,
  backgroundSize: "cover",
  backgroundPosition: "50% 60%",
  width: "100%",
  height: "100%",
  position: "absolute",
}));

// CraftBlock
export const CraftBlock = styled.div((props) => ({
  position: "absolute",
  backgroundColor: props.color,
  width: "30%",
  height: "100%",
  right: 0,
  display: "none", // Start with display none
  opacity: 0, // Start with opacity 0
  transition: "opacity 1s ease-in-out",
  "&.animate": {
    display: "block",
    opacity: 1,
    transform: "translateX(0)",
    animation: `${FadeInFromRight} 1s ease-in-out`,
  },
}));

// CraftEngText
export const CraftEngText = styled.div`
  position: absolute;
  left: 10%;
  top: 15%;
  color: #ffffff;
  font-family: Pretendard;
  font-size: 200%;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 45px */
  opacity: 0;
  transition: opacity 1s ease-in-out;
  &.animate {
    opacity: 1;
    animation: ${FadeInFromRight} 1s ease-in-out;
  }
`;

// CraftKorText
export const CraftKorText = styled.div`
  position: absolute;
  left: 10%;
  top: 25%;
  color: #ffffff;
  font-family: Pretendard;
  font-size: 150%;
  font-style: normal;
  font-weight: 350;
  line-height: 100%; /* 35px */
  opacity: 0;
  transition: opacity 1s ease-in-out;
  &.animate {
    opacity: 1;
    animation: ${FadeInFromRight} 1s ease-in-out;
  }
`;

// DesignContainer
export const DesignContainer = styled.div`
  width: 100%;
  height: 50dvh;
  display: flex;
  position: relative;
`;

// DesignBlock
export const DesignBlock = styled.div((props) => ({
  position: "relative",
  backgroundColor: props.color,
  width: "30%",
  height: "100%",
  left: 0,
  opacity: 0, // Start with opacity 0
  transition: "opacity 1s ease-in-out",
  "&.animate": {
    display: "block",
    opacity: 1,
    transform: "translateX(0)",
    animation: `${FadeInFromLeft} 1s ease-in-out`,
  },
}));

// DesignEngText
export const DesignEngText = styled.div`
  position: absolute;
  left: 10%;
  top: 15%;
  color: #ffffff;
  font-family: Pretendard;
  font-size: 200%;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 45px */
  opacity: 0;
  transition: opacity 1s ease-in-out;
  &.animate {
    opacity: 1;
    animation: ${FadeInFromLeft} 1s ease-in-out;
  }
`;

// DesignKorText
export const DesignKorText = styled.div`
  position: absolute;
  left: 10%;
  top: 25%;
  color: #ffffff;
  font-family: Pretendard;
  font-size: 150%;
  font-style: normal;
  font-weight: 350;
  line-height: 100%; /* 35px */
  opacity: 0;
  transition: opacity 1s ease-in-out;
  &.animate {
    opacity: 1;
    animation: ${FadeInFromLeft} 1s ease-in-out;
  }
`;

// DesignImg
export const DesignImg = styled.div((props) => ({
  backgroundImage: `url(${props.img})`,
  backgroundSize: "cover",
  backgroundPosition: "50% 50%",
  width: "100%",
  height: "100%",
  position: "absolute",
}));

// MediaArtsContainer
export const MediaArtsContainer = styled.div`
  width: 100%;
  height: 50dvh;
  display: flex;
  position: "relative";
`;

// MediaArtsImg
export const MediaArtsImg = styled.div((props) => ({
  backgroundImage: `url(${props.img})`,
  backgroundSize: "cover",
  backgroundPosition: "50% 60%",
  width: "100%",
  height: "100%",
  position: "absolute",
}));

// MediaArtsBlock
export const MediaArtsBlock = styled.div((props) => ({
  position: "absolute",
  backgroundColor: props.color,
  width: "30%",
  height: "100%",
  right: 0,
  display: "none", // Start with display none
  opacity: 0, // Start with opacity 0
  transition: "opacity 1s ease-in-out",
  "&.animate": {
    display: "block",
    opacity: 1,
    transform: "translateX(0)",
    animation: `${FadeInFromRight} 1s ease-in-out`,
  },
}));

// MediaArtsEngText
export const MediaArtsEngText = styled.div`
  position: absolute;
  left: 10%;
  top: 15%;
  color: #000000;
  font-family: Pretendard;
  font-size: 200%;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 45px */
  opacity: 0;
  transition: opacity 1s ease-in-out;
  &.animate {
    opacity: 1;
    animation: ${FadeInFromRight} 1s ease-in-out;
  }
`;

// MediaArtsKorText
export const MediaArtsKorText = styled.div`
  position: absolute;
  left: 10%;
  top: 25%;
  color: #000000;
  font-family: Pretendard;
  font-size: 150%;
  font-style: normal;
  font-weight: 350;
  line-height: 100%; /* 35px */
  opacity: 0;
  transition: opacity 1s ease-in-out;
  &.animate {
    opacity: 1;
    animation: ${FadeInFromRight} 1s ease-in-out;
  }
`;

// 검색 전체 컨테이너
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 3%;
  position: relative;
`;

// 검색창
export const SearchBox = styled.div`
  width: 60%;
  margin: 10dvh auto;
  margin-bottom: 7dvh;
  height: 5%;
  padding: 1% 1%;
  border-radius: 50px;
  border: 2px solid #818181;
  background: #ffffff;
`;

// 검색창 Placeholder Text "작가, 작품, 작품 설명을 검색하세요."
export const SearchPlaceHolder = styled.div`
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 100%;
  color: #818181;
  position: absolute;
  margin-top: 12.4dvh;
  left: 23dvw;
`;

// 검색 결과 전체 컨테이너
export const SearchResultContainer = styled.div`
  width: 70%;
  margin-bottom: 5%;
`;

// 검색 결과 카테고리: "작가", "작품명" 등
export const ResultCategoryText = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  margin-top: 3%;
`;

// 작가, 작품명 검색결과 컨테이너
export const ResultContainer = styled.div`
  background: white;
  width: 70dvw;
  margin-top: 40px;
  margin-bottom: 10dvh;
`;

// 검색결과의 작품명 텍스트
export const ResultTitle = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  margin-top: 4dvh;
`;

// 검색결과의 작가 및 설명 텍스트
export const ResultExp = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  padding: 1.5dvh 0;
  border-bottom: solid #818181;
`;
