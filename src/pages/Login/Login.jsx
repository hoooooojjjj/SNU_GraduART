import React, { useEffect } from "react";
import {
  Container,
  LoginContainer,
  LoginText,
  GoogleLogin,
  Line,
} from "./LoginStyle.js";
import { createClient } from "@supabase/supabase-js";
import Header from "../../components/Header/Header.jsx";

const supabase = createClient(
  "https://wjoocdnkngzyrprnnytm.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indqb29jZG5rbmd6eXJwcm5ueXRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA0MzkyMjksImV4cCI6MjAzNjAxNTIyOX0.vBZyH45AvtMWgOzv2fRhMvJMO5xhcgaXpsV5rolYnq4"
);

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
