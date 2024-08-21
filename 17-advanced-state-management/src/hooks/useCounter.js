import { useCallback, useState } from 'react';

function useCounter({
  count: initialCount = 0,
  step = 1,
  min = 0,
  max = 100,
} = {}) {
  const [count, setCount] = useState(initialCount);

  const isMinDisabled = count <= min;
  const isMaxDisabled = count >= max;

  const reset = useCallback(() => setCount(initialCount), [initialCount]);
  // 만약 리셋버튼이 있어서 리셋 이벤트를 걸어주려고 하면
  // 이 함수가 리렌더링시 계속 실행되므로 함수 기억해두는 게 좋음

  const increment = useCallback(
    () =>
      setCount((c) => {
        let nextCount = c + step;
        if (nextCount >= max) nextCount = max;
        return nextCount;
      }),
    [max, step]
  );

  const decrement = useCallback(
    () =>
      setCount((c) => {
        let nextCount = c - step;
        if (nextCount <= min) nextCount = min;
        return nextCount;
      }),
    [min, step]
  );

  return {
    count,
    step,
    isMinDisabled,
    isMaxDisabled,
    increment,
    decrement,
    reset,
  };
}

export default useCounter;
