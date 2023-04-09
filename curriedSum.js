function sum(a, b, c, d) {
  return a + b + c + d;
}

function curry(fn) {
  return function curry(...args) {
    if (args.length === fn.length) {
      return fn(...args);
    } else {
      return function (...newArgs) {
        return curry(...args, ...newArgs);
      };
    }
  };
}

let curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3, 4));
console.log(curriedSum(1)(2, 3)(4));
console.log(curriedSum(1)(2, 3, 4));
