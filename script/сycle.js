// for

for (let i = 0; i < 5; i += 1) {
  console.log(i);
}

const myArray = ['first', 'second', 'third'];

for (let i = 0; i < myArray.length; i += 1) {
  console.log(i);
}
// рекомендовнаний підхід

myArray.forEach((el, index) => {
  console.log(el, index);
});

// while

let i = 0;
while (i < 5) {
  console.log(i);
  i += 1; // якщо немає, цикл виконується безкінечно
}

// while(i<5){
//     console.log(i)
// } //безкінечний цикл

// do..while виконується хоча б один раз

let j = 10;

do {
  console.log(j);
  j += 1;
} while (j < 5); // виконається один раз, в консолі буде 10

//for..in

const myObj = {
  x: 10,
  y: true,
  z: 'abc',
};

for (const key in myObj) {
  console.log(key, myObj[key]);
}

// x 10
// y true
// z abc

Object.keys(myObj).forEach(key => {
  console.log(key, myObj[key]);
});
// console.log(Object.keys(myObj))// ['x', 'y', 'z']

// x 10
// y true
// z abc

Object.values(myObj).forEach(value => {
  console.log(value);
});
// console.log(Object.values(myObj))//  [10, true, 'abc']

// 10
//  true
//  abc

//for... in ARRAY = не рекомендується так робити, краще forEach

const arr = [true, 12, 'date'];

for (const key in arr) {
  console.log(arr[key]);
}
// true
//  12
//  date

// for...of = не для об'єктів

// for(element of iterable){
//     дія з визначеним елементом
// }

const myString = 'hello';

for (const letter of myString) {
  console.log(letter);
}

// h
// e
// 2l
//  o
