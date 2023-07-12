// ==============Classes//prototype

function Product(brand, price, discount){
// create new object
// for this objecct bind link this
// return this object
this.brand = brand
this.price = price
this.discount = discount
}

Product.prototype.getPriceWithDiscount =  function(){
  return (this.price*(100-this.discount))/100
 }

 Product.prototype.setPrice =  function(newPrice){
 this.price = newPrice
 }

const apple = new Product('Apple', 12500, 15)    
const samsung = new Product('Samsung', 8500, 15)

console.log(apple.getPriceWithDiscount())
console.log(samsung)