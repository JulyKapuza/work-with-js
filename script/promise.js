//проміси озволяють відпрацьовувати відкладені в часі події

//проміс це обіцянка дати результат пізніше або вернути помилку , якщо не можливо повернути результат

// стоврення проміса
const myPromise = new Promise((resolve, reject) => {
  //
});

// отримання результату проміса за допомогою методів then catch

myPromise
  .then(value => {
    // успішне виконання проміса
  })
  .catch(error => {
    // дії у випадку відміни
  });

fetch('https://jsonplaceholder.typicode.com/todos') // функція fetch повертає проміс в стані pending
  .then(response => response.json()) // json повертає також проміс
  .then(json => console.log(json))
  .catch(error => console.log(error));

const getData = url =>
  new Promise((resolve, reject) =>
    fetch(url)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error)),
  );

getData('https://jsonplaceholder.typicode.com/todos/5')
  .then(data => console.log(data))
  .catch(error => console.log(error.meessage));
