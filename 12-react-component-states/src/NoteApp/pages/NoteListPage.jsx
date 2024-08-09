import { func } from 'prop-types';
import NoteList from '../components/NoteList';
import { ROUTES } from '../constants/routes';
import { NoteListType } from '../types/note';
import './NoteListPage.css';

NoteListPage.propTypes = {
  list: NoteListType.isRequired,
  onChangeRoute: func.isRequired,
};

function NoteListPage({ list, onChangeRoute }) {
  const handleClick = (e) => {
    e.preventDefault();
    // 노트 작성 링크 누를 시 create 루트로 이동
    onChangeRoute(ROUTES.create);
  };

  return (
    <div className="NoteListPage">
      {/* 노트 리스트 컴포넌트: props: list, onChangeRoute */}
      <NoteList list={list} onChangeRoute={onChangeRoute} />
      <a onClick={handleClick} className="createNoteLink" href="#create-note">
        노트 작성
      </a>
    </div>
  );
}

export default NoteListPage;
