import React, { useEffect, useState } from "react";
import {
  Container,
  LoginContainer,
  LoginText,
  GoogleLogin,
  Line,
  RedirectMessage,
} from "./LoginStyle.js";
import Header from "../../components/Header/Header.jsx";
import { useLocation } from "react-router-dom";
import LoginComponent from "../../components/LoginComponent.jsx";

function Login() {
  const [isRedirect, setIsRedirect] = useState(null);

  const redirectMessage = useLocation().state;

  useEffect(() => {
    setIsRedirect(redirectMessage);
  });
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
        <LoginComponent></LoginComponent>
        <RedirectMessage>{isRedirect ? isRedirect : ""}</RedirectMessage>
        <GoogleLogin
          path={`/assets/googleLoginImg.png`}
        ></GoogleLogin>
        <Line></Line>
      </LoginContainer>
    </Container>
  );
}

export default Login;
