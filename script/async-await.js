//async/await спрощений синтаксис для полегшення рооти з промісами

const asyncFn = async () => {
  return 'Success!';
}; //  повертає проміс

asyncFn().then(value => console.log(value)); //Success!

const asyncFn1 = async () => {
  throw new Error('There was an error');
}; //  проміс буде відхилено

asyncFn1(); //  Uncaught (in promise) Error: There was an error

asyncFn1()
  .then(value => console.log(value))
  .catch(error => console.log(error.message)); //There was an error

const asyncFn2 = async () => {
  await Promise; // всередині асинхронних функцій можна очікувати результат промісів
};

asyncFn2();

const timerPromise = () =>
  new Promise((resolve, reject) => setTimeout(() => resolve(), 2000));

const asyncFn4 = async () => {
  console.log('Timer start');
  const startTime = performance.now();
  await timerPromise(); // на цьому кроці очікуємо проміс
  const endTime = performance.now();
  console.log('Timer ended', endTime - startTime); // Timer ended 2007.1999999284744
};
asyncFn4();

const getData = async url => {
  const res = await fetch(url);
  const json = await res.json();
  return json;
};
  

const url = 'https://jsonplaceholder.typicode.com/todos/5'



getData('https://jsonplaceholder.typicode.com/todos/5')
  .then(data => console.log(data))
  .catch(error => console.log(error.meessage));
