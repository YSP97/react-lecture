// --------------------------------------------------------------------------
// ✅ 쓸모없는 체크박스 / 정리
// --------------------------------------------------------------------------
// - [ ] 체크 상태 해제해도, 1초 뒤 다시 체크되는 쓸모없는 체크박스를 구현합니다. (타이머 API 사용)
// - [ ] 컴포넌트가 언마운트 된 이,후 남은 이펙트를 깨끗하게 정리합니다.
// --------------------------------------------------------------------------

import { useEffect, useId, useState } from 'react';
import S from './UselessCheckbox.module.css';

function UselessCheckbox() {
  const id = useId();
  const [checked, setChecked] = useState(true);
  useEffect(() => {
    let clearID = 0;
    if (!checked) {
      clearID = setTimeout(() => {
        setChecked(true);
        console.log('쓸데없는 기능 실행ㅋ');
      }, 1000);
    }

    return () => {
      clearTimeout(clearID);
    };
  }, [checked]);

  const handleChecked = () => setChecked((c) => !c);

  return (
    <div className={S.component}>
      <label htmlFor={id} className="sr-only">
        쓸모없는 체크박스
      </label>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={handleChecked}
      />
    </div>
  );
}

export default UselessCheckbox;
