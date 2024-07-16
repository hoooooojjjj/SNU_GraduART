import React, { useEffect, useState } from "react";
import {
  Container,
  IntroContainer,
  Intro,
  TitleBackground,
  TitleText,
  Img,
  MiddleContainer,
  DescriptionContainer,
  DescriptionExtra,
  ExtraTitle,
  Link,
  InstaIcon,
  DescriptionText,
  DescriptionBox,
  Insta,
  LinkContainer,
  ArtWorkListContainer,
  ArtWorkListWrap,
  Paginations,
  ArtWorkGridItem,
  ArtWorkImg,
  ArtWorkTitle,
  ArtWorkDescription,
  ArtWorkImgWrap,
} from "./DepartmentDetailStyle.js";
import { createClient } from "@supabase/supabase-js";
import { useNavigate, useParams } from "react-router-dom";
import departmentInfos from "./DepartmentInfo.json";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const supabase = createClient(
  "https://wjoocdnkngzyrprnnytm.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indqb29jZG5rbmd6eXJwcm5ueXRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA0MzkyMjksImV4cCI6MjAzNjAxNTIyOX0.vBZyH45AvtMWgOzv2fRhMvJMO5xhcgaXpsV5rolYnq4"
);

function DepartmentDetail() {
  // 라우팅
  const nav = useNavigate();

  // 현재 라우트에 해당하는 과
  const { department } = useParams();

  // 현재 라우트에 해당하는 과 관련 정보
  const [departmentInfo, setDepartmentInfo] = useState({});

  // 현재 라우트에 해당하는 과 미술작품
  const [ArtWorkList, setArtWorkList] = useState([]);

  // 한 페이지에 보여줄 미술작품 리스트
  const [ArtWorksInOnePage, setArtWorksInOnePage] = useState([]);

  // 현재 페이지네이션 페이지
  const [page, setPage] = useState(0);

  // 리렌더링되면 다시 페이지네이션을 0으로 초기화
  useEffect(() => {
    setPage(0);
  }, [department]);

  // 현재 라우트에 해당하는 과 관련 정보 필터링
  useEffect(() => {
    const curDepartment = departmentInfos.filter(
      (info) => info.Department === department
    );
    setDepartmentInfo(curDepartment[0]);
  }, [department]);

  // 현재 라우트에 해당하는 과 미술작품만 필터링해서 가져오기
  useEffect(() => {
    // 미술작품 가져오기
    const getArtWorksByDepartment = async () => {
      let { data: items, error } = await supabase
        // items 테이블에서
        .from("items")
        // 모든 column 선택
        .select("*")
        // 현재 라우트에 해당하는 과 미술작품만 필터링
        .eq("department", department);

      // 에러 없고 데이터가 있다면
      if (!error && items) {
        // 미술작품 데이터를 ArtWorkList 상태에 저장
        setArtWorkList(items);
      } else {
        console.log(error);
      }
    };

    getArtWorksByDepartment();
  }, [department]);

  useEffect(() => {
    // ArtWorkList 리스트에서 6개씩 끊어서 페이지네이션을 구현하는 함수
    const PaginateArtWorks = () => {
      const paginatedArtWorks = ArtWorkList.filter(
        // 미술작품 데이터에서 현재 페이지에 해당하는 데이터만 필터링
        (ArtWork, i) => i >= 0 + page * 6 && i < 6 + page * 6
      );

      // 한 페이지에 보여줄 미술작품 리스트에 필터링된 데이터를 저장
      setArtWorksInOnePage(paginatedArtWorks);
    };

    PaginateArtWorks();
  }, [department, ArtWorkList, page]);

  // 작품 클릭하면 작품 상세페이지로 이동하는 함수
  const onClickArtWork = (itemID) => {
    nav(`/${department}/${itemID}`);
  };

  return (
    <Container>
      <IntroContainer>
        <Intro>
          <Header></Header>
          <TitleBackground color={departmentInfo.titleColor}>
            <TitleText>{department}</TitleText>
          </TitleBackground>
          <Img src={`/assets/${departmentInfo.imgPath}`}></Img>
        </Intro>
        <DescriptionContainer>
          <MiddleContainer>
            <DescriptionExtra>
              <ExtraTitle>{departmentInfo.departmentName}</ExtraTitle>
              <LinkContainer>
                <Insta>
                  <InstaIcon />
                  <Link href={departmentInfo.Instagram}> 인스타그램</Link>
                </Insta>
                <Link href={departmentInfo.collection}>
                  2021 졸업작품 컬렉션
                </Link>
                <Link href={departmentInfo.homepage}>
                  {departmentInfo.departmentName} 홈페이지
                </Link>
              </LinkContainer>
            </DescriptionExtra>
            <DescriptionBox>
              <DescriptionText>
                {departmentInfo.departmentDescription}
              </DescriptionText>
            </DescriptionBox>
          </MiddleContainer>
        </DescriptionContainer>
      </IntroContainer>
      <ArtWorkListContainer>
        <ArtWorkListWrap>
          {/* ArtWorksInOnePage에 데이터가 할당된다면 */}
          {ArtWorksInOnePage.length > 0 ? (
            // ArtWorksInOnePage의 데이터를 순회하며 한 페이지의 ArtWorkGridItem을 생성
            ArtWorksInOnePage.map((item) => {
              return (
                <ArtWorkGridItem
                  key={item.itemID}
                  onClick={() => {
                    onClickArtWork(item.itemID);
                  }}
                >
                  <ArtWorkImgWrap>
                    <ArtWorkImg ImgUrl={item.imagePath}></ArtWorkImg>
                  </ArtWorkImgWrap>
                  <ArtWorkTitle>{item.title}</ArtWorkTitle>
                  <ArtWorkDescription>
                    {item.artist} | {item.made_at.slice(0, 4)},{" "}
                    {item.descriptions}
                  </ArtWorkDescription>
                </ArtWorkGridItem>
              );
            })
          ) : (
            <></>
          )}
        </ArtWorkListWrap>
        {/* 페이지네이션 */}

        <Paginations
          count={Math.ceil(ArtWorkList.length / 6)}
          siblingCount={3}
          showFirstButton={true}
          showLastButton={true}
          page={page + 1}
          onChange={(event, page) => {
            setPage(page - 1);
          }}
          shape="rounded"
        />
      </ArtWorkListContainer>
      <Footer></Footer>
    </Container>
  );
}
export default DepartmentDetail;
