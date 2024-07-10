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
  height: "100dvh",
  backgroundColor: "red",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
});

// export const ArtWorkListWrap = styled.div({
//   width: "90%",
//   height: "85%",
//   backgroundColor: "blue",
// });

export const ArtWorkListWrap = styled.div({
  width: "90%",
  height: "85%",
  backgroundColor: "blue",
  display: "grid",
  gap: "40px",
  gridTemplateRows: "repeat(2, 1fr)",
  gridTemplateColumns: "repeat(3, 1fr)",
});
export const ArtWorkGrid = styled.div`
  width: 100%;
  background-color: green;
`;
export const Paginations = styled(Pagination)({
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});
