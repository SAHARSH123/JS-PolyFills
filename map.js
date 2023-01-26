arr = [2, 3, 4];
Array.prototype.map = function (cb) {
  const output = [];
  for (item of this) {
    output.push(cb(item));
  }
  return output;
};

// Array.prototype.map = (cb) => {
//   const output = [];
//   for (item of arr) {
//     output.push(cb(item));
//   }
//   return output;
// };
// console.log(arr);
const newArray = arr.map((item) => item * 2);
console.log(arr, newArray);
