import { string } from 'prop-types';
import './UserSearchBox.css';
import { useId, useState } from 'react';

function UserSearchBox() {
  // useId: 리액트에서 제공하는 접근성을 위한 id 어트리뷰트 생성하는 hook
  const id = useId();

  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    console.log({ searchTerm });
  };

  const handleSearch = () => {
    console.log(searchTerm);
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
          onChange={handleChange}
        />
      </div>
      <button type="button" onClick={handleSearch}>
        찾기
      </button>
    </div>
  );
}

export default UserSearchBox;
