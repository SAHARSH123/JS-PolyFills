let total = sum(10)(20, 40)(30)();
console.log(total);

function sum(...args) {
  let total = 0;
  let arr = [...args];
  if (args.length == 0) return 0;
  return function curry(...next) {
    if (next.length === 0) {
      return arr.reduce((cum, curr) => {
        return cum + curr;
      }, 0);
    }
    arr.push(...next);
    return curry;
  };
}
