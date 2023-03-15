/* -------------------------------------------------------------------------- */
/*                              Тернарий оператор                             */
/* -------------------------------------------------------------------------- */

const age = 23;

const drink = age >= 18 ? 'wine 🍷' : 'milk 🥛';

console.log(drink);

console.log(`I like to drink ${drink} `);

/* -------------------------------------------------------------------------- */
/*                              coding challenge                              */
/* -------------------------------------------------------------------------- */
// 50-300 tip 15%
// more 300 or less 50 = 20%
// test bill = 275, 40, 430

const bill = 430;
const tip = bill<=300 && bill >=50 ? bill*0.15: bill*0.2 

console.log(`the bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`)

// 2)
// const bill = 275;
// const result =
//   bill > 300 || bill < 50
//     ? console.log(Number(bill + bill * 0.2))
//     : console.log(bill + bill * 0.15);



