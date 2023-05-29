// 1. Получить число pi из Math и округлить его до 2-х знаков после точки

console.log(Math.PI.toFixed(2))

//2 Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51

const max = Math.max(15, 11, 16, 12, 51, 12, 13, 51)
const min = Math.min(15, 11, 16, 12, 51, 12, 13, 51)
console.log(max, min)

// 3. Работа с Math.random:
// a. Получить случайное число и округлить его до двух цифр после запятой
// b. Получить случайное целое число от 0 до X. X - любое произвольное число.

console.log(Math.random().toFixed(2))

function getRandomInt(X) {
   return Math.floor(Math.random() * X )
}

console.log(getRandomInt(10))

// 4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?
let value = 0.6 + 0.7
console.log((value).toFixed(1)) 
// 5. Получить число из строки ‘100$’

const num = parseInt('100$')
console.log(num) 