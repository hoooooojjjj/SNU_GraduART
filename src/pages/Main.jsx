import Footer from "../components/Footer/Footer.jsx";
import Header from "../components/Header/Header.jsx";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver.js";
import classNames from "classnames";

import {
  ContentContainer,
  MainPicture,
  MainText,
  SectionContainer,
  OrientalPaintingEngText,
  OrientalPaintingImg,
  CraftImg,
  ResultCategoryText,
  CraftEngText,
  SubText,
  CraftBlock,
  DesignEngText,
  DesignImg,
  DesignKorText,
  DesignBlock,
  CraftKorText,
  MediaArtsEngText,
  MediaArtsImg,
  MediaArtsBlock,
  OrientalPaintingBlock,
  SculptureEngText,
  SculptureKorText,
  SculptureImg,
  SculptureBlock,
  MediaArtsKorText,
  OrientalPaintingKorText,
  WesternPaintingKorText,
  WesternPaintingBlock,
  WesternPaintingImg,
  ResultExp,
  ResultTitle,
  SearchResultContainer,
  SearchBox,
  WesternPaintingEngText,
  SearchContainer,
  CraftContainer,
  OrientalContainer,
  MediaArtsContainer,
  WesternContainer,
  SculptureContainer,
  DesignContainer,
  SearchPlaceHolder,
  ResultContainer,
  MainBack,
} from "../MainStyle.js";

