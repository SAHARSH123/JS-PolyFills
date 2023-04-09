Function.prototype.call = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "it's not callable");
  }
  context.fn = this;
  context.fn(...args);
};

var name = "TestUser";

const obj = {
  name: "Saharsh",
  getName: function (...args) {
    console.log(args);
    console.log(this.name);
    return this.name;
  },
};

let fn = obj.getName;
fn.call(this, "firstName", "SecondName");
fn.call(obj, "SecondName", "FirstName");
