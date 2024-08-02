function NavContents() {
  // 컴포넌트 바디 영역
  // 리액트 렌더링 프로세스와 관련된 것만 코드를 작성해야함

  // 1. 컴포넌트(함수) 내부(바디)에 정의
  // 이벤트 핸들러 정의
  // 부수효과(순수하지 않음) : 렌더링 프로세스와 연관이 없는 것을 처리한다.
  // -> 이벤트 핸들러로 처리하고 있는 모습이다
  const handleLink = (e) => {
    e.preventDefault();
    console.log('이벤트 응답');
    const firstLink = document.querySelector('[href="#responding-to-events"]');
    console.log(firstLink);
  };
  return (
    <nav className="NavContents" aria-label="학습 주제 탐색">
      <a
        href="#jsx-markup"
        // 2. JSX 내부 -> 근데 코드가 좀 더러워보임ㅎ
        onClick={(e) => {
          e.preventDefault();
          console.log('JSX 마크업');
        }}
      >
        JSX 마크업
      </a>
      <a href="#responding-to-events" className="active" onClick={handleLink}>
        이벤트 응답
      </a>
    </nav>
  );
}

export default NavContents;
