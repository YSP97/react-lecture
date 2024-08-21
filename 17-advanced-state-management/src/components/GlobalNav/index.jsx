import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navigationItems } from '@/router';
import S from './style.module.css';

function GlobalNav() {
  // 불변 데이터(스냅샷)을 위해 state 정의
  // 리-렌더링이 되더라도 캐싱된(기억된) 값을 그대로 사용됨
  const [navigationList] = useState(navigationItems);

  return (
    <nav className={S.component}>
      <h2>학습 주제</h2>
      <ul>
        {navigationList.map(({ path, text }) => (
          <li key={path}>
            <NavLink
              to={path}
              className={({ isActive }) => {
                return isActive ? S.active : undefined;
              }}
            >
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default GlobalNav;
