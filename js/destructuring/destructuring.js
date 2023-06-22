// Используя rest оператор и деструктуризацию, создать функцию, которая принимает любое количество аргументов и возвращает объект, содержащий первый аргумент и массив из остатка:



// func(‘a’, ‘b’, ‘c’, ‘d’) →

// { first: ‘a’, other: [‘b’, ‘c’, ‘d’] }

function getSomething(arg){
    const [first, ...other] = arg
 
    console.log(other)
    return{
        first: first,
        other: other
    }
}
 
console.log(getSomething(['a', 'b', 'c', 'd']))

const getFirstAndOther = (first, ...other) => ({ first, other });

console.log(getFirstAndOther(2, 3, 5, 6))

// Организовать функцию getInfo, которая принимает объект вида
// { name: ..., info: { employees: [...], partners: [ … ] } }
// и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:



// const organisation = {

// name: 'Google',

// info: { employees: [‘Vlad’, ‘Olga’], partners: ['Microsoft', 'Facebook', 'Xing'] }

// };



// getInfo(organisation); →

// Name: Google

// Partners: Microsoft Facebook

const organisation = {
name: 'Google',
info: { employees: ["Vlad", "Olga"], partners: ['Microsoft', 'Facebook', 'Xing'] }
 
};
 
function getInfo(obj){
const {name , info:{employees, partners}}=organisation
let names = name? name: "Unknown"
   return console.log(`Name: ${names} Partners: ${partners.slice(0,2)}`)
 
}
 
getInfo(organisation) 

// Дан объект:

let user = {

    "guid": "dd969d30-841d-436e-9550-3b0c649e4d34",

    "isActive": false,

    "balance": "$2,474.46",

    "age": 30,

    "eyeColor": "blue",

    "name": "Tameka Maxwell",

    "gender": "female",

    "company": "ENOMEN",

    "email": "tamekamaxwell@enomen.com",

    "phone": "+1 (902) 557-3898",

    "tags": [

      "aliquip",

      "anim",

      "exercitation",

      "non",

    ],

    "friends": [

      {

        "id": 0,

        "name": "Barber Hicks"

      },

      {

        "id": 1,

        "name": "Santana Cruz"

      },

      {

        "id": 2,

        "name": "Leola Cabrera"

      }

    ],

  };



// Используя деструктуризацию получить значения из следующих полей

// 1. name,  balance, email

// 2. из массива tags получить первый и последний элемент

// 3. из массива friends получить значение поле name из первого элемента массива

// Если какое то из полей не имеет значения то подставить значение по умолчанию.

// const {name,balance,email  }= user

 const {
      name = '',
      email = '',
      balance = '',
      tags: [firstTag = '', , , lastTag = ''] = [],
      friends: [{ name: friendName = '' }] = []
    } = user;


console.log(name,balance,email)
 
let {tags}= user
console.log(tags[0], tags[tags.length-1])
 
const {friends}=user
console.log(friends[0].name)


    console.log(name, email, balance, firstTag, lastTag, friendName)
// С помощью оператора rest, из объекта user (из предыдущей задачи) скопировать в новый массив значение следующих полей tags и friends.

const newArr = [...tags]
console.log(newArr)
 
const newArray = [...friends]

const newArr1 = [...user.tags, ...user.friends];
 
console.log(newArray1) 