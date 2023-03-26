function customTimeout() {
  const timers = {};
  const setMyTimeOut = (cb, delay) => {
    const timerId = setTimeout(cb, delay);
    timers[timerId] = true;
    return timerId;
  };

  const clearAllTimeout = () => {
    for (let key in timers) {
      console.log(key);
      clearTimeout(key);
      delete timers[key];
    }
  };

  return { setMyTimeOut, clearAllTimeout };
}

const { setMyTimeOut, clearAllTimeout } = customTimeout();

const timer1 = setMyTimeOut(() => {
  console.log("bye");
}, 8000);

const timer2 = setMyTimeOut(() => {
  console.log("bte bye");
}, 3000);

setTimeout(() => {
  clearAllTimeout();
}, 5000);
