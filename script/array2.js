// forEach

const myArray = [1,2,3,4]
const dobleArray = myArray.forEach(el => console.log(el*2)) // метод не міняє оригінальний масив, перебираня кожного елемента масива

console.log(dobleArray) // метод forEach повертає undefined
console.log(myArray) // [1,2,3,4]


// map  як і forEach перебирає всі елементи масиву, але повертає новий масив і формує його виходячи з результатів колбек функції

const newArray = myArray.map(el=>el*3)
console.log(myArray) // [1,2,3,4]
console.log(newArray) // [3,6,3,12]