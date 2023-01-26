function customSetTimeOut() {
  let timers = {};
  let id = 0;
  window.setTimeout = function (cb, delay) {
    id++;
    let timerId = id;
    let startTime = Date.now();
    timers[timerId] = true;
    function check() {
      if (!timers[timerId]) return;
      if (Date.now() >= startTime + delay) {
        cb();
        clearTimeout(timerId);
      }
      requestIdleCallback(check);
    }
    requestIdleCallback(check);
    return timerId;
  };

  window.clearTimeout = function (id) {
    delete timers[id];
  };
}

customSetTimeOut();
