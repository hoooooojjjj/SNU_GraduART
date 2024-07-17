import styled from "@emotion/styled";

export const Container = styled.div({
  width: "100dvw",
  backgroundColor: "#FFFFFF",
});

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

export const GoogleLogin = styled.div`
  cursor: pointer;
  width: 59.5%;
  height: 20%;
  margin-top: 10%;
  padding: 1%;
  background: url(${(props) => props.path});
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
`;

export const Line = styled.div({
  width: "90%",
  height: "0.5%",
  backgroundColor: "#DDE1E6",
  marginTop: "10%",
  display: "flex",
  justifyContent: "center",
});
