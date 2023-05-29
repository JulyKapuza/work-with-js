// деструктуризція об'єктів
const userProfile = {
  name: 'Mark',
  commentsQty: 23,
  hasSingnedAgreement: false,
};

const { name, commentsQty, hasSingnedAgreement } = userProfile;

// деструктуризція масивів = важливо враховувати порядок елементів в масиві - головна відмінність від деструктуризації об'єктів

const fruits = ['apple', 'banana'];

const [fruitOne, fruitTwo] = fruits;

console.log(fruitOne);
console.log(fruitTwo);

// деструктуризація в функціях

const userInfo = ({ name, commentsQty }) => {
  if (!commentsQty) {
    return `User ${name} has no comments`;
  }
  return `User ${name} has ${commentsQty} comments`;
};

console.log(userInfo(userProfile)); // User Mark has 23 comments
