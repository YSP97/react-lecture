import { func, number } from 'prop-types';
import { convertSlug } from '@/utils/convertSlug';
import { getNoteItem } from '../api/getNote';
import BackLink from '../components/BackLink';
import PrintError from '../components/PrintError';
import { ROUTES } from '../constants/routes';
import './NoteDetailPage.css';

NoteDetailPage.propTypes = {
  noteId: number.isRequired,
  onChangeRoute: func,
};

function NoteDetailPage({ noteId, onChangeRoute }) {
  // noteID에 해당하는 note item가져오기
  const note = getNoteItem(noteId);

  const handleBackToList = () => onChangeRoute?.(ROUTES.list);

  // 수정 링크 클릭시 edite 페이지로 이동하는 이벤트 핸들러
  const handleEditNoteView = (e) => {
    e.preventDefault();
    onChangeRoute?.(ROUTES.edit, noteId);
  };

  // content 텍스트를 html로 변환하기
  const createMarkup = () => ({ __html: note.content });

  return (
    <div className="NoteDetailPage">
      <BackLink onClick={handleBackToList} />
      {!note && <PrintError>`{noteId}` 노트가 존재하지 않습니다.</PrintError>}
      {note && (
        <>
          <h2>{note.title}</h2>
          <span>
            {note.expand.user.name}{' '}
            <a
              href={`#/edit/${convertSlug(note.title)}`}
              onClick={handleEditNoteView}
            >
              수정
            </a>
          </span>
          {/* content 내용 들어가는 자리 => html태그로 사용가능하도록 변환 */}
          <div dangerouslySetInnerHTML={createMarkup()} />
        </>
      )}
    </div>
  );
}

export default NoteDetailPage;
