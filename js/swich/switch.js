// Вопросы к этому заданию
// Записать в виде switch case следующее условие:

const a = 'none';

switch (a) {
  case 'block':
    console.log('block');
    break;
  case 'none':
    console.log('none');
    break;
  case 'inline':
    console.log('inline');
    break;
  case 'other':
    console.log('other');
    break;
}

// Если нужно выполнить одно и тоже действие для разных кейсов

switch (a) {
  case 'block':
  case 'none':
  case 'inline':
    console.log(a);
    break;
  default:
    console.log('other');
}
// Записать данное условие в виде тернарного оператора
//
// let b = 'hidden';

// if (b === 'hidden') {

//   b = 'visible';

// } else {

//   b = 'hidden';

// }

let b = 'hidden';
b === 'hidden' ? (b = 'visible') : (b = 'hidden');
//  b = b === 'hidden' ? 'visible' : 'hidden';
console.log(b);
// Записать данное условие в виде тернарного оператора

// if (c === 0) {

//   c = 1;

// } else if (c < 0) {

//   c = 'less then zero';

// } else {

//   c *= 10;

// }

let c = 10;
c === 0 ? (c = 1) : c < 0 ? (c = 'less then zero') : (c *= 10);

console.log(c);

c = c === 0 ? 1 : c < 0 ? 'less then zero' : c * 10;
