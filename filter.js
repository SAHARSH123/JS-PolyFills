Array.prototype.filter = function (cb) {
  const filteredArray = [];
  for (let item of this) {
    if (cb(item) === true) {
      filteredArray.push(item);
    }
  }

  return filteredArray;
};
const arr = [1, 2, 4, 5, 6, 8];
const filteredArray = arr.filter((ele, index, arr) => {
  return ele % 2 == 0;
});
console.log(filteredArray);
