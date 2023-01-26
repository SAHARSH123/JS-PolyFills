// function fun(...args) {
//   console.log(`My name is ${args[0]} ${args[1]}`);
// }

// console.log("Welcome to setTimeout polyfill");
// let id = setTimeout(fun, 5000, "saharsh", 26);
// let id2 = setTimeout(fun, 1000, "avi", "26");
// let id3 = setTimeout(() => {
//   console.log("clearing time ", id);
//   clearTimeout(id);
// }, 2000);
// console.log("end");

export function customSetTimeOut() {
  let id = 1;
  let timers = {};
  function mySetTimeOut(cb, delay = 0, ...args) {
    id++;
    let currentTime = Date.now();
    let currentId = id;
    timers[currentId] = true;
    function check() {
      if (!timers[currentId]) return;
      if (Date.now() >= currentTime + delay) {
        cb(...args);
        myClearTimeOut(currentId);
      }
      requestIdleCallback(check);
    }

    requestIdleCallback(check);
    return currentId;
  }

  function myClearTimeOut(id) {
    delete timers[id];
  }

  return { mySetTimeOut, myClearTimeOut };
}

// function fun(...args) {
//   console.log(`My name is ${args[0]} ${args[1]}`);
// }

// console.log("Welcome to setTimeout polyfill");
// let id = mySetTimeOut(fun, 5000, "saharsh", 26);
// console.log(id);
// let id2 = mySetTimeOut(fun, 1000, "avi", "26");
// console.log(id2);
// let id3 = mySetTimeOut(() => {
//   console.log("clearing time ", id);
//   myClearTimeOut(id);
// }, 2000);
// console.log(id3);
// console.log("end");
