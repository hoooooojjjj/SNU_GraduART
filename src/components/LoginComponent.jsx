import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {supabase} from "../ServerClient.js";

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
  }, [navigate]);

  const handleSignIn = async (response) => {
    console.log("Google login attempt:", response);
    const { credential } = response;

    if (!credential) {
      console.error("No credential found in response");
      return;
    }

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        access_token: credential,
        redirectTo: import.meta.env.VITE_FRONT_URL
      },
    });

    if (error) {
      console.error("Error signing in with Google:", error.message);
    } else {
      const { session } = data;
      if (session) {
        localStorage.setItem("supabase.auth.token", JSON.stringify(session));
        navigate("/");
      }
    }
  };

  useEffect(() => {
    const { user } = supabase.auth.getUser;
    if (user) {
      navigate("/");
    }
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

export default LoginComponent