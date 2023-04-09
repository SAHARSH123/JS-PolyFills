Array.prototype.eventMap = {};
Array.prototype.addListner = function (event, cb) {
  let arr = this;
  if (!arr.eventMap.hasOwnProperty(event)) {
    arr.eventMap[event] = cb;
  } else {
    let eventArr = arr.eventMap[event];
    eventArr.push(cb);
  }
};

Array.prototype.pushWithEvent = function (event, arr) {
  let originalArr = this;
  originalArr.push(...arr);
  let eventsArr = this.eventMap[event];
  for (let index = 0; index < eventsArr.length; index++) {
    let fn = eventsArr[index];
    fn(arr);
  }
};

Array.prototype.popWithEvent = function (event) {
  let originalArr = this;
  let ele = originalArr.pop();
  let eventsArr = this.eventMap[event];
  for (let index = 0; index < eventsArr.length; index++) {
    let fn = eventsArr[index];
    fn(ele);
  }
};
const arr = [1];

arr.addListner("add", (items) => {
  console.log("Items were added ", items);
});

arr.pushWithEvent("add", [2, 3]);

arr.addListner("add", (items) => {
  console.log("items were added again ", items);
});

arr.pushWithEvent("add", [4, 5]);

arr.addListner("remove", (item) => {
  console.log("item was removed", item);
});

arr.popWithEvent("remove");
arr.popWithEvent("remove");
