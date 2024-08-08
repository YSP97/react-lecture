export function debounce(callback, timeout = 500) {
  let cleanup = null;
  return (...args) => {
    clearTimeout(cleanup);
    setTimeout(callback.bind(null, ...args), timeout);
  };
}
