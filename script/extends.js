class NumbersArray extends Array {
  // батьківський конструктор визивається автоматично
  sum() {
    return this.reduce((el, acc) => (acc += el), 0);
  }
}

const myArray = new NumbersArray(2, 5, 7);

console.log(myArray); // [2, 5, 7]
console.log(myArray.sum()); //14