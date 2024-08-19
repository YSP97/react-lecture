import { Link } from 'react-router-dom';

export default function NoteListPage() {
  return (
    <main>
      <h1>노트 리스트 페이지</h1>
      <ul>
        <li>
          <Link to={'/'}>홈</Link> 페이지로 이동
        </li>
        <li>
          <Link to={'/notes/new'}>노트 작성</Link> 페이지로 이동
        </li>
        <li>
          <Link to={'/notes/detail'}>노트 1</Link> 페이지로 이동
        </li>
        <li>
          <Link to={'/notes/detail'}>노트 2</Link> 페이지로 이동
        </li>
      </ul>
    </main>
  );
}
