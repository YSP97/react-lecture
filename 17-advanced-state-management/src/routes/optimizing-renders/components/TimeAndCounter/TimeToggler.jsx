import { func, node } from 'prop-types';
import S from './style.module.css';
import useRenderCountLog from '@/hooks/useRenderCountLog';
import { memo } from 'react';

TimeToggler.propTypes = {
  children: node.isRequired,
  onToggle: func,
};

function TimeToggler({ children, onToggle }) {
  //  children: 시간의 변화에 따라서는 변경되지 X
  //  onToggle: 함수(객체)라서 리렌더링시 함수 재선언으로 인해 함께 리렌더링 됨!
  useRenderCountLog('TimeToggler', '#b86697', 800, 20);
  return (
    <button type="button" className={S.button} onClick={onToggle}>
      {children}
    </button>
  );
}

export default memo(TimeToggler); // 컴포넌트 기억하기
