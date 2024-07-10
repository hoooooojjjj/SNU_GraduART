import styled from "@emotion/styled";
import Pagination from "@mui/material/Pagination";

export const Contaioner = styled.div`
  width: 100dvw;
  height: auto;
`;

export const Intro = styled.div`
  width: 100%;
  height: 100dvh;
`;
export const TitleBackground = styled.div`
  background-color: #ee5397;
  width: 100%;
  height: 29%;
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
export const Img = styled.img`
  width: 100%;
  height: 71%;
  background-size: cover;
`;

export const DescriptionExtra = styled.div`
  width: 348px;
`;

export const DescriptionText = styled.div`
  height: 291px;
  width: 729px;
  color: #000000;
  font-family: "Pretendard-Regular", Helvetica;
  font-size: 24px;
  font-weight: 400;
`;

export const DescriptionContainer = styled.div`
  width: 100dvw;
  height: 61dvh;
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
  justify-content: center; /* 자식 요소를 수평 중앙 정렬 */
  align-items: center; /* 자식 요소를 수직 중앙 정렬 */
`;

export const ArtWorkImg = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) =>
    `url(${import.meta.env.VITE_PUBLIC_URL}/assets/${props.imgNum}.jpg)`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center; /* 배경 이미지 중앙 정렬 */
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
