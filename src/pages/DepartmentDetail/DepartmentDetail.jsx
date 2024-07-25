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
  PendingArtWorkImg,
} from "./DepartmentDetailStyle.js";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import departmentInfos from "./DepartmentInfo.json";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { supabase } from "../../ServerClient.js";
import { useQueryClient, useQuery } from "@tanstack/react-query";

// 미술작품 가져오기
const getArtWorksByDepartment = async (department) => {
  let { data: items, error } = await supabase
    // items 테이블에서
    .from("items")
    // 모든 column 선택
    .select("*")
    // 현재 라우트에 해당하는 과 미술작품만 필터링
    .eq("department", department)
    // 최신순으로 정렬
    .order("created_at", { ascending: false });

  // 에러 없고 데이터가 있다면
  if (!error && items) {
    // 데이터 리턴
    return items;
  } else {
    console.log(error);
    throw new Error(error.message); // Error handling 추가
  }
};

// 이미지 프리로드 함수
const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = resolve;
    img.onerror = reject;
  });
};

function DepartmentDetail() {
  // 라우팅
  const nav = useNavigate();

  // 장바구니에서 redirect로 넘어왔는지 여부
  const redirectToArtWorkDetail = useLocation().state;

  // 현재 라우트에 해당하는 과
  const { department } = useParams();

  // 현재 라우트에 해당하는 과 관련 정보
  const [departmentInfo, setDepartmentInfo] = useState({});

  // 한 페이지에 보여줄 미술작품 리스트
  const [ArtWorksInOnePage, setArtWorksInOnePage] = useState([]);

  // 현재 페이지네이션 페이지
  const [page, setPage] = useState(0);

  // artwork 이미지 로드 상태
  const [imageLoaded, setImageLoaded] = useState(false);

  // 현재 라우트에 해당하는 과 미술작품만 필터링해서 가져오기
  // Queries
  const { isPending, isError, data, error } = useQuery({
    queryKey: [`getArtWorksByDepartment`, department],
    queryFn: () => getArtWorksByDepartment(department),
  });

  // 장바구니에서 redirect로 넘어온 경우
  useEffect(() => {
    if (redirectToArtWorkDetail && data.length > 0) {
      nav(`/${department}/${redirectToArtWorkDetail}`, { state: data });
    }
  }, [data]);

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

  useEffect(() => {
    // ArtWorkList 리스트에서 6개씩 끊어서 페이지네이션을 구현하는 함수
    const PaginateArtWorks = () => {
      const paginatedArtWorks = data.filter(
        // 미술작품 데이터에서 현재 페이지에 해당하는 데이터만 필터링
        (ArtWork, i) => i >= 0 + page * 6 && i < 6 + page * 6
      );

      // 한 페이지에 보여줄 미술작품 리스트에 필터링된 데이터를 저장
      setArtWorksInOnePage(paginatedArtWorks);
    };
    if (data) {
      PaginateArtWorks();
    }
  }, [department, data, page]);

  // 작품 클릭하면 작품 상세페이지로 이동하는 함수
  // 라우팅할 때 ArtWorkList도 props로 전달
  const onClickArtWork = (itemID) => {
    nav(`/${department}/${itemID}`, { state: data });
  };

  // 이미지 프리로드 useEffect
  useEffect(() => {
    if (data) {
      data.forEach((item) => {
        preloadImage(item.imagePath).catch((error) => {
          console.error("Failed to preload image:", item.imagePath, error);
        });
      });
    }

    // 컴포넌트가 언마운트되면 이미지 로드 상태를 false로 변경
    return () => {
      setImageLoaded(false);
    };
  }, [data]);

  // artwork 이미지 로드가 완료되면 imageLoaded 상태를 true로 변경
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  // 데이터가 들어오고 있을 때
  if (isPending) {
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
      </Container>
    );
  }

  // fetching 과정에서 에러가 발생했을 때
  if (isError) {
    return <span>Error: {error.message}</span>;
  }
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
          {ArtWorksInOnePage && !isPending ? (
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
                    {/*  artwork의 이미지가 브라우저에 load되기 전에는 기본 설정된 이미지를 렌더링 */}
                    {/*  artwork의 이미지가 브라우저에 load되면 실제 이미지를 렌더링 */}
                    <PendingArtWorkImg imageLoaded={imageLoaded}>
                      <source
                        type="image/webp"
                        srcSet={`/assets/landing-oriental.webp`}
                      />
                      <img
                        src={`/assets/landing-oriental.webp`}
                        alt="ArtWork"
                      />
                    </PendingArtWorkImg>
                    <ArtWorkImg imageLoaded={imageLoaded}>
                      <source type="image/webp" srcSet={`${item.imagePath}`} />
                      <img
                        src={item.imagePath}
                        onLoad={handleImageLoad}
                        alt="ArtWork"
                      />
                    </ArtWorkImg>
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
          count={Math.ceil(data && data.length / 6)}
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
