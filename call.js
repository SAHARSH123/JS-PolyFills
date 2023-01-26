Function.prototype.calll = function (currentContext = {}, ...args) {
  currentContext.fn = this;
  console.log(args);
  currentContext.fn(args);
};
const person = {
  firstName: "Arvind",
};

const son = {
  firstName: "Saharsh",
};

//here it refers to rest because it's converting to array
function getName(...args) {
  console.log(this.firstName + " " + args);
}

// getName.call(person, "kumar", "jain");
// getName.call(son, "kumar", "jain");

getName.calll(person, "kumar", "jain");
getName.calll(son, "kumar", "jain");
