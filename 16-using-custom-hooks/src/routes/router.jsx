// React Router 라이브러리를 사용한 싱글 페이지 앱 제작
// 실습 진행 (30분까지 진행)

import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

// 레이아웃
import RootLayout from '@/components/RootLayout';

// 페이지
import SyncDocumentTitle from './sync-document-title';
import SyncWebStorage from './sync-web-storage';
import EffectSyncAndCleanup from './effect-sync-and-cleanup';
import ScrollTriggerEffect from './scroll-trigger-effect';
import SyncBackend from './sync-backend';
import PrintMousePosition from './effect-sync-and-cleanup/components/PrintMousePosition';
import UselessCheckbox from './effect-sync-and-cleanup/components/UselessCheckbox';
import ClockOnOff from './effect-sync-and-cleanup/components/ClockOnOff';

// 루트(경로 집합)
const routes = createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route index element={<SyncDocumentTitle />} />
    <Route path="sync-web-storage" element={<SyncWebStorage />} />
    {/* [중첩된 루트 설정] */}
    <Route path="effect-sync-and-cleanup" element={<EffectSyncAndCleanup />}>
      {/* /effect-sync-and-cleanup  →  마우스 위치 추적 */}
      <Route index element={<PrintMousePosition />} />
      {/* /effect-sync-and-cleanup/clock  →  시계 ON/OFF */}
      <Route path="clock" element={<ClockOnOff />} />
      {/* /effect-sync-and-cleanup/useless-checkbox  →  쓸모없는 체크박스 */}
      <Route path="useless-checkbox" element={<UselessCheckbox />} />
    </Route>
    <Route path="scroll-trigger-effect" element={<ScrollTriggerEffect />} />
    <Route path="sync-backend" element={<SyncBackend />} />
    <Route path="check-on-offline" element={<heckOnOffline />} />
  </Route>
);

// 라우터
const router = createBrowserRouter(routes);

// 라우터 내보내기
export default router;
