// --------------------------------------------------------------------------
// ✅ 노트 앱 (with React)
// --------------------------------------------------------------------------
// - [ ] 노트 앱, 세부 구성 해설
// - [ ] 노트 생성 (Create)
// - [ ] 노트 리스트 또는 아이템 읽기 (Read)
// - [ ] 노트 수정 (Update)
// - [ ] 노트 삭제 (Delete)
// --------------------------------------------------------------------------

import { useState } from 'react';
import { ROUTES } from './constants/routes';
import NoteListPage from './pages/NoteListPage';
import NoteCreatePage from './pages/NoteCreatePage';
import NoteDetailPage from './pages/NoteDetailPage';
import NoteEditPage from './pages/NoteEditPage';

function NoteApp() {
  // 루트(경로) 정보 상태 관리(데이터 타입: 객체)
  const [routeInfo, setRouteInfo] = useState({
    // 화면에 표시할 페이지 루트 상태 관리
    route: ROUTES.list,
    // 선택된 노트의 ID(노트 자세히 보기 페이지, 노트 수정 페이지에 필요하기 때문)
    noteId: null,
  });

  // state update funtion
  const handleChangeRoute = (nextRoute) => {
    // 매우 중요하도다
    // useState 훅에서 반환된 상태 업데이트 함수는 상태를 덮어쓴다. (합성하지 않음)
    // 그러므로 개발자가 직접 합성해야한다.
    setRouteInfo({
      ...routeInfo,
      route: nextRoute,
    });
  };

  // JSX 페이지 경로에 따라 페이지 반환
  switch (routeInfo.route) {
    default:
    case ROUTES.list:
      return <NoteListPage onChangeRoute={handleChangeRoute} />;
    case ROUTES.create:
      return <NoteCreatePage onChangeRoute={handleChangeRoute} />;
    case ROUTES.detail:
      return <NoteDetailPage noteId={routeInfo.noteId} />;
    case ROUTES.edit:
      return <NoteEditPage noteId={routeInfo.noteId} />;
  }
}

export default NoteApp;
