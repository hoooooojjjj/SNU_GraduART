import Footer from "../components/Footer/Footer.jsx";
import Header from "../components/Header/Header.jsx";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver.js";
import classNames from "classnames";
import {
  ContentContainer,
  CraftBlock,
  CraftEngText,
  CraftImg,
  CraftKorText,
  DesignBlock,
  DesignEngText,
  DesignImg,
  DesignKorText,
  MainPicture,
  MainText,
  MediaArtsBlock,
  MediaArtsEngText,
  MediaArtsImg,
  MediaArtsKorText,
  OrientalPaintingBlock,
  OrientalPaintingEngText,
  OrientalPaintingImg,
  OrientalPaintingKorText,
  ResultCategoryText,
  ResultContainer,
  ResultExp,
  ResultTitle,
  SculptureBlock,
  SculptureEngText,
  SculptureImg,
  SculptureKorText,
  SearchBox,
  SearchContainer,
  MainBack,
  SearchResultContainer,
  SectionContainer,
  SubText,
  WesternPaintingBlock,
  WesternPaintingEngText,
  WesternPaintingImg,
  WesternPaintingKorText,
} from "../MainStyle.js";
import { supabase } from "../ServerClient.js";
import departmentInfos from "./DepartmentDetail/DepartmentInfo.json";

// 이미지 프리로드 함수
const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = resolve;
    img.onerror = reject;
  });
};

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
  const [query, setQuery] = useState("");
  const [titleResults, setTitleResults] = useState([]);
  const [artistResults, setArtistResults] = useState([]);

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

  const handleSearch = async () => {
    if (!query) {
      return;
    }
    const titleSearchResults = await searchTitles(query.split(" "));
    const artistSearchResults = await searchArtists(query.split(" "));
    setTitleResults(titleSearchResults);
    console.log(`titleResults = ${titleResults.toString()}`);
    setArtistResults(artistSearchResults);
    console.log(artistResults);
  };

  async function searchTitles(chunks) {
    let titleTemp = [];
    for (const chunk of chunks) {
      console.log(chunk);
      const { data, error } = await supabase
        .from("items")
        .select()
        .like("title", `%${chunk}%`);

      if (error) {
        console.log(`Error while querying: ${chunk}`);
      }
      console.log(`Done querying: ${JSON.stringify(data)}`);

      for (const resultItem of data) {
        titleTemp.push(resultItem);
      }
    }
    return [...new Set(titleTemp)];
  }

  async function searchArtists(chunks) {
    let artistTemp = [];
    for (const chunk of chunks) {
      console.log(chunk);
      const { data, error } = await supabase
        .from("items")
        .select()
        .like("artist", `%${chunk}%`);

      if (error) {
        console.log(`Error while querying: ${chunk}`);
      }
      console.log(`Done querying: ${JSON.stringify(data)}`);

      for (const resultItem of data) {
        artistTemp.push(resultItem);
      }
    }
    return [...new Set(artistTemp)];
  }

  const handleKeyDown = (event) => {
    if (event.nativeEvent.isComposing) return;
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  // 이미지 프리로드 useEffect
  useEffect(() => {
    departmentInfos.forEach((department) => {
      preloadImage("/assets/" + department.imgPath).catch((error) => {
        console.error("Failed to preload image:", department.imgPath, error);
      });
    });
  });

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
        <SearchBox
          placeholder={"작가, 작품, 작품 설명을 검색하세요."}
          onSubmit={handleSearch}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        ></SearchBox>
        <SearchResultContainer>
          <ResultCategoryText>작품명</ResultCategoryText>
          {titleResults[0] ? (
            titleResults.map((item) => (
              <ResultContainer
                key={item.itemID}
                onClick={() => {
                  navigate(`/${item.department}`, { state: item.itemID });
                }}
              >
                <ResultTitle>{item.title}</ResultTitle>
                <ResultExp>
                  <span>{item.artist} | </span>
                  <span>{item.department} | </span>
                  <span>{item.descriptions} </span>
                </ResultExp>
              </ResultContainer>
            ))
          ) : (
            <ResultTitle>검색 결과가 없습니다.</ResultTitle>
          )}
          <br></br>
          <ResultCategoryText>작가</ResultCategoryText>
          {artistResults[0] ? (
            artistResults.map((item) => (
              <ResultContainer
                key={item.itemID}
                onClick={() => {
                  navigate(`/${item.department}`, { state: item.itemID });
                }}
              >
                <ResultTitle>{item.title}</ResultTitle>
                <ResultExp>
                  <span>{item.artist} | </span>
                  <span>{item.department} | </span>
                  <span>{item.descriptions} </span>
                </ResultExp>
              </ResultContainer>
            ))
          ) : (
            <ResultTitle>검색 결과가 없습니다.</ResultTitle>
          )}
        </SearchResultContainer>
      </SearchContainer>
      <Footer></Footer>
    </ContentContainer>
  );
}

export default Main;
