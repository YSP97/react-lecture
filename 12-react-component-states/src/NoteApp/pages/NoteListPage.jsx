import { useState } from 'react';
import { getNoteList } from '../api/getNote';
import NoteList from '../components/NoteList';
import './NoteListPage.css';
import { func } from 'prop-types';
import { ROUTES } from '../constants/routes';

NoteListPage.propTypes = {
  onChangeRoute: func.isRequired,
};
function NoteListPage({ onChangeRoute }) {
  // useState의 초기화 함수(초기값을 반환함)
  // 왜 const [list] = useState(getNoteList());라고 쓰지 않는걸까?
  // 성능 이슈로! 위처럼 쓰면 계속 불러오는 경우 계속 렌더링하는 단점이 있음
  const [list] = useState(() => getNoteList());

  const handleClick = (e) => {
    e.preventDefault();
    onChangeRoute(ROUTES.create);
  };

  return (
    <div className="NoteListPage">
      <NoteList list={list} />
      <a onClick={handleClick} className="createNoteLink" href="#create-note">
        노트 작성
      </a>
    </div>
  );
}

export default NoteListPage;
