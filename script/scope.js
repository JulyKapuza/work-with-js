let a;
let b;

function myFunc() {
  let b;
  a = true;
  b = 10;
  console.log(b); // 10
}

myFunc();

console.log(a); // true
console.log(b); //undefined

const f = 5;

function myFn() {
  function innerFn() {
    console.log(f);
  }
  innerFn(); //5 
}

myFn();
