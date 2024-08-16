// --------------------------------------------------------------------------
// ✅ 마우스 위치 동기화 / 정리
// --------------------------------------------------------------------------
// - [ ] 마우스가 움직이면 마우스 위치가 화면에 출력되도록 이펙트를 사용해 구현합니다.
// - [ ] 컴포넌트가 언마운트 된 이후 남은 이펙트를 깨끗하게 정리합니다.
// --------------------------------------------------------------------------

import { useEffect, useState } from 'react';
import S from './PrintMousePosition.module.css';
import { debounce, throttle } from '/utils';

function PrintMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { x, y } = mousePosition;

  useEffect(() => {
    const handleMove = ({ pageX: x, pageY: y }) => {
      setMousePosition({ x, y });
    };
    console.log('마우스 추적 이벤트 연결!');
    document.addEventListener('mousemove', throttle(handleMove, 100));

    return () => {
      console.log('마우스 추적 이벤트 해지!');
      document.removeEventListener('mousemove', throttle(handleMove, 100));
    };
  }, []);

  return (
    <div className={S.component}>
      <output>
        {x} <span>/</span> {y}
      </output>
    </div>
  );
}

export default PrintMousePosition;
