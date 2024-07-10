import React from "react";
import styled from "@emotion/styled";

const Contaioner = styled.div`
  width: 100dvw;
  height: auto;
`;
const Intro = styled.div`
  width: 100%;
  height: 100dvh;
`;
const TitleBackground = styled.div`
  background-color: #ee5397;
  width: 100%;
  height: 29%;
`;
const TitleText = styled.div`
  font-family: "Pretendard-ExtraBold", Helvetica;
  font-weight: 800;
  color: #ffffff;
  font-size: 70px;
  position: relative;
  top: 24%;
  left: 3%;
`;
const Img = styled.img`
  width: 100%;
  height: 71%;
  background-size: cover;
`;

function DepartmentDetail() {
  return (
    <Contaioner>
      <Intro>
        <TitleBackground>
          <TitleText>Western Painting</TitleText>
        </TitleBackground>
        <Img
          src={`${import.meta.env.VITE_PUBLIC_URL}/assets/westerntitle.jpeg`}
        ></Img>
      </Intro>
    </Contaioner>
  );
}
export default DepartmentDetail;
