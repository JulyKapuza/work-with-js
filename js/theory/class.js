// ==============Classes

function Product(brand, price, discount){
// create new object
// for this objecct bind link this
// return this object
this.brand = brand
this.price = price
this.discount = discount
 this.getPriceWithDiscount= function(){
  return (this.price*(100-this.discount))/100
 }
}

const apple = new Product('Apple', 12500, 15)
const sumsung = new Product('Sumsung', 8500, 15)

console.log(apple.getPriceWithDiscount())
console.log(sumsung)