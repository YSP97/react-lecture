// --------------------------------------------------------------------------
// ✅ 스크롤 애니메이션
// --------------------------------------------------------------------------
// - [ ] 대상 요소의 스크롤 위치에 따라 프로그래스바 scaleX 값이 애니메이션 되도록 설정합니다.
// - [ ] 대상 요소의 스크롤 위치에 따라 아웃풋 텍스트 콘텐츠 값이 %로 출력되도록 설정합니다.
// --------------------------------------------------------------------------

import { oneOf, string } from 'prop-types';
import S from './Progress.module.css';
import { useRef } from 'react';
import { animate, scroll } from 'motion';

ProgressBar.propTypes = {
  containerSelector: string,
  axis: oneOf(['x', 'y']),
};

function ProgressBar({ containerSelector = null, axis = 'y' }) {
  // 사용자의 액션 이벤트 X => 마운트 시점에 실행될 콜백함수가 필요하다 refCallback

  const progressBarRef = useRef(null);
  const outputRef = useRef(null);
  const setProgressBar = () => {
    const container = document.querySelector(`${containerSelector}`);
    const scrollOptions = { container, axis };

    // 스크롤 애니메이션 설정
    // API1: scroll()

    // API2
    scroll(({ y: { progress } }) => {
      progressBarRef.current.style.transform = `scaleX(${progress})`;
      outputRef.current.value = (progress * 100).toFixed(0) + '%';
    }, scrollOptions);
  };

  return (
    <div ref={setProgressBar}>
      <div className={S.progress} ref={progressBarRef} />
      <output className={S.output} ref={outputRef}>
        0%
      </output>
    </div>
  );
}

export default ProgressBar;
