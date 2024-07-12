import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import Footer from "../components/Footer/Footer.jsx";
import Header from "../components/Header/Header.jsx";

// const supabase = createClient(
//   "https://wjoocdnkngzyrprnnytm.supabase.co",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indqb29jZG5rbmd6eXJwcm5ueXRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA0MzkyMjksImV4cCI6MjAzNjAxNTIyOX0.vBZyH45AvtMWgOzv2fRhMvJMO5xhcgaXpsV5rolYnq4"
// );

// ContentContainer
const ContentContainer = styled.div`
  width: 100dvw;
`;

// MainPicture
const MainPicture = styled.section`
  width: 100%;
  height: 94dvh;
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
  top: 150px;
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

const SectionContainer = styled(NavLink)`
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
  backgroundSize: "cover",
  backgroundPosition: "70% 55%",
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

// MediaArtsContainer
const MediaArtsContainer = styled.div`
  width: 100%;
  height: 50dvh;
  display: flex;
`;

// MediaArtsImg
const MediaArtsImg = styled.div((props) => ({
  backgroundImage: `url(${props.img})`,
  backgroundSize: "cover",
  backgroundPosition: "50% 60%",
  width: "70%",
  height: "100%",
}));

// MediaArtsBlock
const MediaArtsBlock = styled.div((props) => ({
  position: "relative",
  backgroundColor: props.color,
  width: "30%",
  height: "100%",
}));

// MediaArtsEngText
const MediaArtsEngText = styled.div`
  position: absolute;
  left: 10%;
  top: 15%;
  color: #000000;
  font-family: Pretendard;
  font-size: 200%;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 45px */
`;

// MediaArtsKorText
const MediaArtsKorText = styled.div`
  position: absolute;
  left: 10%;
  top: 25%;
  color: #000000;
  font-family: Pretendard;
  font-size: 150%;
  font-style: normal;
  font-weight: 350;
  line-height: 100%; /* 35px */
`;

// 검색 전체 컨테이너
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 3%;
`;

// 검색창
const SearchBox = styled.div`
  width: 60%;
  margin: 10dvh auto;
  height: 5%;
  padding: 1% 1%;
  border-radius: 50px;
  border: 2px solid #818181;
  background: #ffffff;
`;

// 작가, 작품명 전체 컨테이너
const SearchResultContainer = styled.div`
  width: 70%;
  margin-bottom: 10%;
`;

// 작가 컨테이너
// "작가" 텍스트
const ArtistText = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  margin-top: 5%;
`;

// 작가 검색결과 컨테이너
const ArtistResultContainer = styled.div`
  background: white;
  width: 70dvw;
  margin-top: 40px;
  margin-bottom: 20px;
`;

// 작가 검색결과 컨테이너 속 작품명 텍스트
const ArtistResultTitle = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
`;

// 작가 검색결과 컨테이너 속 작가 및 설명
const ArtistResultExp = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  padding: 3% 0;
  border-bottom: solid #818181;
`;

// 작품명 컨테이너
// "작품명" 텍스트
const TitleText = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  margin-top: 10%;
`;

// 작품명 검색결과 컨테이너
const TitleResultContainer = styled.div`
  background: white;
  width: 70dvw;
  margin-top: 40px;
  margin-bottom: 20px;
`;

// 작품명 검색결과 컨테이너 속 작품명 텍스트
const TitleResultTitle = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
`;

// 작품명 검색결과 컨테이너 속 작가 및 설명
const TitleResultExp = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  padding: 3% 0;
  border-bottom: solid #818181;
`;

function Main() {
  return (
    <ContentContainer>
      <Header></Header>
      <MainPicture path={`/assets/mainImg.png`}>
        <MainText>GraduART</MainText>
        <SubText>
          서울대학교 미술대학 <br></br> 졸업전시
        </SubText>
      </MainPicture>
      <SectionContainer to={"/Oriental Painting"}>
        <OrientalPaintingBlock color={"#FF983B"}>
          <OrientalPaintingEngText>Oriental Painting</OrientalPaintingEngText>
          <OrientalPaintingKorText>: 동양화과</OrientalPaintingKorText>
        </OrientalPaintingBlock>
        <OrientalPaintingImg
          img={`/assets/orientalImg.webp`}
        ></OrientalPaintingImg>
      </SectionContainer>
      <SectionContainer to={"/Western Painting"}>
        <WesternPaintingImg
          img={`/assets/westernImg.jpeg`}
        ></WesternPaintingImg>
        <WesternPaintingBlock color={"#EE5397"}>
          <WesternPaintingEngText>Western Painting</WesternPaintingEngText>
          <WesternPaintingKorText>: 서양화과</WesternPaintingKorText>
        </WesternPaintingBlock>
      </SectionContainer>
      <SectionContainer to={"/Sculpture"}>
        <SculptureBlock color={"#FE4E4E"}>
          <SculptureEngText>Sculpture</SculptureEngText>
          <SculptureKorText>: 조소과</SculptureKorText>
        </SculptureBlock>
        <SculptureImg img={`/assets/sculptureImg.jpeg`}></SculptureImg>
      </SectionContainer>
      <SectionContainer to={"/Craft"}>
        <CraftImg img={`/assets/craftImg.heic`}></CraftImg>
        <CraftBlock color={"#00C4D4"}>
          <CraftEngText>Craft</CraftEngText>
          <CraftKorText>: 공예과</CraftKorText>
        </CraftBlock>
      </SectionContainer>
      <SectionContainer to={"/Design"}>
        <DesignBlock color={"#3466A5"}>
          <DesignEngText>Design</DesignEngText>
          <DesignKorText>: 디자인과</DesignKorText>
        </DesignBlock>
        <DesignImg img={`/assets/designImg.avif`}></DesignImg>
      </SectionContainer>
      <SectionContainer to={"/MediaArts"}>
        <MediaArtsImg img={`/assets/mediaartsImg.jpeg`}></MediaArtsImg>
        <MediaArtsBlock color={"#DBEB57"}>
          <MediaArtsEngText>MediaArts</MediaArtsEngText>
          <MediaArtsKorText>: 영상매체예술</MediaArtsKorText>
        </MediaArtsBlock>
      </SectionContainer>
      <SearchBox></SearchBox>
      <Footer></Footer>
    </ContentContainer>
  );
}

export default Main;
