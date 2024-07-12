import styled from "@emotion/styled";
import InstagramIcon from "@mui/icons-material/Instagram";
import Pagination from "@mui/material/Pagination";
export const Container = styled.div`
  width: 100dvw;
  height: auto;
  background-color: #ffffff;
`;

export const IntroContainer = styled.div`
  width: 100dvw;
  height: auto;
`;

export const Intro = styled.div`
  width: 100%;
  height: 100dvh;
`;

export const Header = styled.div`
  width: 100%;
  height: 10dvh;
  background-color: #ffffff;
`;

export const TitleBackground = styled.div`
  background-color: #ee5397;
  width: 100%;
  height: 25dvh;
`;

export const Img = styled.img`
  width: 100%;
  height: 65dvh;
  background-size: cover;
`;

export const TitleText = styled.div`
  font-family: "Pretendard-ExtraBold", Helvetica;
  font-weight: 800;
  color: #ffffff;
  font-size: 70px;
  width: 97%;
  position: relative;
  top: 24%;
  left: 3%;
`;

export const DescriptionContainer = styled.div`
  width: 100%;
  height: 60dvh;
  align-items: center;
  justify-content: center;
  display: flex;
  position: relative;
  box-shadow: 5px 5px 20px gray;
`;

export const MiddleContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  width: 88%;
  height: 75%;
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
  height: 291px;
  width: 58%;
  background-color: #ffffff;
  position: relative;
`;

export const DescriptionText = styled.p`
  position: absolute;
  top: 9%;
  width: 100%;
  color: #000000;
  font-family: "Pretendard-Regular", Helvetica;
  font-size: 24px;
  font-weight: 400;
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
  display: flex;
  flex-direction: column;
  align-items: center; /* 자식 요소를 수평 중앙 정렬 */
`;

export const ArtWorkImgWrap = styled.div`
  width: 100%;
  height: 75%;
  margin-bottom: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ArtWorkImg = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => `url(${props.ImgUrl})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  filter: drop-shadow(10px 10px 7px rgba(0, 0, 0, 0.4));
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
