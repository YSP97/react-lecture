import { Link } from 'react-router-dom';

export default function NewNotePage() {
  return (
    <main>
      <h1>노트 생성 페이지</h1>
      <p>
        <Link to={'/'}>홈</Link> 페이지로 이동
      </p>
    </main>
  );
}
