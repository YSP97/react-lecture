import useStateWithCallback from './useStateWithCallback';

// 1. 직접 구현해보긔
/** @type {(initialValue: any, callback?.(nextState) => void) => [isToggle, setIsToggle]} */
export function _useToggle(initialValue = false, callback) {
  // const [isToggle, setIsToggle] = useState(initialValue);
  // useEffect(() => {
  //   callback?.(isToggle);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isToggle]);
  // return [isToggle, setIsToggle];
}

// 2. 커스텀 훅 효과
/** @type {(initialValue: any, callback?.(nextState) => void) => [isToggle, setIsToggle]} */
export default function useToggle(initialValue = false, callback) {
  return useStateWithCallback(initialValue, callback);
}
