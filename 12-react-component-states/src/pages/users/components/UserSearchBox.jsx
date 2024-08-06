import { func, string } from 'prop-types';
import './UserSearchBox.css';
import { useId, useState } from 'react';

UserSearchBox.propTypes = {
  searchTerm: string.isRequired,
  onSearch: func,
};

function UserSearchBox({ searchTerm, onSearch }) {
  // useId: 리액트에서 제공하는 접근성을 위한 id 어트리뷰트 생성하는 hook
  const id = useId();

  // const handleChange = (e) => {
  //   setSearchTerm(e.target.value);
  // };

  const handleSearch = () => {
    console.log('search');
    // sideEffectCode
    // DOM 접근, 속성 값 읽기
    const input = document.getElementById(id);
    const value = input.value.trim();

    if (value.length > 0) {
      onSearch?.(value);
    }
    // onSearch?.();
  };

  return (
    <div className="UserSearchBox">
      <div className="control">
        <label htmlFor={id}>사용자 검색</label>
        {/* useRef */}
        <input
          type="search"
          id={id}
          placeholder="사용자 이름 입력"
          // value={searchTerm}
          // onchange 사용하지 않으면 value값만 있는 읽기전용임
          // 읽기전용만 사용하려면 defaultValue로 설정할 것
          //  defaultValue는 렌더링 시점에만 해당 input의 value를 채우고 이후에는 제어하지 않는다
          // onChange={handleChange}
          defaultValue={searchTerm}
        />
      </div>
      <button type="button" onClick={handleSearch}>
        찾기
      </button>
    </div>
  );
}

export default UserSearchBox;
