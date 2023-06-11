// Практическое задания на методы массивов.
// Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до n:
function getArray(num) {
    let newArr = []
    for (let i = 1; i <= num; i++) {
     newArr.push(i)
    }
    return newArr
}

console.log(getArray(15))
getArray(10); // [1,2,3,4,5,6,7,8,9,10]