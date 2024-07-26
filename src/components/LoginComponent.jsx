import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../ServerClient.js";

const LoginComponent = ({ redirectPath }) => {
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
        // 로그인된 사용자가 있다면 redirectPath가 truthy하면 해당 경로로 리다이렉트
        if (redirectPath) {
          navigate(redirectPath);
        } else {
          navigate("/");
        }
      }
    };

    checkUser();
  }, [navigate, redirectPath]);

  return (
    <div onClick={handleSignIn} align={"center"}>
      <img
        alt={"Google Login Button"}
        src={`/assets/googleLoginImg.png`}
        width={"50%"}
      ></img>
    </div>
  );
};

export default LoginComponent;
