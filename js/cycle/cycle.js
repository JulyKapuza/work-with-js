// На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова

// будут в верхнем регистре. Использовать for или while.

const str = 'i am in the easycode';

let strToArr = Array(str.split(" "))
let result = []

for (let i = 0; i < strToArr.length; i++) {
    const element = strToArr[i]
    for (let value of element) {
    let newArr=value[0].toUpperCase()+value.slice(1)
      result.push(newArr)

    }
     
}
let newStr = result.join(' ')
console.log(newStr)