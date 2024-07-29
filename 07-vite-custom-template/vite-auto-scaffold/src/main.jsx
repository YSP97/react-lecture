import React, { StrictMode } from "react";
import { createRoot } from "https://esm.sh/react-dom";
import AvatarListPage from "./pages/AvatarList.jsx";
// 상대경로로 쓰세용 -> 절대경로로 쓰면 안되는 환경임 -> 절대경로로 쓰면 노드모듈스에서 자꾸 찾아서

const container = document.getElementById("react-app");

if (container) {
  createRoot(container).render(
    // Strict Mode 필요한 이유:

    // Compound Compenent Pattern: <React.StrictMode> => nameSpace.module
    // 아래는 맨 위에서 구조분해할당으로 지정한 StrictMode로 쓴 것을 알 수 있음!
    <StrictMode>
      <AvatarListPage />
    </StrictMode>
  );
} else {
  console.warn('문서에 "#react-app" 요소가 존재하지 않습니다.');
}
