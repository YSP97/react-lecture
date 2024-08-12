import S from './style.module.css';

function Home() {
  return (
    <div className={S.component}>
      <h1 lang="en">SPA(Single Page Application)</h1>
      <p>
        브라우저 측에서 리액트를 사용해 사용자가 요청에 따른 페이지 컴포넌트를
        렌더링하여 전통적인 웹 프로그렘을 브라우저 단에서 처리할 수 있다.
      </p>
    </div>
  );
}

export default Home;
