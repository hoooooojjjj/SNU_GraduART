import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../ServerClient.js";
import {alignProperty} from "@mui/material/styles/cssUtils.js";

const LoginComponent = () => {
  const navigate = useNavigate();
  const handleSignIn = async (response) => {

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: import.meta.env.VITE_FRONT_URL,
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
      <div onClick={handleSignIn} align={'center'}>
        <img alt={"Google Login Button"}
             src={`/assets/googleLoginImg.png`}
             width={'50%'}>
        </img>
      </div>
  );
};

export default LoginComponent;
