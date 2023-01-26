Function.prototype.apply = function (currentContext = {}, arr = []) {
  currentContext.fn = this;
  currentContext.fn(...arr);
};
const person = {
  firstName: "Arvind",
};

const son = {
  firstName: "Saharsh",
};

function getName(middleName, lastName) {
  console.log(this.firstName + " " + middleName + " " + lastName);
}

getName.apply(person, ["kumar", "jain"]);
getName.apply(son, ["kumar", "jain"]);
