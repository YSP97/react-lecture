import { func } from 'prop-types';
import './BackLink.css';

BackLink.propTypes = {
  onClick: func,
};

// onClick={handleBackToList}
function BackLink({ onClick }) {
  // 이전 링크 누를 시 Note List Page로 이동
  const handleBack = (e) => {
    e.preventDefault();
    onClick?.();
  };

  return (
    <a href="#back" className="BackLink" onClick={handleBack}>
      <svg
        width="16px"
        height="16px"
        viewBox="0 0 24 24"
        strokeWidth={1}
        fill="none"
      >
        <path
          d="M21 12L3 12M3 12L11.5 3.5M3 12L11.5 20.5"
          stroke="#fff"
          strokeWidth={1}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}

export default BackLink;
