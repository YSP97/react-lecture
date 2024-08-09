import { number, func } from 'prop-types';
import { getNoteItem } from '../api/getNote';
import BackLink from '../components/BackLink';
import NoteForm from '../components/NoteForm';
import PrintError from '../components/PrintError';
import './NoteEditPage.css';
import { ROUTES } from '../constants/routes';

NoteEditPage.propTypes = {
  noteId: number.isRequired,
  onChangeRoute: func,
  onEdit: func,
  onDelete: func,
};

// App 컴포넌트에서 데이터를 props로 전부 전달
function NoteEditPage({ noteId, onChangeRoute, onEdit, onDelete }) {
  // getNoteItem(noteId): notelist 순회하면서 noteId에 해당하는 아이템 가져오는 함수
  // ID와 일치하는 아이템이 데이터에 없으면 null을 반환! 이때 생성한 아이템들은 json 데이터에 추가할 수 없으므로
  // 아무것도 가져오지 않는다!(null)
  const note = getNoteItem(noteId);
  // 노트 list 페이지로 이동하는 이벤트 핸들러(루트 이동)
  const handleBackToList = () => onChangeRoute(ROUTES.list);

  return (
    <div className="NoteEditPage">
      <BackLink onClick={handleBackToList} />
      {!note && <PrintError>`{noteId}` 노트가 존재하지 않습니다.</PrintError>}
      {note && (
        <>
          <h2>노트 편집</h2>
          <NoteForm
            mode="edit"
            note={note}
            onEdit={onEdit}
            onDelete={onDelete}
            onBackToList={handleBackToList}
          />
        </>
      )}
    </div>
  );
}

export default NoteEditPage;
