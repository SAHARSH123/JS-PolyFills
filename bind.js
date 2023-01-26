Function.prototype.bindDemo = function (currentContext = {}, ...args) {
  //this here refers to function
  currentContext.fn = this;
  return function (...newArgs) {
    currentContext.fn(...args, ...newArgs);
  };
};

const person = {
  firstName: "Saharsh",
  lastName: "Jain",
};

function getName(...args) {
  console.log(args);
  console.log(this.firstName + " " + this.lastName + " " + args);
}

const getFullName = getName.bind(person, "home", "address");
getFullName("Oswal");

const getFullName2 = getName.bindDemo(person, "home", "address");
getFullName2("Oswal");
