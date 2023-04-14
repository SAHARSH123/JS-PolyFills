let obj = {
  a: {
    b: (a, b, c) => a + b + c,
    c: (a, b, c) => a + b - c,
  },
  d: (a, b, c) => a - b - c,
};

function Fn(obj) {
  return function (...args) {
    function recur(obj) {
      let temp = {};
      Object.keys(obj).forEach((key) => {
        if (typeof obj[key] === "object") {
          let newObj = recur(obj[key]);
          temp[key] = newObj;
        } else if (typeof obj[key] === "function") {
          temp[key] = obj[key](...args);
        } else {
          temp[key] = obj[key];
        }
      });
      return temp;
    }

    return recur(obj);
  };
}

let temp = Fn(obj)(1, 1, 1);
console.log(temp);
