import { useId, useState } from 'react';
import { oneOf } from 'prop-types';
import { getUserList } from '../api/getUser';
import './NoteForm.css';
import { NoteType } from '../types/note';
import { convertHTMLToText } from '@/utils/convertTextToHTMLString';

// 서버가 없어서 서버에서 가져오는 것처럼 데이터를 1회 가져오도록 설정
const userList = getUserList();

NoteForm.propTypes = {
  mode: oneOf(['create', 'edit']),
  note: NoteType,
};

function NoteForm({ mode = 'create', note }) {
  const titleId = useId();
  const contentId = useId();
  const userId = useId();

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    userID: 0,
  });

  //  상태 업데이트 기능
  // - 노트 제목, 내용, 작성자 정보를 하나의 핸들러를 사용해 업데이트 수행

  const handleUpdateFormData = (e) => {
    // 이벤트 객체가 가지는 name, value 속성을 이용해서 제어하자!
    const { name, value } = e.target;
    console.log(name, value);
    // data 유지를 위해 데이터 합성을 반드시 해야한다!
    const nextFormData = {
      ...formData,
      [name]: value,
    };

    setFormData(nextFormData);
  };

  // 노트 생성 시 실행될 함수
  const handleSubmit = (e) => {
    e.preventDefault();

    // 폼의 데이터를 리액트로 관리할것인가?(성능이슈 있음)
    // 아니면 native(웹)로 관리할 것인가?(성능이슈 없음!)
  };

  // 노트 초기화시 실행될 함수
  const handleReset = (e) => {
    e.preventDefault();
  };

  // 노트 삭제시 실행될 함수
  const handleDelete = () => {
    console.log('delete');
  };

  // 파생된 상태
  // 생성 또는 수저 모드 여부 확인
  const isCreateMode = mode.includes('create');
  // 생성 또는 수정 모드에 따라 화면에 표시될 버튼 레이블 설정
  const submitButtonLabel = isCreateMode ? '추가' : '수정';

  // if (note) {
  //   note.content;
  // }

  return (
    <form className="NoteForm" onSubmit={handleSubmit} onReset={handleReset}>
      <div className="formControl">
        <label htmlFor={titleId}>제목</label>
        <input
          type="text"
          id={titleId}
          name="title"
          value={formData.title}
          onChange={handleUpdateFormData} /* defaultValue={note?.title} */
        />
      </div>

      <div className="formControl">
        <label htmlFor={contentId}>내용</label>
        <textarea
          id={contentId}
          name="content"
          defaultValue={note && convertHTMLToText(note.content)}
          value={formData.content}
          onChange={handleUpdateFormData}
        />
      </div>

      {isCreateMode && (
        <div className="formControl">
          <label htmlFor={userId}>작성자</label>
          <select
            id={userId}
            value={formData.userID}
            onChange={handleUpdateFormData}
            name="userID"
          >
            <option>작성자 선택</option>
            {userList.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="buttonGroup">
        <button type="submit">{submitButtonLabel}</button>

        {isCreateMode ? (
          <button type="reset">초기화</button>
        ) : (
          <button type="button" onClick={handleDelete}>
            삭제
          </button>
        )}
      </div>
    </form>
  );
}

export default NoteForm;
