// класи дозволяють створювати прототипи для об'єктів
//на основі прототипів створюються екземпляри

// перевірка належності

class Comment {
  constructor(text) {
    this.text = text;
    this.votesQty = 0;
  }
  upvote() {
    this.votesQty += 1;
  }
}

const firstComment = new Comment('First comment');

console.log(firstComment instanceof Comment); // true
console.log(firstComment instanceof Object); // true - наслідує методи об'єкта і класу Comment
firstComment instanceof Comment;
firstComment instanceof Object;

firstComment.upvote();
console.log(firstComment.votesQty); //1
firstComment.upvote();
console.log(firstComment.votesQty); //2

// перевірка приналежності

console.log(firstComment.hasOwnProperty('text')); //true
firstComment.hasOwnProperty('votesQty'); //true
firstComment.hasOwnProperty('upvote'); //false
firstComment.hasOwnProperty('hasOwnProperty'); //false

// статичні методи

class Comment1 {
  constructor(text) {
    this.text = text;
    this.votesQty = 0;
  }
  upvote() {
    this.votesQty += 1;
  }

  static mergeComments(first, second) {
    return `${first} ${second}`; ///мето доступний як властивість класа і не наслідується екземплярами класа
  }
}

console.log(Comment1.mergeComments('First comment', 'Second comment')); // First comment Second comment
