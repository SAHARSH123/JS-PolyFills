// class Category {
//   constructor(c) {
//     this.category = c;
//   }

//   getCategoryName() {
//     console.log(this.category);
//   }
// }

// class Product extends Category {
//   constructor(name, cost, category) {
//     super(category);
//     this.name = name;
//     this.cost = cost;
//   }

//   display() {
//     this.getCategoryName();
//   }
// }

// const p1 = new Product("iphone", 10000, "elecronics");
// p1.display();

let p2 = new Product("iphone", 1000, "electronics");

function Category(category) {
  this.category = category;
}

function Product(name, cost, category) {
  this.name = name;
  this.price = cost;
  Category.call(this, category);
  return this;
}

Category.prototype.getCategoryName = function () {
  console.log(this.category);
};
Product.prototype = Object.create(Category.prototype);

// Product.prototype.display = function () {
//   this.getCategoryName();
// };

p2.getCategoryName();
