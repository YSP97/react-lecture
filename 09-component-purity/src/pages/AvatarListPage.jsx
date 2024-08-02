// --------------------------------------------------------------------------
// ✅ 컴포넌트 로직 재구성
// --------------------------------------------------------------------------
// - [x] 데이터 분리
// - [x] 리스트 렌더링
// - [x] 컴포넌트 속성 검사
// - [ ] 컴포넌트 순수성 진단
// --------------------------------------------------------------------------
import { arrayOf } from 'prop-types';
import Avatar from '@/components/Avatar';
import { UserType } from '@/@types/globals.d';
// import { count } from 'console';

AvatarListPage.propTypes = {
  list: arrayOf(UserType).isRequired,
};

const anotherData = {
  count: 10,
};
// let renderCount = 0;
// setInterval(() => {
//   console.log(renderCount);
//   document.getElementById('react-app').dataset.render = ++renderCount;
// }, 1000);

function AvatarListPage(props) {
  // 컴포넌트 내부 공간에서의 코드 로직은 동일입력인 경우 동일 출력이어야 한다.
  // 배열 객체의 pop 메서드 사용 -> 원본배열 훼손함 근데 strictMode때문에 두 번 실행되면 두 개 지워짐
  // 원본 데이터(즉 props) mutation(수정)
  // list.pop();
  // props.list.pop();

  // 외부의 데이터인 props에 의존한 파생된 데이터
  // 역순으로 정렬
  // 프롭스는 읽기 전용 데이터이므로 전달받은 하위 컴포넌트에서 수정하면 안된다.
  // const list = props.list.toReversed(); // 순수한 형태 그대로 사용됨
  const myList = [...props.list];

  return (
    <ul className="AvatarList">
      {myList.map((user) => (
        <li key={user.id}>
          <Avatar user={user} /> {anotherData.count++}
        </li>
      ))}
    </ul>
  );
}

export default AvatarListPage;
