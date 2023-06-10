// Практическое задание по функциям.
// Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение

// Пример вызова:

// multiply(1,2,3) => результат 6 (1*2*3);

// Если нет ни одного аргумента, вернуть ноль: multiply() // 0

function multiply() {
  if (!arguments.length) {
    return 0;
  }
  let res = 1;
  for (let i = 0; i < arguments.length; i++) {
    res *= arguments[i];
  }
  return res;
}

multiply(2, 4, 5, 6);
multiply();

// Практическое задание по функциям.
// Создать функцию, которая принимает строку и возвращает строку-перевертыш:

// Примеры вызовов и результаты

// reverseString('test') // "tset"
// reverseString('') // ''
// reverseString(null) // llun
// reverseString(undefined)// denifednu
// reverseString()// denifednu

function reverseString(str) {
  let string = String(str);
  let result = '';
  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }
  return result;
}

console.log(reverseString('test'));
console.log(reverseString());

// reverseString(null) // llun
// reverseString(undefined)// denifednu
// reverseString()// denifednu

// Создать функцию, которая в качестве аргумента может принять строку, числа, null или undefined
// и возвращает строку, где каждый символ разделен пробелом и заменен на юникод - значение символа:

// getCodeStringFromText("hello") // “104 101 108 108 111”

// подсказка: в решении задачи вам помогут методы charCodeAt и trim

function getCodeStringFromText(str) {
  let newStr = String(str);
  let text = '';
  for (item of newStr) {
    text += item.charCodeAt()+ ' ';
  }
  return text.trim();
}

console.log(getCodeStringFromText('hello'));

// Создать функцию угадай число.

// Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0).

// Если число не соответствует условию то верните ошибку return new Error("Please provide number in range 0 - 10").

// Если переданно не число то верните ошибку return new Error("Please provide a valid number");

// Далле функция генерирует рандомное число от 1-10 и сравнивает с заданным числом если они совпали то возвращает строку “You win!”

// если нет то строку “You are lose, your number is 8, the random number is 5”.
// Числа в строке указаны как пример вы подставляете реальные числа.

// Если переданно число в виде строки оно должно быть преобразованно к числу.

function guessTheNumber(num) {
  if (num < 0 || num > 10) {
    return new Error('Please provide number in range 0 - 10');
  }
  if (typeof num !== 'number') {
    return new Error('Please provide a valid number');
  }

  let random = Math.round(Math.random() * (10 - 1) + 1);
  if (num === random) {
    return 'You win!';
  } else {
    return `You are lose, your number is ${num}, the random number is ${random}`;
  }
}

console.log(guessTheNumber(2));
