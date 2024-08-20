import useStateWithCallback from './useStateWithCallback';

const { localStorage, sessionStorage } = globalThis;

// 웹 스토리지 데이터 읽기
const getStorageItem = (key, storageType = 'local') => {
  const storage = storageType.includes('local') ? localStorage : sessionStorage;
  const item = storage.getItem(key);
  const data = JSON.parse(item);
  return data ?? null;
};

// 웹 스토리지 데이터 쓰기
const setStorageItem = (key, value, storageType = 'local') => {
  const storage = storageType.includes('local') ? localStorage : sessionStorage;
  const stringifyValue = JSON.stringify(value);
  storage.setItem(key, stringifyValue);
};

// 웹 스토리지 데이터 삭제
const deleteStorageItem = (key, storageType = 'local') => {
  const storage = storageType.includes('local') ? localStorage : sessionStorage;
  if (!key) console.warn('삭제할 아이템의 키가 존재하지 않습니다.');
  else storage.removeItem(key);
};

// 웹 스토리지 데이터 모두 삭제
const allClearItems = (storageType = 'local') => {
  const storage = storageType.includes('local') ? localStorage : sessionStorage;
  storage.clear();
};

export function useLocalStorage(key, initialValue, autoSave = false) {
  const [state, setState] = useStateWithCallback(
    () => getStorageItem(key) ?? initialValue,
    (nextState) => autoSave && setItem(nextState)
  );

  const getItem = () => getStorageItem(key);
  const setItem = (newValue) => setStorageItem(key, newValue);
  const deleteItem = () => deleteStorageItem(key);
  const allClear = () => allClearItems();

  return [
    state,
    setState,
    /* methods */ {
      getItem,
      setItem,
      deleteItem,
      allClear,
    },
  ];
}

export function useSessionStorage(key, initialValue, autoSave = false) {
  const [state, setState] = useStateWithCallback(
    () => getStorageItem(key) ?? initialValue,
    (nextState) => autoSave && setItem(nextState)
  );

  const getItem = () => getStorageItem(key, 'session');
  const setItem = (newValue) => setStorageItem(key, newValue, 'session');
  const deleteItem = () => deleteStorageItem(key, 'session');
  const allClear = () => allClearItems('session');

  return [
    state,
    setState,
    {
      getItem,
      setItem,
      deleteItem,
      allClear,
    },
  ];
}

export default {
  useLocalStorage,
  useSessionStorage,
};
