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

const firstComment = new Comment("First comment")

console.log(firstComment instanceof Comment)// true
console.log(firstComment instanceof Object)// true - наслідує методи об'єкта і класу Comment
firstComment instanceof Comment
firstComment instanceof Object

firstComment.upvote()
console.log(firstComment.votesQty)//1
firstComment.upvote()
console.log(firstComment.votesQty)//2