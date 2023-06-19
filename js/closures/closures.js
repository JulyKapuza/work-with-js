// Создайте функцию которая бы умела делать:

// minus(10)(6); // 4

// minus(5)(6); // -1

// minus(10)(); // 10

// minus()(6); // -6

// minus()(); // 0

// Подсказка, функция minus должна возвращать другую функцию.



function minus(val) {
  let x = val;
  return function min(num) {
    return x - num;
  };
}
 
console.log(minus(10)(6));
console.log(minus(5)(6));


// function minus(num1 = 0) {
//   return function (num2 = 0) {
//     return num1 - num2;
//   }
// }

// console.log(minus(2)(1))

// Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:

// function multiplyMaker ...

const multiply = multiplyMaker(2);

multiply(2); // 4 (2 * 2)

multiply(1); // 4 (4 * 1)

multiply(3); // 12 (4 * 3)

multiply(10); // 120 (12 * 10)



function multiplyMaker(val) {
  let x = val;
  return function min(num) {
    return (x *= num);
  };
}

// function multiplyMaker(num1 = 2) {
//   return function (num2 = 1) {
//     return num1 *= num2;
//   }
// }

// const multiply = multiplyMaker(2);
// console.log(multiply(2))
// console.log(multiply(2))
// Реализовать модуль, который работает со строкой и имеет методы:

// a. установить строку

// i. если передано пустое значение, то установить пустую строку

// ii. если передано число, число привести к строке

// b. получить строку

// c. получить длину строки

// d. получить строку-перевертыш

// Пример:

// модуль.установитьСтроку(‘abcde’);

// модуль.получитьСтроку(); // ‘abcde’

// модуль.получитьДлину(); // 5



function workWithStr() {
str: " "
 
  return {
    installStr(strs) {
      if(!strs){
        return workWithStr.str = " "
      }
      if(typeof strs === 'number'){
        return workWithStr.str = strs.toString()
      }
      return workWithStr.str = strs
    },
    getStr() {
      return workWithStr.str;
    },
    lengthStr() {
      return workWithStr.str.length;
    },
    getStrReverse(){
      return workWithStr.str.split('').reverse().join('')
    }
  };
}
 
console.log(workWithStr().installStr('abc'));
 
console.log(workWithStr().getStrReverse());
// Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень. 
// Конечное значение округлить до двух знаков после точки(значение должно храниться в обычной переменной, не в this).


// модуль.установитьЗначение(10); // значение = 10
// модуль.прибавить(5); // значение += 5
// модуль.умножить(2); // значение *= 2
// модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)



// Также можно вызывать методы цепочкой:



// модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100

const calculate = (function (){
  let num = 0;
 
  function installNum(value) {
    num = Number(value);
    return this;
  }
 
  function add(value) {
    num += Number(value);
    return this;
  }
 
  function minus(value) {
    num -= Number(value);
    return this;
  }
 
  function division(value) {
    num /= Number(value);
    return this;
  }
 
  function pow(ex = 2) {
    num = Math.pow(num, ex);
    return this;
  }
 
  function getNumber() {
    return  Number(num.toFixed(2)) || 0;
  }
 
  return {
    installNum,
    add,
    minus,
    division,
    pow,
    getNumber
  }
}());
 
console.log(
  calculate
    .installNum(3)
    .pow(2)
    .getNumber()
)