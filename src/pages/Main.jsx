import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer/Footer.jsx";
import Header from "../components/Header/Header.jsx";

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
      <SearchContainer>
        <SearchBox>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.53375 11.0374C4.53375 7.3155 7.55098 4.29828 11.2729 4.29828C14.9948 4.29828 18.0121 7.3155 18.0121 11.0374C18.0121 12.8528 17.2943 14.5005 16.1271 15.7122C16.0939 15.7377 16.0619 15.7657 16.0315 15.796C16.0011 15.8264 15.9732 15.8584 15.9477 15.8916C14.736 17.0588 13.0883 17.7766 11.2729 17.7766C7.55098 17.7766 4.53375 14.7594 4.53375 11.0374ZM16.6813 17.8073C15.199 18.993 13.3187 19.7021 11.2729 19.7021C6.48757 19.7021 2.60828 15.8228 2.60828 11.0374C2.60828 6.25209 6.48757 2.3728 11.2729 2.3728C16.0583 2.3728 19.9375 6.25209 19.9375 11.0374C19.9375 13.0833 19.2285 14.9635 18.0428 16.4458L21.5809 19.984C21.9569 20.3599 21.9569 20.9695 21.5809 21.3455C21.205 21.7214 20.5954 21.7214 20.2194 21.3455L16.6813 17.8073Z"
              fill="gray"
            />
          </svg>
        </SearchBox>
        <SearchResultContainer>
          <ArtistText>작가</ArtistText>
          <ArtistResultContainer>
            <ArtistResultTitle>미니멀 시리즈</ArtistResultTitle>
            <ArtistResultExp>
              김공찬 | 적동, 백동, 물푸레나무, 판금, 26x11.5x11.5 cm
            </ArtistResultExp>
          </ArtistResultContainer>
          <TitleText>작품명</TitleText>
          <TitleResultContainer>
            <TitleResultTitle>
              터널형 공간을 위한 프로젝션 매핑
            </TitleResultTitle>
            <TitleResultExp>
              임경훈 | MDF, 프로파일, 포맥스, 프로젝터, 비디오, 94x365x186 cm
            </TitleResultExp>
          </TitleResultContainer>
        </SearchResultContainer>
      </SearchContainer>
      <Footer></Footer>
    </ContentContainer>
  );
}

export default Main;
