import { Link } from 'react-router-dom';

export default function NoteDetailPage() {
  return (
    <main>
      <h1>노트 디테일 페이지</h1>
      <p>
        <Link to={'/notes'}>노트 목록</Link> 페이지로 이동
      </p>
    </main>
  );
}
