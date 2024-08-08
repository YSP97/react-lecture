import { useId } from 'react';
import { string, func } from 'prop-types';
import './UserSearchBox.css';

UserSearchBox.propTypes = {
  searchTerm: string.isRequired,
  onSearch: func, // optional
};

function UserSearchBox({ searchTerm, onSearch }) {
  const id = useId();

  const handleSearch = (e) => {
    e.preventDefault();
    // Side Effects
    // DOM 접근, 속성 값 읽기
    const input = document.getElementById(id);
    const value = input.value.trim();
    const button = input.closest('form').querySelector('[type="submit"]');
    console.log(button);

    if (value.length > 0) {
      onSearch?.(value);
      input.value = '';
      button.focus();
    } else {
      alert('검색어를 입력해주세요.');
      input.focus();
      input.value = '';
    }
  };

  return (
    <form className="UserSearchBox">
      <div className="control">
        <label htmlFor={id}>사용자 검색</label>
        <input
          id={id}
          type="search"
          placeholder="사용자 정보 입력"
          defaultValue={searchTerm}
          // value={searchTerm}
          // onChange={handleChange}
          // readOnly
        />
      </div>
      <button type="submit" onClick={handleSearch}>
        찾기
      </button>
    </form>
  );
}

export default UserSearchBox;
