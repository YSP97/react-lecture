/**@type {(key: string, initialValue?: any) => any} */
export function getStorageData(key, initialValue = null) {
  const data = localStorage.getItem(key);
  return data !== null ? JSON.parse(data) : initialValue;
}
/**@type {(key: string, value: any) => void} */
export function setStorageData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
