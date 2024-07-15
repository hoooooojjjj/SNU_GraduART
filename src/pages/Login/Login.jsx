import React from "react";
import {
  Container,
  LoginContainer,
  LoginText,
  GoogleLogin,
  Line,
} from "./LoginStyle.js";
import { NavLink } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import Header from "../../components/Header/Header.jsx";

function Login() {
  return (
    <Container>
      <Header></Header>
      <LoginContainer>
        <LoginText>로그인</LoginText>
        <GoogleLogin path={`/assets/googleLoginImg.png`}></GoogleLogin>
        <Line></Line>
      </LoginContainer>
    </Container>
  );
}

export default Login;
