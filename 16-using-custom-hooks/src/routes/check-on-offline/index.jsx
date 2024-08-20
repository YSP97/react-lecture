import useOnline from '@/hooks/useOnline';
import Switcher from '../sync-web-storage/components/Switcher';
import { useEffect, useRef } from 'react';
import useStateWithCallback from '@/hooks/useStateWithCallback';

function CheckOnOffline() {
  const isOnline = useOnline();

  // custom hook 사용
  const [message, setMessage] = useStateWithCallback('hello', (nextMessage) => {
    pRef.current.textContent = nextMessage.toUpperCase();
  });

  const handleChangeMessage = () => {
    setMessage((m) => `${m}❤️`);
  };
  const pRef = useRef(null);

  return (
    <div style={{ display: 'flex', flexFlow: 'column', gap: 20 }}>
      <h1>Check On/Offline</h1>
      <Switcher value={isOnline} />

      {/* 선언적 프로그래밍 */}
      <button type="button" onClick={handleChangeMessage}>
        add message
      </button>
      {/* 명령형 프로그래밍 */}
      <output>{message}</output>

      <p ref={pRef}></p>
    </div>
  );
}

export default CheckOnOffline;
