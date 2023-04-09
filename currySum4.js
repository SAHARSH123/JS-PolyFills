function add(...args) {
  let storage = [...args];

  function helper(...newArgs) {
    storage.push(...newArgs);
    return helper;
  }

  helper.valueOf = function () {
    return storage.reduce((cum, cur) => {
      return cum + cur;
    }, 0);
  };

  helper.value = helper.valueOf;

  return helper;
}

console.log(add(1, 2, 3).value() === 6);
console.log(add(1, 2)(3).value() === 6);
console.log(add(1)(2)(3, 4).value() === 10);
console.log(add(1, 2) + 3 === 6);

console.log(add(1, 2)(3) + 7);

// https://www.educative.io/answers/what-is-objectvalueof-in-javascript
