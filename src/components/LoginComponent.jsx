import React, { useEffect } from "react";
import { supabase } from "../ServerClient.js";

const LoginComponent = () => {
  useEffect(() => {
    // Load the Google Sign-In script
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.onload = () => {
      // Initialize the Google Sign-In button after the script loads
      window.google.accounts.id.initialize({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        callback: handleCredentialResponse,
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
  }, []);

  const handleCredentialResponse = async (response) => {
    console.log(response);

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) {
      console.error("Error signing in with Google:", error.message);
    } else {
      const { session } = data;
      if (session) {
        localStorage.setItem("supabase.auth.token", JSON.stringify(session));
      }
    }
  };

  return (
    <div>
        <div
          id="g_id_onload"
          data-locale="ko"
          data-client_id={import.meta.env.VITE_GOOGLE_CLIENT_ID}
          data-login_uri={import.meta.env.VITE_FRONT_URL}
          data-auto_prompt="false"
        ></div>
        <div
          className="g_id_signin"
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
