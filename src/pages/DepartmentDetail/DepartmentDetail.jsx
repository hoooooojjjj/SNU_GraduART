import React from "react";
import {
  Contaioner,
  Intro,
  TitleBackground,
  TitleText,
  Img,
  DescriptionContainer,
  DescriptionExtra,
  DescriptionText,
  ArtWorkListContainer,
} from "./DepartmentDetailStyle.js";

function DepartmentDetail() {
  return (
    <Contaioner>
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
      <ArtWorkListContainer></ArtWorkListContainer>
    </Contaioner>
  );
}
export default DepartmentDetail;
