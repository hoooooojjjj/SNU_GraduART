import React from "react";
import { supabase } from "../ServerClient.js";

const LoginComponent = () => {
  const signInWithGoogle = async () => {
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
      <script src="https://accounts.google.com/gsi/client?hl=ko" async></script>
        <div
          id="g_id_onload"
          data-locale="ko"
          data-client_id="887642201474-dlcahndjduspb0rpnpieui1mqpo6btoo.apps.googleusercontent.com"
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
        <button onClick={signInWithGoogle}>Login with Google</button>
    </div>
  );
};

export default LoginComponent;
