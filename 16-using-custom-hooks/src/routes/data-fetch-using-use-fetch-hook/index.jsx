import useFetch from '@/hooks/useFetch';

export default function DataFetchUsingUseFetchHook() {
  const { status, data, error } = useFetch('https://koreanjson.com/users/');

  if (status === 'loading') {
    return <div>로딩중...</div>;
  }
  if (status === 'error') {
    return <div>{error}</div>;
  }
  return (
    <main id="page">
      <h1 className="headline">useFetch() 훅을 사용해 데이터 페칭</h1>
      <div className="description">
        <p>useFetch() 커스텀 훅을 사용해 데이터 페치</p>
      </div>
      {status === 'loading' && <div>로딩중...</div>}
      {status === 'error' && <div>{error}</div>}
      <ul>{data && data.map((item) => <li key={item.id}>{item.name}</li>)}</ul>
    </main>
  );
  //
}
