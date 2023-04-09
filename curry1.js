const sum = curry();
sum(2); //2
sum(3); //5
sum(4); //9
sum(0); //9

function curry() {
  let curSum = 0;
  return function (...args) {
    let cumSum = curSum + args[0];
    console.log(cumSum);
    curSum = cumSum;
  };
}
