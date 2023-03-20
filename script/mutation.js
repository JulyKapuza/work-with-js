// як уникнути мутації

// 1.Object.assign()

person = {
  name: 'Ben',
  age: 25,
  married: true,
};

person2 = Object.assign({}, person);

person2.age = 26;

console.log(person2.age); //26
console.log(person.age); //25

// 2. spread

person3 = {
  name: 'Ben',
  age: 25,
  married: true,
};

person4 = { ...person3 };
person4.name = 'Anna';

console.log(person4.name); //Anna
console.log(person3.name); //Ben

// 3. spread

person5 = {
  name: 'Ben',
  age: 25,
  married: true,
};

person6 = JSON.parse(JSON.stringify(person5));

person6.married = false;

console.log(person6.married); //false 
console.log(person5.married); //true

