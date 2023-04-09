// computeValue().lacs(15).crore(5).lacs(20).thousand(45).crore(7).value();

class ComputeValue {
  constructor() {
    this.total = 0;
  }

  lacs(val) {
    this.total += val * 100000;
    return this;
  }

  value() {
    return this.total;
  }
}

function computeValue() {
  let obj = {
    total: 0,
    lacs: function (val) {
      this.total += val * 100000;
      return this;
    },

    value: function () {
      return this.total;
    },
  };

  return obj;
}

let obj = new ComputeValue();
let obj2 = new ComputeValue();
let item = obj.lacs(15).value();
let item2 = obj2.lacs(2).lacs(5).value();
console.log(item);
console.log(item2);

let obj3 = computeValue();
let obj4 = computeValue();

let item3 = obj3.lacs(15).value();
let item4 = obj4.lacs(2).lacs(5).value();
console.log(item3);
console.log(item4);
