import { useState, useEffect } from 'react';

/** @type {(initialValue: any, callback?: (nextState: any)=>void) => [state, setState]} */
export default function useStateWithCallback(initialValue, callback) {
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    const nextState = state;
    callback?.(nextState);

    // 나는 callback이 반응성 상태가 아닌 걸 알고있음! -> 그래서 임의로 이렇게 처리할 수 밖에 없으
    // 19버전부터는 해결된다고 함!
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return [state, setState];
}
