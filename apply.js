// Function.prototype.apply = function (currentContext = {}, arr = []) {
//   currentContext.fn = this;
//   currentContext.fn(...arr);
// };

Function.prototype.apply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(this + "can't be bound");
  }

  if (!Array.isArray(args)) {
    throw new TypeError("Can't be called on nonarray");
  }
  context.fn = this;
  context.fn(...args);
};

const person = {
  firstName: "Arvind",
};

const son = {
  firstName: "Saharsh",
};

function getName(...args) {
  console.log(args);
  console.log(this.firstName + " " + args[0] + " " + args[1]);
}

getName.apply(person, ["kumar", "jain"]);
getName.apply(son, ["kumar", "jain"]);
