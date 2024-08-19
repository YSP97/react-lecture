import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>홈 페이지</h1>
      <p>싱글 페이지 애플리케이션의 홈 페이지 입니다.</p>

      <div style={{ display: 'flex', gap: ' 10px' }}>
        <Link to={'/notes'}>노트 목록</Link>페이지로 이동
      </div>
    </div>
  );
}
