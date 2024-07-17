import React, { useEffect } from "react";
import {
  Container,
  LoginContainer,
  LoginText,
  GoogleLogin,
  Line,
} from "./LoginStyle.js";
import Header from "../../components/Header/Header.jsx";

function Login() {
  // useEffect(() => {
  //   const getUser = async () => {
  //     const {
  //       data: { user },
  //     } = await supabase.auth.getUser();

  //     console.log(user);
  //   };

  //   getUser();
  // });

  return (
    <Container>
      <Header></Header>
      <LoginContainer>
        <LoginText>로그인</LoginText>
        <GoogleLogin
          // onClick={googleLogin}
          path={`/assets/googleLoginImg.png`}
        ></GoogleLogin>
        <Line></Line>
      </LoginContainer>
    </Container>
  );
}

export default Login;
