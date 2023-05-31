// Дана строка: let string = "some test string";

let string = "some test string"

// Получить первую и последнюю буквы строки
console.log(string[0])
console.log(string[string.length-1])
// Сделать первую и последнюю буквы в верхнем регистре
let newStr = string[0].toUpperCase()+string.slice(1, string.length-1 )+string[ string.length-1].toUpperCase()
console.log(newStr)
const firstLastUpper = `${string[0].toUpperCase()}${string.slice(1,-1)}${string[string.length - 1].toUpperCase()}`;
console.log(firstLastUpper);
// Найти положение слова ‘string’ в строке
console.log(string.indexOf('string'))

// Найти положение второго пробела (“вручную” ничего не считать)
console.log(string.lastIndexOf(' '))
const firstSpace = string.indexOf(' ');
const secondSpace = string.indexOf(' ', firstSpace + 1);
console.log(secondSpace);
// Получить строку с 5-го символа длиной 4 буквы
console.log(string.slice(5, 9))

const substr = string.substr(5, 4);
console.log(substr);

// Получить строку с 5-го по 9-й символы
console.log(string.slice(5, 10))
// Получить новую строку из исходной путем удаления последних 6-и символов (то есть исходная строка без последних 6и символов)

console.log(string.slice(0, -6))

// Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”
a = 20
b = 16
console.log(`${a}${b}`)

