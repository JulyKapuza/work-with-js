// ==============Classes//prototype

function Product(brand, price, discount) {
  // create new object
  // for this objecct bind link this
  // return this object
  this.brand = brand;
  this.price = price;
  this.discount = discount;
}

Product.prototype.getPriceWithDiscount = function () {
  return (this.price * (100 - this.discount)) / 100;
};

Product.prototype.setPrice = function (newPrice) {
  this.price = newPrice;
};

const apple = new Product('Apple', 12500, 15);
const samsung = new Product('Samsung', 8500, 15);

console.log(apple.getPriceWithDiscount());
console.log(samsung);

// =============prototypal inheritance

// Object.create
const protoForObj = {
  sayHell() {
    return 'hello ';
  },
};

const obj = Object.create(protoForObj, {
  firstName: {
    value: 'Denis',
  },
});

function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

User.prototype.sayHell = function () {
  return `Hello ${this.firstName}`;
};

const user = new User('Julia', 'Kap');
//Customer
function Customer(firstName, lastName, membership) {
  User.call(this, firstName, lastName);
  this.membership = membership;
}
Customer.prototype = Object.create(User.prototype);
Customer.prototype.constructor = Customer;

Customer.prototype.getMembership = function () {
  return this.membership.toUpperCase();
};
const customer = new Customer('Taras', 'Kap', 'basic');

//ES6

class ProductES {
  constructor(brand, price, discount) {
    this.brand = brand;
    this.price = price;
    this.discount = discount;
  }

  getPriceWithDiscount() {
    return (thes.price*(100-this.discount))/100
  }

  setPrice(newPrice) {
  this.price = newPrice
}
}


const newProduct = new ProductES("apple", 200,30)