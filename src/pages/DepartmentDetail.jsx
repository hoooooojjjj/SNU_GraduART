import React from "react";
import styled from "@emotion/styled";

const TitleBackground = styled.div`
  background-color: #ee5397;
  width: 1440px;
  height: 231px;
`;

const TitleText = styled.div`
  position: fixed;
  font-family: "Pretendard-ExtraBold", Helvetica;
  font-weight: 800;
  color: #ffffff;
  font-size: 70px;
  letter-spacing: 0;
  line-height: 70px;
  padding: 55px 818px 106px 45px;
`;

function DepartmentDetail() {
  return (
    <>
      <TitleBackground>
        <TitleText>Western Painting</TitleText>
      </TitleBackground>
    </>
  );
}

export default DepartmentDetail;
