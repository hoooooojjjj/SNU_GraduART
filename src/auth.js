// 사용자가 로그인되어 있는지 확인하여 사용자 정보를 반환하는 커스텀 훅
import { useState, useEffect } from "react";
import { supabase } from "./ServerClient.js";

export const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const session = JSON.parse(localStorage.getItem("supabase.auth.token"));

    if (session) {
      supabase.auth.setSession(session);
      setUser(session.user);
    }

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session) {
          localStorage.setItem("supabase.auth.token", JSON.stringify(session));
          setUser(session.user);
        } else {
          localStorage.removeItem("supabase.auth.token");
          setUser(null);
        }
      }
    );

    return () => {
      authListener.unsubscribe();
    };
  }, []);

  const getUserUUID = () => {
    const user = supabase.auth.getUser;
    return user ? user.id : null;
  };

  return { user, getUserUUID };
};
