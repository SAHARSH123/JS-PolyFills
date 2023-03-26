function test(...args) {
  console.log("HI", args[0]);
}

function Throttle(cb, delay, ...args) {
  let flag = 1;
  return function () {
    if (flag == 1) {
      cb(...args);
      flag = 0;
      setTimeout(() => {
        flag = 1;
      }, delay);
    } else {
      console.log("no");
    }
  };
}

let x = Throttle(test, 5000, "Saharsh");
