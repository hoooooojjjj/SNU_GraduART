import React, { useEffect, useState } from "react";
import {
  Container,
  Intro,
  TitleBackground,
  TitleText,
  Img,
  DescriptionContainer,
  DescriptionExtra,
  DescriptionText,
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

const supabase = createClient(
  "https://wjoocdnkngzyrprnnytm.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indqb29jZG5rbmd6eXJwcm5ueXRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA0MzkyMjksImV4cCI6MjAzNjAxNTIyOX0.vBZyH45AvtMWgOzv2fRhMvJMO5xhcgaXpsV5rolYnq4"
);

function DepartmentDetail() {
  // 현재 라우트에 해당하는 과 미술작품
  const [ArtWorkList, setArtWorkList] = useState([]);

  // 한 페이지에 보여줄 미술작품 리스트
  const [ArtWorksInOnePage, setArtWorksInOnePage] = useState([]);

  // 현재 페이지네이션 페이지
  const [page, setPage] = useState(0);

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
        .eq("department", "Western Painting");

      // 에러 없고 데이터가 있다면
      if (!error && items) {
        // 미술작품 데이터를 ArtWorkList 상태에 저장
        setArtWorkList(items);
      } else {
        console.log(error);
      }
    };

    getArtWorksByDepartment();
  }, []);

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
  }, [ArtWorkList, page]);

  return (
    <Container>
      <Intro>
        <TitleBackground>
          <TitleText>Western Painting</TitleText>
        </TitleBackground>
        <Img
          src={`${import.meta.env.VITE_PUBLIC_URL}/assets/westerntitle.jpeg`}
        ></Img>
      </Intro>
      <DescriptionContainer>
        <DescriptionExtra></DescriptionExtra>
        <DescriptionText>
          서양화과에는 창의적이고 전문성을 갖춘 미술가의 육성을 목표로 4년
          과정의 미술학 학사 과정과 각각 2년 과정의 석, 박사 과정이 개설되어
          있습니다. 대학 1학년 기초과정에서는 조형 및 표현 능력의 함양을 위해
          다양한 매체와 조형방식을 활용하는 통합적인 실습 및 이론 교육이
          이루어집니다. 2, 3 ,4학년 과정에서는 전공과 각 학년에 부합하는 학년별
          전공 실기 수업을 통해 다양한 표현을 실험하고 자신만의 창작방식을
          발전시킬 수 있습니다. 특히 3, 4학년 과정에는 전공을 심화하기 위한 전공
          스튜디오 수업이 개설되어 있습니다. 아울러 시각예술 전반에 대한 지식과
          미술사를 체계적으로 습득하여 실기와 이론을 겸비할 수 있도록 미술사 및
          이론 수업을 전 학년에 걸쳐 수강할 수 있습니다.
        </DescriptionText>
      </DescriptionContainer>
      <ArtWorkListContainer>
        <ArtWorkListWrap>
          {/* ArtWorksInOnePage에 데이터가 할당된다면 */}
          {ArtWorksInOnePage.length > 0 ? (
            // ArtWorksInOnePage의 데이터를 순회하며 한 페이지의 ArtWorkGridItem을 생성
            ArtWorksInOnePage.map((item, index) => {
              return (
                <ArtWorkGridItem key={index}>
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
          // 페이지네이션 페이지 수 => 미술작품 리스트의 길이를 6으로 나눈 값의 올림
          count={Math.ceil(ArtWorkList.length / 6)}
          siblingCount={3}
          // 페이지네이션 페이지 변경 시 페이지 상태 변경
          onChange={(event, page) => {
            setPage(page - 1);
          }}
          shape="rounded"
        />
      </ArtWorkListContainer>
    </Container>
  );
}
export default DepartmentDetail;
