// Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:



// isParent(parent, child);

// isParent(document.body.children[0], document.querySelector('mark'));

// // true так как первый див является родительским элементом для mark



// isParent(document.querySelector('ul'), document.querySelector('mark'));

// // false так ul НЕ является родительским элементом для mark


function isParent(parent, child) {
    if(parent.nodeName && child.nodeName ){
        return parent.contains(child)
    }
else console.log('Error')
}


// Получить список всех ссылок, которые не находятся внутри списка ul.

const links = document.querySelectorAll('p>a, body>a');
console.log(links)

const filteredLinks = [...document.links].filter(a => !a.closest('ul'));
console.log(filteredLinks);
// Найти элемент, который находится перед и после списка ul.

const ul = document.querySelector('ul')
 
const prev = ul.previousElementSibling
const next = ul.nextElementSibling
 
console.log(prev, next)