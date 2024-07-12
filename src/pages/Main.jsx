import React from "react";
import styled from "@emotion/styled";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://wjoocdnkngzyrprnnytm.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indqb29jZG5rbmd6eXJwcm5ueXRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA0MzkyMjksImV4cCI6MjAzNjAxNTIyOX0.vBZyH45AvtMWgOzv2fRhMvJMO5xhcgaXpsV5rolYnq4"
);

// ContentContainer
const ContentContainer = styled.div`
  width: 100dvw;
`;

// MainPicture
const MainPicture = styled.section`
  width: 100%;
  height: 100dvh;
  background-image: url(${(props) => props.path});
  background-size: cover;
  background-position-y: 50%;
`;

// GraduART Text
const MainText = styled.div`
  color: #ffffff;
  font-family: "DM Serif Display";
  font-size: 96px;
  font-style: normal;
  font-weight: 400;
  line-height: 290%; /* 278.4px */
  position: absolute;
  left: -165px;
  top: 130px;
  transform: rotate(90deg);
`;

// 서울대학교 미술대학 졸업전시 Text
const SubText = styled.div`
  color: #ffffff;
  font-family: Pretendard;
  font-size: 96px;
  font-style: normal;
  font-weight: 800;
  line-height: 110%; /* 105.6px */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  text-align: right;
  position: absolute;
  right: 15px;
  bottom: 10px;
`;

// DepartmentBanner
// OrientalContainer
const OrientalContainer = styled.div`
  width: 100%;
  height: 50dvh;
  display: flex;
`;

// OrientalPaintingBlock
const OrientalPaintingBlock = styled.div((props) => ({
  position: "relative",
  backgroundColor: props.color,
  width: "30%",
  height: "100%",
}));

// OrientalPaintingEngText
const OrientalPaintingEngText = styled.div`
  position: absolute;
  left: 10%;
  top: 15%;
  color: #ffffff;
  font-family: Pretendard;
  font-size: 200%;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 45px */
`;

// OrientalPaintingKorText
const OrientalPaintingKorText = styled.div`
  position: absolute;
  left: 10%;
  top: 25%;
  color: #ffffff;
  font-family: Pretendard;
  font-size: 150%;
  font-style: normal;
  font-weight: 350;
  line-height: 100%; /* 35px */
`;

// OrientalPaintingImg
const OrientalPaintingImg = styled.div((props) => ({
  backgroundImage: `url(${props.img})`,
  backgroundSize: "auto",
  backgroundPosition: "50% 55%",
  width: "70%",
  height: "100%",
}));

// WesternContainer
const WesternContainer = styled.div`
  width: 100%;
  height: 50dvh;
  display: flex;
`;

