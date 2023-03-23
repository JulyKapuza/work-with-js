// if

let value = 10;

if (value > 5) {
  value += 20;
}

console.log(value); //30

const person = {
  age: 20,
};

if (!person.name) {
  console.log("Ім'я не вказано");
}

//if...else

let val = 10;

if (val < 5) {
  val += 20;
} else {
  val -= 20;
}

console.log(val); //-10

const sumPositiiiveNumbers = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'One of argument is not a number';
  }

  if (a <= 0 || b <= 0) {
    return 'Numbers are not positive';
  }

  return a + b;
};
console.log(sumPositiiiveNumbers('number', 15)); // One of argument is not a number
console.log(sumPositiiiveNumbers(-10, 15)); // Numbers are not positive
console.log(sumPositiiiveNumbers(10, 15)); //25

// switch

const month = 2;

switch (month) {
  case 12:
    console.log('December');
    break;
  case 1:
    console.log('January');
    break;
  case 2:
    console.log('February');
    break;
  default:
    console.log('its not winter month');
}

// тернарний оператор

const number = 11;

number ? console.log('True') : console.log('False');
