const title = document.querySelector('p')

console.dir(title.innerText)

const p = document.querySelector('p');
console.log(p.textContent);


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
// 2 variant
 function getNodeInfo(node) {
      if (!(node instanceof Element)) return;

      return {
        nodeType: node.nodeType,
        tagName: node.tagName,
        childNodes: node.childNodes.length
      }
    }

    const info = getNodeInfo(p);
    console.log(info);

// Получить массив, который состоит из текстового содержимого ссылок внутри
// списка: getTextFromUl(ul)-- -> ["Link1", "Link2", "Link3"]

// const list = document.querySelector('ul');

// function getTextFromUL(ul) {
//      const links = ul.querySelectorAll('li a'); // Выбираем все ссылки <a> внутри элементов <li> внутри <ul>
//   const textArray = Array.from(links).map(link => link.textContent); // Преобразуем NodeList в массив и получаем текстовое содержимое каждой ссылки
//   return textArray;
// }

// console.log(getTextFromUL(list))

const list = document.querySelector('ul');

    function getTextFromUl(ul) {
      if (!(ul instanceof HTMLElement)) return;
      const [...links] = ul.querySelectorAll('a') || [];
      return links.map(a => a.textContent);
    }

    console.log(getTextFromUl(list));

// В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться). Конечный результат:

// -text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-

const [...pChildNodes] = document.querySelector('p').childNodes;
  console.log(pChildNodes)


    pChildNodes.forEach(child => {
      if (child.nodeType === 3) {
        child.textContent = '-text-'
      }
    });