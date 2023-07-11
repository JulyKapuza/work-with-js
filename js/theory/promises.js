// =========== Promises

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(Math.random()), 1000);
// });

const promise = new Promise((resolve, reject) => {
  setTimeout(() => reject('error'), 1000);
});

promise
  .then(x => {
    console.log(x);
    return x;
  })
  .then(y => console.log(y))
  .catch(err=>console.log(err))

console.log(promise);
promise.then(z=>console.log(z))