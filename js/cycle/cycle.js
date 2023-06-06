// На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова

// будут в верхнем регистре. Использовать for или while.

const str = 'i am in the easycode';

let strToArr = Array(str.split(" "))
let result = []

for (let i = 0; i < strToArr.length; i++) {
    const element = strToArr[i]
    for (let value of element) {
    let newArr=value[0].toUpperCase()+value.slice(1)
      result.push(newArr)

    }
     
}
let newStr = result.join(' ')
console.log(newStr)


    // Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш
    // (то есть последняя буква становится первой, предпоследняя - второй итд).
    
const string = 'tseb eht ma i'
let reservedStr = ''

for (let i = string.length-1; i>=0; i--) {
    reservedStr+=string[i]
}
console.log(reservedStr) 


// Факториал числа - произведение всех натуральных чисел от 1 до n

// включительно: 3! = 3 * 2 * 1, 5! = 5 * 4 * 3 * 2 * 1.
// С помощью циклов вычислить факториал числа 10. Использовать for.

let num = 10
let element = 1

for (let i = 1; i <= 10; i++) {
    element =element * i;
    
}
console.log(element)

// На основе строки “JavaScript is a pretty good language” сделать новую строку,

// где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.

const row = 'JavaScript is a pretty good language'
let rowToArr = Array(row.split(" "))
let newRowsArr = []

for (let i = 0; i < rowToArr.length; i++) {
    const element = rowToArr[i];
     for (let value of element) {
    let newArr=value[0].toUpperCase()+value.slice(1)
      newRowsArr.push(newArr)

    }
}
const newRow = newRowsArr.join('')
console.log(newRow)

// Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. 
// Массив[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

for (const iterator of array) {
    if (iterator % 2 !== 0) {
       console.log(iterator)
   }
}