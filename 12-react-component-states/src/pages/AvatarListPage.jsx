import Avatar from '@/components/Avatar';
import avatarsData from '@/data/avatars';
import { useState } from 'react';

// 1. data 분리
// 2. 컴포넌트 상태로 정의
// 3. 이벤트 핸들러 작성(기능 구현)
// 4. 사용자 상호작용에 따라 화면 업데이트 (확인)
// 5. 컴포넌트 테스트 -> 스킵(아직 안배움)

function AvatarListPage() {
  const [list, setList] = useState(avatarsData);

  const handleDelteItem = (deleteID) => () => {
    // 다음 렌더링에서 화면에 표시할 상태 데이터
    const nextList = list.filter((item) => item.id !== deleteID);
    setList(nextList);
  };

  if (list.length === 0) {
    return <p>화면에 표시할 아바타가 없어용!👀</p>;
  }
  return (
    <ul className="AvatarList">
      {list.map((item) => (
        <li key={item.name}>
          <Avatar name={item.name} photo={item.photo} status={item.status} />
          <button
            type="button"
            style={{ marginBlockStart: 8 }}
            onClick={handleDelteItem(item.id)}
          >
            삭제
          </button>
        </li>
      ))}
    </ul>
  );
}

export default AvatarListPage;
