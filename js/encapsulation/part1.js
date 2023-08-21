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
//     getName() {
//       return userName
//     },
//     setName(newName) {
//       userName = newName
//     }
//   }
// }

// const jul = new User('Jul')

function User(name) {
  let userName = name
  return  Object.freeze({
    getName() {
      return userName
    },
    setName(newName) {
      userName = newName
    }
  })
}

const jul = new User('Jul')