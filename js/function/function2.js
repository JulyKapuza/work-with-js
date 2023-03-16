'use strict';

/* -------------------------------------------------------------------------- */
/*                            function declaration                            */
/* -------------------------------------------------------------------------- */

function calcAge1(birthYear) {
  return 2023 - birthYear;
}

const age1 = calcAge1(1993);

/* -------------------------------------------------------------------------- */
/*                             function expression                            */
/* -------------------------------------------------------------------------- */

const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};
const age2 = calcAge2(1993);

/* -------------------------------------------------------------------------- */
/*                               arrow function                               */
/* -------------------------------------------------------------------------- */

const calcAge3 = birthYear => 2023 - birthYear;

const age3 = calcAge3(1993);
console.log(age1, age2, age3);

const yearsUntilRetirement =( birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement}`
}

console.log(yearsUntilRetirement(1993, "Julia"));
console.log(yearsUntilRetirement(1976, "Ben"));