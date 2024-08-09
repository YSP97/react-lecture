// --------------------------------------------------------------------------
// ✅ 노트 앱 (with React)
// --------------------------------------------------------------------------
// - [x] 노트 앱, 세부 구성 해설
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
import { getNoteList } from './api/getNote';

function NoteApp() {
  // [상태 선언]
  // 루트(경로) 정보 상태 관리 (데이터 타입: 객체)
  const [routeInfo, setRouteInfo] = useState({
    // 화면에 표시할 페이지 루트(경로) 식별자
    route: ROUTES.list,
    // 선택된 노트의 ID 식별자 (노트 자세히 보기 페이지, 노트 수정 페이지)
    noteId: null,
  });

  // 화면에 표시할 노트의 목록 상태 (데이터 타입: 배열)
  // useState(getNoteList()): 여러번 호출할 경우 성능상 문제가 될 수 있다고 한다
  // 위와같이 작성하면 컴포넌트가 렌더링될 때마다 이 함수가 실행됨
  // getNumbers()가 계산이 복잡하거나 시간이 오래 걸리는 함수라면, 성능에 부정적인 영향을 줄 수 있음

  //  useState(() => getNoteList()): 초기 렌더링에서만 함수가 호출됨
  const [list, setList] = useState(() => getNoteList());

  // [상태 업데이트 기능]

  // 루트(경로) 변경 기능
  // pickNoteId: 선택된 노트 아이템의 ID, nextRoute: 이동할 루트
  const handleChangeRoute = (nextRoute, pickNoteId) => {
    // useState 훅에서 반환된 상태 업데이트 함수는 상태를 교체한다. (합성하지 않음)
    // 그러므로 객체 또는 배열 타입의 데이터를 상태로 관리할 경우 주의가 요구된다.
    // 해결책: 개발자가 직접 객체를 합성해야 한다.
    setRouteInfo({
      // 객체 합성(복사)
      ...routeInfo,
      route: nextRoute,
      // pickNoteId가 undefinded, null인 경우 routeInfo.noteId, 즉 현재 선택된 노트의 ID를 저장하는 상태를 지정
      noteId: pickNoteId ? pickNoteId : routeInfo.noteId,
    });
  };

  // 노트 생성 기능
  const handleCreateNote = (newNoteItem) => {
    // 기존 배열 뒤에 새로운 노트 아이템 추가
    setList([...list, newNoteItem]);
  };

  // 노트 수정 기능
  const handleEditNote = (willEditNote) => {
    // 순회중인 노트 아이템과 편집한 노트 아이템 일치하는 노트 아이템 리스트 생성
    const nextList = list.map((item) =>
      item.id === willEditNote.id ? willEditNote : item
    );
    // 노트 리스트 상태 업데이트
    setList(nextList);
  };

  // 노트 삭제 기능
  const handleDeleteNote = (willDeleteNoteId) => {
    // 삭제하려는 노트 아이템 아이디와 일치하지 않는 노트 아이템만 걸러서 리스트 생성
    const nextList = list.filter((item) => item.id !== willDeleteNoteId);
    // 노트 리스트 상태 업데이트
    setList(nextList);
  };

  // [파생된 상태]
  // 새롭게 생성할 노트 아이템의 ID
  const newNoteId = list.length + 1;

  // 페이지 경로에 따라 페이지 마크업(JSX) 반환
  switch (routeInfo.route) {
    default:
    case ROUTES.list:
      return <NoteListPage list={list} onChangeRoute={handleChangeRoute} />;
    case ROUTES.create:
      return (
        <NoteCreatePage
          newNoteId={newNoteId}
          onCreate={handleCreateNote}
          onChangeRoute={handleChangeRoute}
        />
      );
    case ROUTES.detail:
      return (
        <NoteDetailPage
          noteId={routeInfo.noteId}
          onChangeRoute={handleChangeRoute}
        />
      );
    case ROUTES.edit:
      return (
        <NoteEditPage
          noteId={routeInfo.noteId}
          onChangeRoute={handleChangeRoute}
          onEdit={handleEditNote}
          onDelete={handleDeleteNote}
        />
      );
  }
}

export default NoteApp;
