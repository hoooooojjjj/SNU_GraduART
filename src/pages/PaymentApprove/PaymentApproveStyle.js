import styled from "@emotion/styled";
import CloseIcon from "@mui/icons-material/Close";

// 페이지 전체 컨테이너
export const Container = styled.div({
  width: "100dvw",
  height: "100dvh",
});

// 엑스표시, 카카오페이 표시 넣을 컨테이너
export const LeftTopContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 17px;
  margin: 3%;
`;

// 엑스표시
export const Close = styled(CloseIcon)`
  align-items: center;
  display: flex;
`;

// 카카오페이 이미지
export const KakaoPayImg = styled.img({
  width: "30%",
  height: "20%",
  objectFit: "cover",
  objectPosition: "70% 55%",
});

// 메인 텍스트 및 메인 버튼 넣을 컨테이너
export const MainContainer = styled.div`
  margin-left: 3%;
  margin-right: 3%;
  padding: 13%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

// 메인 텍스트 "카카오페이 결제 후, ~"
export const MainText = styled.div`
  color: black;
  text-align: center;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 350;
  line-height: 140%;
  margin-bottom: 3%;
`;

// 메인 버튼 "결제완료"
export const Button = styled.button({
  display: "flex",
  justifyContent: "center",

  width: "30%",
  height: "10%",
  padding: "16px 12px",

  alignItems: "center",
  flexShrink: "0",

  fontFamily: "pretendard",
  fontSize: "25px",
  fontWeight: "600",
  borderRadius: "50px",
  border: "0px",

  backgroundColor: "#FFEB00",
});
