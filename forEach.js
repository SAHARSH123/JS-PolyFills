const arr = [2, 3, 4];

Array.prototype.forEach = function (cb) {
  for (let index = 0; index < this.length; index++) {
    cb(this[index]);
  }
};

arr.forEach(function (ele) {
  console.log(ele * 3);
});
