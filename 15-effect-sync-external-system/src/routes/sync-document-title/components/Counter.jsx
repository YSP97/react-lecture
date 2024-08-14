// --------------------------------------------------------------------------
// ✅ 문서 제목 동기화
// --------------------------------------------------------------------------
// - [ ] 이펙트 작성(추가)하는 방법!
// - [ ] 카운터 앱의 count 상태가 변경되면 문서 제목을 동기화합니다.
// - [ ] step 값이 변경될 때에는 불필요한 문서 제목 동기화가 되지 않도록 설정합니다.
// --------------------------------------------------------------------------

import { useId, useState, useEffect } from 'react';
import S from './Counter.module.css';

// 문서의 초기제목
const DOCUMENT_TITLE = document.title;

function Counter() {
  // 컴포넌트 JSX가 실제 DOM 요소로 마운트 되었니?
  // [이펙트] useEffect
  // 첫번째 인수: effect callback 함수 설정
  // - refCallback은 마운트시 한 번만 실행됨
  // - useEffect는 마운트 된 이후 실행되는데 값이 변할때마다 실행됨
  // - 상태가 변경될때마다 실행됨

  // 두번째 인수: 종속성(의존성) 배열
  // - 설정하지 않은 경우, 렌더링 시마다 매번 실행
  // - 배열이 비어있는 경우, 마운트 시점에서 1회 실행됨 (strict mode에서는 2번 시행)

  const id = useId();

  const [state, setState] = useState({
    count: 0,
    step: 1,
  });

  const { count, step } = state;

  // 이런식으로 관심사끼리 묶어두는 것이 좋다!
  // const [count, setCount] = useState(1);
  useEffect(() => {
    document.title = `(${count})` + DOCUMENT_TITLE;
  }, [count]);

  // const [step, setStep] = useState(1);
  useEffect(() => {
    console.log(`${step}이 변경됨`);
  }, [step]);

  const handleDecrease = () => {
    let nextCount = count - step;
    if (nextCount <= 1) nextCount = 1;
    setState({ ...state, count: nextCount });
  };

  const handleIncrease = () => {
    setState({ ...state, count: count + step });
  };

  const handleChangeStep = (e) => {
    setState({ ...state, step: Number(e.target.value) });
  };

  const isDisabled = count <= 1;

  return (
    <>
      <div className={S.component}>
        <button
          type="button"
          aria-label="카운트 감소"
          disabled={isDisabled}
          onClick={handleDecrease}
        >
          <svg
            fill="none"
            strokeWidth={1.5}
            width={12}
            height={12}
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
        <output>{count}</output>
        <button type="button" aria-label="카운트 증가" onClick={handleIncrease}>
          <svg
            fill="none"
            strokeWidth={1.5}
            stroke="currentColor"
            width={12}
            height={12}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        </button>
      </div>
      <div className={S.changeStep}>
        <label htmlFor={id}>step 변경</label>
        <input type="number" id={id} value={step} onChange={handleChangeStep} />
      </div>
    </>
  );
}

export default Counter;
