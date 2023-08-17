//всі ці методи мутують масив
// push вкінець масива додає елемент

const myArray = [1, 2, 3];

myArray.push(4);

console.log(myArray); //[1,2,3,4]

// pop видає елемент з кінця масиву

const removedEl = myArray.pop(); //повертає видалений елемент

console.log(myArray); //[1,2,3]
console.log(removedEl); //4

//unshift додає елемент на початок масиву

myArray.unshift(true);
console.log(myArray); //[true,1,2,3]

// shift видаляє елемeнт з початку масива

const deletedEl = myArray.shift(); //повертає видалений елемент
console.log(myArray); //[1,2,3]
console.log(deletedEl); //true
