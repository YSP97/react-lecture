import { func } from 'prop-types';
import { convertSlug } from '@/utils/convertSlug';
import { NoteListType } from '../types/note';
import { ROUTES } from '../constants/routes';
import './NoteList.css';

// 노트 아이템 리스트 -> 누를 시 디테일 페이지 이동
NoteList.propTypes = {
  list: NoteListType.isRequired,
  onChangeRoute: func,
};

function NoteList({ list, onChangeRoute }) {
  // 노트 아이템 클릭 시 detail 페이지로 이동하면서 선택된 노트 아이템 ID onChangeRoute에 전달
  const handleClick = (pickNoteId) => (e) => {
    e.preventDefault();
    onChangeRoute?.(ROUTES.detail, pickNoteId);
  };

  return (
    <div className="NoteList">
      <h2>노트 필기 목록</h2>
      <ul>
        {list.map((item) => {
          /* item의 title이 Item Title인 경우 주소 고유 식별자를 item-title로 변경하도록 함수 실행 */
          const slug = `#${convertSlug(item.title)}`;

          return (
            <li key={item.id}>
              <a href={slug} onClick={handleClick(item.id)}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default NoteList;
