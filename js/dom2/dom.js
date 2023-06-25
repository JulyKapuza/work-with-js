const title = document.querySelector('p')

console.dir(title.innerText)


// Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает
// информацию(в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов(если детей нет - 0).

function getDom(el) {
    return {
        node: el.nodeType,
        name: el.nodeName,
        child: el.childElementCount? el.childElementCount:0
    }
}

console.log(getDom(title))

// Получить массив, который состоит из текстового содержимого ссылок внутри
// списка: getTextFromUl(ul)-- -> ["Link1", "Link2", "Link3"]

const list = document.querySelector('ul');

function getTextFromUL(ul) {
     const links = ul.querySelectorAll('li a'); // Выбираем все ссылки <a> внутри элементов <li> внутри <ul>
  const textArray = Array.from(links).map(link => link.textContent); // Преобразуем NodeList в массив и получаем текстовое содержимое каждой ссылки
  return textArray;
}

console.log(getTextFromUL(list))

// В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться). Конечный результат:

// -text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-

const [...pChildNodes] = document.querySelector('p').childNodes;
  console.log(pChildNodes)


    pChildNodes.forEach(child => {
      if (child.nodeType === 3) {
        child.textContent = '-text-'
      }
    });