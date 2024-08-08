export function throttle(callback, timeout = 400) {
  let isCalled = false;

  return (...args) => {
    if (!isCalled) {
      isCalled = true;
      setTimeout(() => {
        callback.apply(null, args);
        isCalled = false;
      }, timeout);
    }
  };
}
