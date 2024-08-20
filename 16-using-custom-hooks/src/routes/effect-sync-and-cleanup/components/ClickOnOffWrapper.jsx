import { useState } from 'react';
import ClockOnOff from './ClockOnOff';

export default function ClockOnOffWrapper() {
  const [isClockOn, setIsClockOn] = useState(false);
  return (
    <ClockOnOff isOn={isClockOn} onToggle={() => setIsClockOn((s) => !s)} />
  );
}
