import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../ServerClient.js";

const LoginComponent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.onload = () => {
      window.google.accounts.id.initialize({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        callback: handleSignIn,
      });

      window.google.accounts.id.renderButton(
        document.getElementById("g_id_signin"),
        {
          theme: "outline",
          size: "large",
          locale: "ko",
        }
      );
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSignIn = async (response) => {
    console.log("Google login attempt:", response);
    const { credential } = response;

    if (!credential) {
      console.error("No credential found in response");
      return;
    }

    const { data, error } = await supabase.auth.signInWithIdToken({
      token: credential,
      provider: "google",
    });

    if (error) {
      console.error("Error signing in with Google:", error.message);
    } else {
      const { user } = data;
      if (user) {
        localStorage.setItem("supabase.auth.token", JSON.stringify(user));
        navigate("/");
      }
    }
  };

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        navigate("/");
      }
    };
    checkUser();
  }, [navigate]);

  return (
    <div>
      <div
        id="g_id_onload"
        data-locale="ko"
        data-client_id={import.meta.env.VITE_GOOGLE_CLIENT_ID}
        data-auto_prompt="false"
        data-use_fedcm_for_prompt="true"
      ></div>
      <div
        id="g_id_signin"
        data-type="standard"
        data-size="large"
        data-theme="outline"
        data-text="sign_in_with"
        data-shape="rectangular"
        data-logo_alignment="left"
      ></div>
    </div>
  );
};

export default LoginComponent;