// WesternPaintingImg
const WesternPaintingImg = styled.div((props) => ({
  backgroundImage: `url(${props.img})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "70%",
  height: "100%",
}));

// WesternPaintingBlock
const WesternPaintingBlock = styled.div((props) => ({
  position: "relative",
  backgroundColor: props.color,
  width: "30%",
  height: "100%",
}));

// WesternPaintingEngText
const WesternPaintingEngText = styled.div`
  position: absolute;
  left: 10%;
  top: 15%;
  color: #ffffff;
  font-family: Pretendard;
  font-size: 200%;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 45px */
`;

// WesternPaintingKorText
const WesternPaintingKorText = styled.div`
  position: absolute;
  left: 10%;
  top: 25%;
  color: #ffffff;
  font-family: Pretendard;
  font-size: 150%;
  font-style: normal;
  font-weight: 350;
  line-height: 100%; /* 35px */
`;

// SculptureContainer
const SculptureContainer = styled.div`
  width: 100%;
  height: 50dvh;
  display: flex;
`;

// SculptureBlock
const SculptureBlock = styled.div((props) => ({
  position: "relative",
  backgroundColor: props.color,
  width: "30%",
  height: "100%",
}));

// SculptureEngText
const SculptureEngText = styled.div`
  position: absolute;
  left: 10%;
  top: 15%;
  color: #ffffff;
  font-family: Pretendard;
  font-size: 200%;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 45px */
`;

// SculptureKorText
const SculptureKorText = styled.div`
  position: absolute;
  left: 10%;
  top: 25%;
  color: #ffffff;
  font-family: Pretendard;
  font-size: 150%;
  font-style: normal;
  font-weight: 350;
  line-height: 100%; /* 35px */
`;

// SculptureImg
const SculptureImg = styled.div((props) => ({
  backgroundImage: `url(${props.img})`,
  backgroundSize: "cover",
  backgroundPosition: "50% 50%",
  width: "70%",
  height: "100%",
}));

// CraftContainer
const CraftContainer = styled.div`
  width: 100%;
  height: 50dvh;
  display: flex;
`;

// CraftImg
const CraftImg = styled.div((props) => ({
  backgroundImage: `url(${props.img})`,
  backgroundSize: "cover",
  backgroundPosition: "50% 60%",
  width: "70%",
  height: "100%",
}));

// CraftBlock
const CraftBlock = styled.div((props) => ({
  position: "relative",
  backgroundColor: props.color,
  width: "30%",
  height: "100%",
}));

// CraftEngText
const CraftEngText = styled.div`
  position: absolute;
  left: 10%;
  top: 15%;
  color: #ffffff;
  font-family: Pretendard;
  font-size: 200%;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 45px */
`;

// CraftKorText
const CraftKorText = styled.div`
  position: absolute;
  left: 10%;
  top: 25%;
  color: #ffffff;
  font-family: Pretendard;
  font-size: 150%;
  font-style: normal;
  font-weight: 350;
  line-height: 100%; /* 35px */
`;

// DesignContainer
const DesignContainer = styled.div`
  width: 100%;
  height: 50dvh;
  display: flex;
`;

// DesignBlock
const DesignBlock = styled.div((props) => ({
  position: "relative",
  backgroundColor: props.color,
  width: "30%",
  height: "100%",
}));

// DesignEngText
const DesignEngText = styled.div`
  position: absolute;
  left: 10%;
  top: 15%;
  color: #ffffff;
  font-family: Pretendard;
  font-size: 200%;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 45px */
`;

// DesignKorText
const DesignKorText = styled.div`
  position: absolute;
  left: 10%;
  top: 25%;
  color: #ffffff;
  font-family: Pretendard;
  font-size: 150%;
  font-style: normal;
  font-weight: 350;
  line-height: 100%; /* 35px */
`;

// DesignImg
const DesignImg = styled.div((props) => ({
  backgroundImage: `url(${props.img})`,
  backgroundSize: "cover",
  backgroundPosition: "50% 50%",
  width: "70%",
  height: "100%",
}));

function Main() {
  return (
    <ContentContainer>
      <MainPicture
        path={`${import.meta.env.VITE_PUBLIC_URL}/assets/mainImg.png`}
      >
        <MainText>GraduART</MainText>
        <SubText>
          서울대학교 미술대학 <br></br> 졸업전시
        </SubText>
      </MainPicture>
      <OrientalContainer>
        <OrientalPaintingBlock color={"#FF983B"}>
          <OrientalPaintingEngText>Oriental Painting</OrientalPaintingEngText>
          <OrientalPaintingKorText>: 동양화과</OrientalPaintingKorText>
        </OrientalPaintingBlock>
        <OrientalPaintingImg
          img={`${import.meta.env.VITE_PUBLIC_URL}/assets/orientalImg.webp`}
        ></OrientalPaintingImg>
      </OrientalContainer>
      <WesternContainer>
        <WesternPaintingImg
          img={`${import.meta.env.VITE_PUBLIC_URL}/assets/westernImg.jpeg`}
        ></WesternPaintingImg>
        <WesternPaintingBlock color={"#EE5397"}>
          <WesternPaintingEngText>Western Painting</WesternPaintingEngText>
          <WesternPaintingKorText>: 서양화과</WesternPaintingKorText>
        </WesternPaintingBlock>
      </WesternContainer>
      <SculptureContainer>
        <SculptureBlock color={"#FE4E4E"}>
          <SculptureEngText>Sculpture</SculptureEngText>
          <SculptureKorText>: 조소과</SculptureKorText>
        </SculptureBlock>
        <SculptureImg
          img={`${import.meta.env.VITE_PUBLIC_URL}/assets/sculptureImg.jpeg`}
        ></SculptureImg>
      </SculptureContainer>
      <CraftContainer>
        <CraftImg
          img={`${import.meta.env.VITE_PUBLIC_URL}/assets/craftImg.heic`}
        ></CraftImg>
        <CraftBlock color={"#00C4D4"}>
          <CraftEngText>Craft</CraftEngText>
          <CraftKorText>: 공예과</CraftKorText>
        </CraftBlock>
      </CraftContainer>
      <DesignContainer>
        <DesignBlock color={"#3466A5"}>
          <DesignEngText>Design</DesignEngText>
          <DesignKorText>: 디자인과</DesignKorText>
        </DesignBlock>
        <DesignImg
          img={`${import.meta.env.VITE_PUBLIC_URL}/assets/designImg.avif`}
        ></DesignImg>
      </DesignContainer>
    </ContentContainer>
  );
}

export default Main;
