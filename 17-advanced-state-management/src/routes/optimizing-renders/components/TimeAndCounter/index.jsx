import useClock from '@/hooks/useClock';
import S from './style.module.css';
import Counter from '../Counter';
import TimeToggler from './TimeToggler';
import useRenderCountLog from '@/hooks/useRenderCountLog';
import React, { useCallback, useEffect, useRef } from 'react';

// TimeToggler 컴포넌트 함수 역시 함수(객체)이므로 리-렌더링시 계속 함수를 생성한다!
// 따라서 컴포넌트도 기억해야한다! memo를 사용(컴포넌트 내부에서 사용하지 않는다)
// const MemoizedTimeToggler = React.memo(TimeToggler);

function TimeAndCounter() {
  // 컴포넌트가 리-렌더링 되는 이유
  // 1. 컴포넌트 자신이 소유한 상태 변경될 때
  // 2. 컴포넌트 외부에서 전달된 속성이 변경될 때
  const { time, turnOn, onOff } = useClock();
  useRenderCountLog('TimeAndCounter', '#538b4f', 800, 20);

  const handleToggleTime = useCallback(() => onOff((c) => !c), [onOff]);

  const label = `타임 ${turnOn ? '스톱' : '플레이'}`; // 원시값(불변값)

  return (
    <div className={S.component}>
      <div role="group" className={S.group}>
        <time>{time}</time>
        <TimeToggler onToggle={handleToggleTime}>{label}</TimeToggler>
        {/* label은 원시값이라 불변 */}
        {/* onToggle는 함수(즉 객체) 따라서 변할 수 있다! 리렌더링 될때마다 다시 함수를 생성해서 계속해서 TimeToggler 컴포넌트가 리렌더링 되는것! */}
      </div>
      <Counter />
    </div>
  );
}

export default TimeAndCounter;
