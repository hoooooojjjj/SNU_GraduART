import Router from "./components/Router";
import { useAuth } from "./auth";
import { useEffect, useState } from "react";
function App() {
  // 유저 정보 저장 state
  const [user, setUser] = useState(null);

  // useAuth 커스텀 훅을 통해 로그인된 유저 정보 가져오기
  const { user: authUser } = useAuth();

  useEffect(() => {
    // 유저 정보 저장
    setUser(authUser);
    // 유저 ID 콘솔 출력 시도 성공
    console.log(authUser?.id);
  }, [user]);

  return <Router />;
}

export default App;
