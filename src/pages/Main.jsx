import Footer from "../components/Footer/Footer.jsx";
import Header from "../components/Header/Header.jsx";
import React from "react";
import {ContentContainer, MainPicture, MainText, SectionContainer, OrientalPaintingEngText, OrientalPaintingImg, CraftImg, ArtistText, CraftEngText, SubText, CraftBlock, DesignEngText, DesignImg, DesignKorText, DesignBlock, CraftKorText, MediaArtsEngText, MediaArtsImg, MediaArtsBlock, OrientalPaintingBlock, SculptureEngText, SculptureKorText, SculptureImg, TitleText, SculptureBlock, MediaArtsKorText, OrientalPaintingKorText, WesternPaintingKorText, WesternPaintingBlock, WesternPaintingImg, ArtistResultExp, ArtistResultTitle, ArtistResultContainer, TitleResultContainer, SearchResultContainer, TitleResultExp, SearchBox, WesternPaintingEngText, SearchContainer, TitleResultTitle, CraftContainer, OrientalContainer, MediaArtsContainer, WesternContainer, SculptureContainer, DesignContainer} from "../MainStyle.js";

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
