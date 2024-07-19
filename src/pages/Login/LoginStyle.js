import styled from "@emotion/styled";

// 페이지 전체 컨테이너
export const Container = styled.div({
  width: "100dvw",
  backgroundColor: "#FFFFFF",
});

// 텍스트 및 구글 버튼, 선 넣을 컨테이너
export const LoginContainer = styled.div({
  width: "50dvw",
  height: "50dvh",
  backgroundColor: "#FFFFFF",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  top: "25%",
  left: "25%",
});

// "로그인" 텍스트
export const LoginText = styled.div({
  color: "black",
  fontFamily: "Pretendard",
  fontSize: "36px",
  fontWeight: "700",
  textAlign: "left",
  width: "90%",
  lineHeight: "110%",
  display: "flex",
  justifyContent: "flex-start",
});

// 받아온 구글로그인 이미지
export const GoogleLogin = styled.div`
  cursor: pointer;
  width: 30%;
  height: 20%;
  margin-top: 10%;
  padding: 1%;
  background: url(${(props) => props.path});
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

// 구글로그인 이미지 하단 회색 선
export const Line = styled.div({
  width: "90%",
  height: "0.5%",
  backgroundColor: "#DDE1E6",
  marginTop: "5%",
  display: "flex",
  justifyContent: "center",
});

// 리다이렉트메시지 담을 컨테이너
export const RedirectMessageContainer = styled.div({
  width: "90%",
});

// RedirectMessage
export const RedirectMessage = styled.div({
  color: "#686868",
  fontFamily: "Pretendard",
  fontSize: "20px",
  width: "100%",
  marginTop: "2%",
  marginBottom: "5%",
  display: "flex",
});
