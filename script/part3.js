// && перше хибне  значення false = false, '', null, undefined,0

let b= 10

b && console.log('Виконано!!!')  // Виконано

let c

c && console.log('Виконано!!!') //undefined

// Параметри за замовчуванням

function multByFactor(value, multiplier = 1){
    return value *multiplier
}

console.log(multByFactor(10,5))
console.log(multByFactor(5))


const newPost = (post, addedAt = Date()) => ({
    ...post,
    addedAt,
}) // неявне повернення об'єкта

const firstPost = {
    id:1,
    author: 'Julia',
}

newPost(firstPost) // в момент визву функції, присво.ється дефолтне значення addedAt
console.dir(newPost(firstPost))


const newPost2 = (post, addedAt = Date()) => {
    return{
        ...post,
        addedAt,
    }
    
} //явне повернення об'єкта

const secondPost = {
    id:2,
    author: 'Ben',
}

newPost(secondPost) 
console.dir(newPost(secondPost))


(function(i){ console.log(i)})(25)


console.log(window.i)

const names = ['Volodya', 'Viktor', 'Vasyl'];
const extendedNames = names.join('-Viktor-').split('-');

console.log(extendedNames.lastIndexOf('Viktor'));

 console.log(parseInt("08") )