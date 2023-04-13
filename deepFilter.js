const obj1 = {
  a: 1,
  b: {
    c: "Hello World",
    d: 2,
    e: {
      f: {
        g: -4,
      },
    },
    h: "Good Night Moon",
  },
};

const obj3 = {
  a: 1,
  b: {
    c: 2,
    d: -3,
    e: {
      f: {
        g: -4,
      },
    },
    h: {
      i: 5,
      j: 6,
    },
  },
};

const filter = (s) => typeof s === "string";
const filter2 = (n) => n >= 0;

const deepFilter = (obj, fn) => {
  const temp = {};

  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === "object") {
      let ans = deepFilter(obj[key], fn);
      if (Object.keys(ans).length > 0) {
        temp[key] = ans;
      }
    } else {
      if (fn(obj[key])) {
        temp[key] = obj[key];
      }
    }
  });

  return temp;
};

let filteredObject = deepFilter(obj1, filter);
let secondFilter = deepFilter(obj3, filter2);
console.log(filteredObject);
console.log(secondFilter);
