import styled from "@emotion/styled";
import CheckCircleSharpIcon from "@mui/icons-material/CheckCircleSharp";

// 페이지 전체 컨테이너
export const Container = styled.div({
  width: "100dvw",
  height: "100dvh",
});

// 헤더 제외 부분 컨테이너
export const MainContainer = styled.div`
  width: 100%;
  height: 91dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

// 이미지 및 텍스트, 버튼 들어갈 콘텐츠 컨테이너
export const ContentContainer = styled.div`
  width: 40%;
  height: 15%;
  margin-left: 3%;
  margin-right: 3%;
  margin-bottom: 3%;
  padding: 13%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

// 체크 아이콘
export const CheckIcon = styled(CheckCircleSharpIcon)`
  display: flex;
  align-items: center;
  color: #73d378;
  width: 143px;
  height: 143px;
  flex-shrink: 0;
  filter: drop-shadow(gray 0px 0px 60px -12px);
`;

// "결제가 완료되었습니다." 텍스트
export const MainText = styled.div`
  text-align: center;
  font-family: Pretendard;
  font-size: 38px;
  font-style: normal;
  font-weight: 700;
  line-height: 110%;
  margin: 7%;
`;

// 버튼 콘테이너
export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

// 회색 버튼
export const GreyButton = styled.div`
  width: 40%;
  height: 100%;
  margin: 3%;
  flex-shrink: 0;
  border-radius: 22px;
  background: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: Pretendard;
  font-size: 19px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%;
`;

// 초록색 버튼
export const GreenButton = styled.div`
  width: 40%;
  height: 100%;
  margin: 3%;
  flex-shrink: 0;
  border-radius: 22px;
  background: #73d378;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: Pretendard;
  font-size: 19px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%;
  color: #ffffff;
`;
