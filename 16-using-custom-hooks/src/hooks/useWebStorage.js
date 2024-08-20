import { useState } from 'react';

const global = globalThis ?? window;
const { localStorage, sessionStorage } = globalThis;

const getStroageItem = (key, storageType = 'local') => {
  const storage = storageType.includes('local') ? localStorage : sessionStorage;
  const item = storage.getItem(key);
  const data = JSON.parse(item);

  return data ?? null;
};
const setStroageItem = (key, value, storageType = 'local') => {
  const storage = storageType.includes('local') ? localStorage : sessionStorage;

  if (value) {
    const jsonStringfyValue = JSON.stringify(value);
    storage.setItem(key, jsonStringfyValue);
  } else {
    console.warn('value가 존재 안함!');
  }
};

const deleteStroageItem = (key, storageType = 'local') => {
  const storage = storageType.includes('local') ? localStorage : sessionStorage;
  if (!key) console.warn('삭제할 key가 존재하지 않음!');
  storage.removeItem(key);
};

const allClearItem = (storageType = 'local') => {
  const storage = storageType.includes('local') ? localStorage : sessionStorage;
  storage.clear();
};

export function useLocalStorage(key, initialValue) {
  const [state, setState] = useState(() => getStroageItem(key) ?? initialValue);

  const getItem = () => {
    return getStroageItem(key);
  };

  const setItem = (newValue) => {
    return setStroageItem(key, newValue);
  };
  const deleteItem = () => {
    return deleteStroageItem(key);
  };
  const allClear = () => {
    return allClearItem();
  };
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
export function useSessionStorage(key, initialValue) {
  const [state, setState] = useState(() => getStroageItem(key) ?? initialValue);

  const getItem = () => {
    return getStroageItem(key, 'session');
  };

  const setItem = (newValue) => {
    return setStroageItem(key, newValue, 'session');
  };
  const deleteItem = () => {
    return deleteStroageItem(key, 'session');
  };
  const allClear = () => {
    return allClearItem('session');
  };
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