function Main() {
  const [OrientalRef, isOrientalVisible] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [WesternRef, isWesternVisible] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [SculptureRef, isSculptureVisible] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [CraftRef, isCraftVisible] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [DesignRef, isDesignVisible] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [MediaRef, isMediaVisible] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [isOrientalAnimating, setIsOrientalAnimating] = useState(false);
  const [isWesternAnimating, setIsWesternAnimating] = useState(false);
  const [isSculptureAnimating, setIsSculptureAnimating] = useState(false);
  const [isCraftAnimating, setIsCraftAnimating] = useState(false);
  const [isDesignAnimating, setIsDesignAnimating] = useState(false);
  const [isMediaAnimating, setIsMediaAnimating] = useState(false);

  const navigate = useNavigate();

  const handleOrientalClick = (e) => {
    e.preventDefault();
    setIsOrientalAnimating(true);
    setTimeout(() => {
      navigate("/Oriental Painting");
      setIsOrientalAnimating(false);
    }, 1000);
  };

  const handleWesternClick = (e) => {
    e.preventDefault();
    setIsWesternAnimating(true);
    setTimeout(() => {
      navigate("/Western Painting");
      setIsWesternAnimating(false);
    }, 1000);
  };

  const handleSculptureClick = (e) => {
    e.preventDefault();
    setIsSculptureAnimating(true);
    setTimeout(() => {
      navigate("/Sculpture");
      setIsSculptureAnimating(false);
    }, 1000);
  };

  const handleCraftClick = (e) => {
    e.preventDefault();
    setIsCraftAnimating(true);
    setTimeout(() => {
      navigate("/Craft");
      setIsCraftAnimating(false);
    }, 1000);
  };

  const handleDesignClick = (e) => {
    e.preventDefault();
    setIsDesignAnimating(true);
    setTimeout(() => {
      navigate("/Design");
      setIsCraftAnimating(false);
    }, 1000);
  };

  const handleMediaClick = (e) => {
    e.preventDefault();
    setIsMediaAnimating(true);
    setTimeout(() => {
      navigate("/MediaArts");
      setIsMediaAnimating(false);
    }, 1000);
  };

  return (
    <ContentContainer>
      <Header></Header>
      <MainBack></MainBack>
      <MainPicture path={`/assets/mainImg.png`}>
        <MainText>GraduART</MainText>
        <SubText>서울대학교 미술대학 졸업전시 展</SubText>
      </MainPicture>
      <SectionContainer
        ref={OrientalRef}
        to={"/Oriental Painting"}
        onClick={(e) => handleOrientalClick(e, "/Oriental Painting")}
      >
        <OrientalPaintingImg img={`/assets/orientalImg.webp`} />
        <OrientalPaintingBlock
          color={"#FF983B"}
          className={classNames({
            animate: isOrientalVisible,
            animates: isOrientalAnimating,
          })}
        >
          <OrientalPaintingEngText
            className={isOrientalVisible ? "animate" : ""}
          >
            Oriental Painting
          </OrientalPaintingEngText>
          <OrientalPaintingKorText
            className={isOrientalVisible ? "animate" : ""}
          >
            : 동양화과
          </OrientalPaintingKorText>
        </OrientalPaintingBlock>
      </SectionContainer>
      <SectionContainer
        ref={WesternRef}
        to={"/Western Painting"}
        onClick={(e) => handleWesternClick(e, "/Western Painting")}
      >
        <WesternPaintingImg
          img={`/assets/westernImg.jpeg`}
        ></WesternPaintingImg>
        <WesternPaintingBlock
          color={"#EE5397"}
          className={classNames({
            animate: isWesternVisible,
            animates: isWesternAnimating,
          })}
        >
          <WesternPaintingEngText className={isWesternVisible ? "animate" : ""}>
            Western Painting
          </WesternPaintingEngText>
          <WesternPaintingKorText className={isWesternVisible ? "animate" : ""}>
            : 서양화과
          </WesternPaintingKorText>
        </WesternPaintingBlock>
      </SectionContainer>
      <SectionContainer
        ref={SculptureRef}
        to={"/Sculpture"}
        onClick={(e) => handleSculptureClick(e, "/Sculpture")}
      >
        <SculptureBlock
          color={"#FE4E4E"}
          className={classNames({
            animate: isSculptureVisible,
            animates: isSculptureAnimating,
          })}
        >
          <SculptureEngText className={isSculptureVisible ? "animate" : ""}>
            Sculpture
          </SculptureEngText>
          <SculptureKorText className={isSculptureVisible ? "animate" : ""}>
            : 조소과
          </SculptureKorText>
        </SculptureBlock>
        <SculptureImg img={`/assets/sculptureImg.jpeg`}></SculptureImg>
      </SectionContainer>
      <SectionContainer
        ref={CraftRef}
        to={"/Craft"}
        onClick={(e) => handleCraftClick(e, "/Craft")}
      >
        <CraftImg img={`/assets/craftImg.heic`}></CraftImg>
        <CraftBlock
          color={"#00C4D4"}
          className={classNames({
            animate: isCraftVisible,
            animates: isCraftAnimating,
          })}
        >
          <CraftEngText className={isCraftVisible ? "animate" : ""}>
            Craft
          </CraftEngText>
          <CraftKorText className={isCraftVisible ? "animate" : ""}>
            : 공예과
          </CraftKorText>
        </CraftBlock>
      </SectionContainer>
      <SectionContainer
        ref={DesignRef}
        to={"/Design"}
        onClick={(e) => handleDesignClick(e, "/Design")}
      >
        <DesignBlock
          color={"#3466A5"}
          className={classNames({
            animate: isDesignVisible,
            animates: isDesignAnimating,
          })}
        >
          <DesignEngText className={isDesignVisible ? "animate" : ""}>
            Design
          </DesignEngText>
          <DesignKorText className={isDesignVisible ? "animate" : ""}>
            : 디자인과
          </DesignKorText>
        </DesignBlock>
        <DesignImg img={`/assets/designImg.avif`}></DesignImg>
      </SectionContainer>
      <SectionContainer
        ref={MediaRef}
        to={"/MediaArts"}
        onClick={(e) => handleMediaClick(e, "/MediaArts")}
      >
        <MediaArtsImg img={`/assets/mediaartsImg.jpeg`}></MediaArtsImg>
        <MediaArtsBlock
          color={"#DBEB57"}
          className={classNames({
            animate: isMediaVisible,
            animates: isMediaAnimating,
          })}
        >
          <MediaArtsEngText className={isMediaVisible ? "animate" : ""}>
            MediaArts
          </MediaArtsEngText>
          <MediaArtsKorText className={isMediaVisible ? "animate" : ""}>
            : 영상매체예술
          </MediaArtsKorText>
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
        <SearchPlaceHolder>
          작가, 작품, 작품 설명을 검색하세요.
        </SearchPlaceHolder>
        <SearchResultContainer>
          <ResultCategoryText>작가</ResultCategoryText>
          <ResultContainer>
            <ResultTitle>나의 행운과 불행 2</ResultTitle>
            <ResultExp>이가현 | 2020 78×116cm</ResultExp>
          </ResultContainer>
          <ResultCategoryText>작품명</ResultCategoryText>
          <ResultContainer>
            <ResultTitle>3월</ResultTitle>
            <ResultExp>윤정연 | 2021 130.3×130.3cm</ResultExp>
            <ResultTitle>풍경2</ResultTitle>
            <ResultExp>오승현 | 2021 227.3×181.8cm</ResultExp>
          </ResultContainer>
        </SearchResultContainer>
      </SearchContainer>
      <Footer></Footer>
    </ContentContainer>
  );
}

export default Main;
