import React, { useEffect, useState } from "react";
import {
  Container,
  LoginContainer,
  LoginText,
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

  return (
    <Container>
      <Header></Header>
      <LoginContainer>
        <LoginText>로그인</LoginText>
        <br></br>
        <RedirectMessage>{isRedirect ? isRedirect : ""}</RedirectMessage>
        <LoginComponent></LoginComponent>
        <Line></Line>
      </LoginContainer>
    </Container>
  );
}

export default Login;
