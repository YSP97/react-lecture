import AvatarListPage from '@/pages/AvatarListPage';
import avatarsData from '@/data/avatars';

// 리액트 컴포넌트(함수)가 순수한지 확인하기 위해 두 번 실행해서 순수한 지 아닌지 확인한다.
// 컴포넌트는 mount[1]->unmount->mount[2]로 두 번 실행한다.
// 이는 개발중 모드(즉 StrincMode)일때만 두 번 실행함 -> 배포 시에는(StrictMode 작동 X) 한 번만 실행함

let tryCount = 0;

function App() {
  console.log(++tryCount, { avatarsData });
  return (
    <div className="App">
      <AvatarListPage list={avatarsData} />
    </div>
  );
}

export default App;
