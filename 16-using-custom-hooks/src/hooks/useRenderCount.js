// 디버깅을 위한 렌더링 횟수 확인 custom hook

import { useEffect, useRef } from 'react';

export default function useRenderCount() {
  const renderCountRef = useRef(0); // { current: 0 }

  useEffect(() => {
    renderCountRef.current++;
  });
  // 매번 렌더링마다 렌더링 횟수를 증가시키기 위하여 종속성 배열은 필요하지 않음!

  return renderCountRef.current;
}
