// const User = {
//   name: 'Denis',

//   getName() {
//     return this.name
//   },
//   setName(newName) {
//     this.name = newName
//   }
// }

// function User(name) {
//   let userName = name
//   return {
//   +
//       return userName
//     },
//     setName(newName) {
//       userName = newName
//     }
//   }
// }

// const jul = new User('Jul')

function User(name) {
 const symbol = Symbol()
  return  {
    [symbol]:name,
    getName() {
      return this[symbol]
    },
    setName(name) {
      this[symbol] = name
    }
  }
}

const jul = new User('Jul')