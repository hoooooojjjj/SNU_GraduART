import Footer from "../components/Footer/Footer.jsx";
import Header from "../components/Header/Header.jsx";
import React, {useState} from "react";
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
  SearchResultContainer,
  SectionContainer,
  SubText,
  WesternPaintingBlock,
  WesternPaintingEngText,
  WesternPaintingImg,
  WesternPaintingKorText,
} from "../MainStyle.js";
import {supabase} from "../ServerClient.js";
import {useNavigate} from "react-router-dom";

function Main() {

  const [query, setQuery] = useState('');
  const [titleResults, setTitleResults] = useState([]);
  const [artistResults, setArtistResults] = useState([]);

  const navigate = useNavigate();
  const handleSearch = async () => {
    if(!query){ return }
    const titleSearchResults = await searchTitles(query.split(" "));
    const artistSearchResults = await searchArtists(query.split(" "));
    setTitleResults(titleSearchResults);
    console.log(`titleResults = ${titleResults.toString()}`);
    setArtistResults(artistSearchResults);
    console.log(artistResults);
  };

  async function searchTitles(chunks){
    let titleTemp = [];
    for (const chunk of chunks) {
      console.log(chunk);
      const {data, error} = await supabase
          .from('items')
          .select()
          .like('title',`%${chunk}%`);

      if(error){
        console.log(`Error while querying: ${chunk}`);
      }
      console.log(`Done querying: ${JSON.stringify(data)}`);

      for(const resultItem of data) {
        titleTemp.push(resultItem);
      }
    }
    return [...new Set(titleTemp)];
  };

  async function searchArtists(chunks){
    let artistTemp = [];
    for (const chunk of chunks) {
      console.log(chunk);
      const {data, error} = await supabase
          .from('items')
          .select()
          .like('artist',`%${chunk}%`);

      if(error){
        console.log(`Error while querying: ${chunk}`);
      }
      console.log(`Done querying: ${JSON.stringify(data)}`);

      for(const resultItem of data) {
        artistTemp.push(resultItem);
      }
    }
    return [...new Set(artistTemp)];
  };

  const handleKeyDown = (event) => {
    if (event.nativeEvent.isComposing) return;
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <ContentContainer>
      <Header></Header>
      <MainPicture path={`/assets/mainImg.png`}>
        <MainText>GraduART</MainText>
        <SubText>서울대학교 미술대학 졸업전시 展</SubText>
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
        <SearchBox placeholder={"작가, 작품, 작품 설명을 검색하세요."} onSubmit={handleSearch} onChange={(e) => setQuery(e.target.value)} onKeyDown={handleKeyDown}></SearchBox>
        <SearchResultContainer>
          <ResultCategoryText>작품명</ResultCategoryText>
          {titleResults[0] ? titleResults.map((item) => (
              <ResultContainer onClick={()=>
              {navigate(`/${item.department}`, { state: item.itemID })
              }}>
                <ResultTitle>{item.title}</ResultTitle>
                <ResultExp>
                  <span>{item.artist} | </span>
                  <span>{item.department} | </span>
                  <span>{item.descriptions} </span>
                </ResultExp>
              </ResultContainer>)):<ResultTitle>검색 결과가 없습니다.</ResultTitle>}
          <br></br>
          <ResultCategoryText>작가</ResultCategoryText>
          {artistResults[0] ? artistResults.map((item) => (
              <ResultContainer>
                <ResultTitle>{item.title}</ResultTitle>
                <ResultExp>
                  <span>{item.artist} | </span>
                  <span>{item.department} | </span>
                  <span>{item.descriptions} </span>
                </ResultExp>
              </ResultContainer>
          )):<ResultTitle>검색 결과가 없습니다.</ResultTitle>}
        </SearchResultContainer>
      </SearchContainer>
      <Footer></Footer>
    </ContentContainer>
  );
}

export default Main;
