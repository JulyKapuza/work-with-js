// На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова

// будут в верхнем регистре. Использовать for или while.

const str = 'i am in the easycode';

let strToArr = Array(str.split(' '));
let result = [];

for (let i = 0; i < strToArr.length; i++) {
  const element = strToArr[i];
  for (let value of element) {
    let newArr = value[0].toUpperCase() + value.slice(1);
    result.push(newArr);
  }
}
let newStr = result.join(' ');
console.log(newStr);

/* ----------------------------- варіант вчителя ---------------------------- */

let res = '';

for (let i = 0; i < str.length; i++) {
  if (i === 0 || str[i - 1] === ' ') {
    res += str[i].toUpperCase();
  } else {
    res += str[i];
  }
}

console.log(res);

// Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш
// (то есть последняя буква становится первой, предпоследняя - второй итд).

const string = 'tseb eht ma i';
let reservedStr = '';

for (let i = string.length - 1; i >= 0; i--) {
  reservedStr += string[i];
}
console.log(reservedStr);

// Факториал числа - произведение всех натуральных чисел от 1 до n

// включительно: 3! = 3 * 2 * 1, 5! = 5 * 4 * 3 * 2 * 1.
// С помощью циклов вычислить факториал числа 10. Использовать for.

let num = 10;
let element = 1;

for (let i = 1; i <= 10; i++) {
  element *= i;
}
console.log(element);

// На основе строки “JavaScript is a pretty good language” сделать новую строку,

// где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.

const row = 'JavaScript is a pretty good language';
let rowToArr = Array(row.split(' '));
let newRowsArr = [];

for (let i = 0; i < rowToArr.length; i++) {
  const element = rowToArr[i];
  for (let value of element) {
    let newArr = value[0].toUpperCase() + value.slice(1);
    newRowsArr.push(newArr);
  }
}
const newRow = newRowsArr.join('');
console.log(newRow);

/* ----------------------------- варіант вчителя ---------------------------- */
let str1 = 'JavaScript is a pretty good language';
let res1 = '';

for (let i = 0; i < str1.length; i++) {
  if (i === 0 || str1[i - 1] === ' ') {
    res1 += str1[i].toUpperCase();
  } else if (str1[i] !== ' ') {
    res1 += str1[i];
  }
}

console.log(res1);

// Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль.
// Массив[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (const iterator of array) {
  if (iterator % 2 !== 0) {
    console.log(iterator);
  }
}

// Дан объект:

let list = {
  name: 'denis',

  work: 'easycode',

  age: 29,
};

// Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.

for (const key in list) {
  if (typeof list[key] === 'string') {
    list[key] = list[key].toUpperCase();
  }
}

console.log(list);
