// Практическое задания на методы массивов.
// Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до n:
function getArray(num) {
    let newArr = []
    for (let i = 1; i <= num; i++) {
     newArr.push(i)
    }
    return newArr
}

// console.log(getArray(15))
getArray(10); // [1,2,3,4,5,6,7,8,9,10]


// Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива.

function doubleArray(arr) {
    let newArray = arr
 return  arr.concat( newArray)
}

// console.log(doubleArray([1,2,3]))
doubleArray([1, 2, 3]) // [1,2,3,1,2,3]

// Создать функцию, которая принимает произвольное(любое) число массивов и удаляет из каждого массива первый элемент,
//     а возвращает массив из оставшихся значений.

// changeCollection([1,2,3], [‘a’, ’b’, ‘c’])  // [ [2,3], [‘b’, ‘c’] ]



// Не забудьте про проверкку того что массив является массивом. Это можно сделать с помощью метода Array.isArray(arr);

function changeCollection(...arguments) {
    let result =[]
    
    for (const array of arguments) {
        if (Array.isArray(array)) {
            array.shift()
           result.push(array)
        }    
    }
     return result
}

console.log(changeCollection([1,2,3], ['a', 'b', 'c']) )