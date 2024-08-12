import S from './App.module.css';
import RouterProvider from '@/@euid-router/RouterProvider';
import { GlobalNav } from '@/components';
import routes from '@/routes';

function App() {
  return (
    <div className={S.component}>
      {/* 경로 안내자(루트 분석해 페이지 컴포넌트 설정) */}
      <RouterProvider navigation={<GlobalNav />} routes={routes} />
    </div>
  );
}

export default App;
