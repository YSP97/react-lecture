// --------------------------------------------------------------------------
// ✅ animate() 함수 키프레임 사용법
// --------------------------------------------------------------------------
// - [ ] 사커볼이 화면 벽면에 부딫힌 후, 다시 돌아오도록 애니메이션 설정합니다.
// - [ ] 사커볼 움직임이 좀 더 자연스러워지도록 이징(easing)도 키프레임을 적용하세요.
// - [ ] 옵션(duration, delay, easing, direction, repeat, autoPlay)을 설정해보세요.
// --------------------------------------------------------------------------

import { animate, spring } from 'motion';
import SoccorBall from '../components/SoccorBall';
import S from './AnimateDemo.module.css';
import { useRef } from 'react';

function AnimateKeyframeDemo() {
  const soccorBallRef = useRef(null);
  const handleMoveAnimate = () => {
    const { current: element } = soccorBallRef;
    // console.log(element);
    animate(
      element,
      { x: [0, 400, 0], rotate: [0, 360, -360], scaleY: [1, 0.5, 1] },
      {
        duration: 1,
        easing: 'ease-out',
        repeat: 2,
        endDelay: 0.5,
        // x: {
        //   easing: spring({ velocity: 8000, stiffness: 100, damping: 10 }),
        // },
      }
    );
  };

  return (
    <div className={S.component}>
      <button className={S.button} type="button" onClick={handleMoveAnimate}>
        키프레임 애니메이션
      </button>
      {/*  상위에서 하위에 있는 ref를 가져올 수 없어서 고차 컴포넌트로 만들어야함 */}
      <SoccorBall ref={soccorBallRef} size={60} />
    </div>
  );
}

export default AnimateKeyframeDemo;
