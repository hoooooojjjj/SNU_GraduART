import Router from "./components/Router";
import { useAuth } from "./auth";
import React, { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// 유저 정보를 모든 하위 컴포넌트에 전달하는 context
export const userContext = React.createContext();

function App() {
  // 유저 정보 저장 state
  const [user, setUser] = useState(null);

  // useAuth 커스텀 훅을 통해 로그인된 유저 정보 가져오기
  const { user: authUser } = useAuth();

  // Create a client
  const queryClient = new QueryClient();

  useEffect(() => {
    // 유저 정보 저장
    setUser(authUser);
  }, [authUser]);

  return (
    <QueryClientProvider client={queryClient}>
      <userContext.Provider value={[user, setUser]}>
        <Router />
      </userContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
