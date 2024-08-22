import guideImage from './assets/task-manager-guide.png';
import useDocumentTitle from '@/hooks/useDocumentTitle';
import TaskManager from './components/TaskManager';
import S from './style.module.css';
import { AppLink } from '@/components';
import { useReducer, useState } from 'react';

// 작업 요청(action) 알림(dispatch)이 오면 리듀서가 일을 합니다.
// 리듀서는 요청을 수행하여 새로운 상태(state)를 반환함
const authReducer = (state, action) => {
  // 액션 요청서
  // 요청을 식별하여 기능을 수행 -> 수행결과는 다음 상태를 반환해야함
  console.log(action);
  if (action.type === 'signIn') {
    return action.payload;
  }
  if (action.type === 'signOut') {
    return null;
  }
};

function TaskManagerUsingReducer() {
  useDocumentTitle('태스크 매니저 (리듀서 활용)');
  const [authUser, dispatch] = useReducer(authReducer, null);

  // console.log(authUser);

  // const [authUser, setAuthUser] = useState(null);

  const signIn = () => {
    // dispatch(/* 액션(객체, 내부에 타입을 가짐)을 전달 */)
    dispatch({
      type: 'signIn',
      payload: {
        name: '윤선',
        email: 'pus1072@naver.com',
      },
    });
  };
  const signOut = () => {
    dispatch({
      type: 'signOut',
    });
  };

  return (
    <main id="page" className={S.component}>
      <h1 className="headline">태스크 매니저 (리듀서 활용)</h1>

      <div>
        <h2 className="headline2">인증 정보</h2>
        {authUser ? (
          <>
            <p>
              {authUser.name}({authUser.email})
            </p>
            <button type="button" onClick={signOut}>
              로그아웃
            </button>
          </>
        ) : (
          <>
            <p>인증된 사용자가 없습니다.</p>
            <button type="button" onClick={signIn}>
              로그인
            </button>
          </>
        )}
      </div>

      <div className="description">
        <figure>
          <figcaption>
            <p>
              <AppLink
                href="https://ko.react.dev/reference/react/useReducer"
                isExternal
              >
                useReducer()
              </AppLink>{' '}
              훅 사용법을 학습한 후, 태스크 매니저 앱을 구현합니다.
            </p>
            <p style={{ marginBlockStart: 12 }}>요구 사항</p>
            <ul style={{ marginBlockStart: 8 }}>
              <li>추가 기능</li>
              <li>삭제 기능</li>
              <li>수행 여부 체크 기능</li>
              <li>핀(pin) 체크 기능</li>
              <li>
                <AppLink href="https://pocketbase.io" isExternal>
                  PocketBase
                </AppLink>{' '}
                활용
              </li>
            </ul>
          </figcaption>
          <img src={guideImage} alt="" height={130} />
        </figure>

        <p hidden style={{ marginBlockStart: 28 }}>
          구현한 태스크 매니저 앱을{' '}
          <a
            href="https://ko.react.dev/reference/react/useReducer"
            rel="noreferrer noopener"
            target="_blank"
          >
            useReducer()
          </a>{' '}
          훅을 사용해 재구성합니다.
        </p>
      </div>

      <div className="divider" />

      <TaskManager />
    </main>
  );
}

export default TaskManagerUsingReducer;
