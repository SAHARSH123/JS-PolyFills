//memoise a function with varying arguments
//add(2,3)
//add(5,6,7);
//multiply(2,3)
//multiply(3,3,7);

function memo(fn) {
  let cache = {};
  return function (...args) {
    const functionName = fn.name;
    const key = functionName + args.toString();
    if (key in cache) {
      console.log("from cache");
      console.log(cache);
      return cache[key];
    } else {
      const val = fn(...args);
      cache[key] = val;
      return cache[key];
    }
  };
}

function add(...args) {
  return args.reduce((total, current) => {
    return total + current;
  }, 0);
}

function mul(...args) {
  return args.reduce((total, current) => {
    return total * current;
  }, 1);
}

const Add = memo(add);
const Mul = memo(mul);
console.log(Add(2, 3));
console.log(Add(5, 6));
console.log(Add(2, 33, 3));
console.log(Add(2, 3));

console.log(Mul(2, 2, 2));
console.log(Mul(22, 2));
console.log(Mul(0, 2, 2));
console.log(Mul(2, 2, 2));
