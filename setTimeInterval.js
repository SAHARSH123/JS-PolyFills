import { customSetTimeOut } from "./timeout.js";
var { mySetTimeOut, myClearTimeOut } = customSetTimeOut();

function fun(...args) {
  console.log(`My name is ${args[0]} ${args[1]}`);
}

function customSetInterval() {
  let intervalMap = {};
  let intervalId = 1;
  function myInterval(cb, delay = 0, ...args) {
    let currentId = intervalId++;

    function reIterate() {
      intervalMap[currentId] = mySetTimeOut(
        function () {
          cb(...args);
          if (intervalMap[currentId]) {
            reIterate();
          }
        },
        delay,
        ...args
      );
    }

    reIterate();

    return currentId;
  }

  function clearMyInterval(id) {
    myClearTimeOut(intervalMap[id]);
    delete intervalMap[id];
  }

  return { myInterval, clearMyInterval };
}

var { myInterval, clearMyInterval } = customSetInterval();

// const id = myInterval(fun, 2000, "saharsh", "jain");

// setTimeout(() => {
//   clearMyInterval(id);
// }, 9000);

let counter = 0;

function greeting() {
  counter++;
  if (counter >= 3) {
    clearMyInterval(intervalid);
  }
  console.log("Helloooooo....");
}

const intervalid = myInterval(greeting, 1000);
