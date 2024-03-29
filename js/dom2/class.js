// Найти в коде список ul и добавить класс “list”

const ul = document.querySelector('ul')
ul.classList.add('list')
// Найти в коде ссылку, находящуюся после списка ul, и добавить id=link

const links = document.querySelector('ul~a')
links.id = 'link'

// 2.2
    const list = document.querySelector('ul');
    // Будущая ссылка
    let link;
    // Следующий элемент после списка, стартовая точка.
    let nextElement = list.nextElementSibling;
    // Проверяем пока не найдена ссылка или больше не осталось следующих элементов мы выполняем данный цикл.
    while(!link || !nextElement) {
      // Если больше нет следующего элемента мы останавливаем цикл
      if (!nextElement) break;
      // Если у следующего элемента тег ссылка то мы записываем ее в переменную
      if (nextElement.tagName === 'A') {
        link = nextElement;
      }
      // записываем следующий элемент
      nextElement = nextElement.nextElementSibling;
    }

    console.log(link);
// На li через один (начиная с самого первого) установить класс “item”

const arr = Array.from(ul.children)
const filterArr= arr.map((item, index)=>{
  if(index%2){
   return item
  } else item.classList.add("item")
  
})

 // Также два варианта решения.
    // 3.1
    const [...liN2] = document.querySelectorAll('li:nth-child(odd)');
    liN2.forEach(li => li.classList.add('item'));
    // 3.2
    const [...allLi] = document.querySelectorAll('li');
    allLi.forEach((li, index) => {
      if (!(index % 2)) {
        li.classList.add('item')
      }
    });
// На все ссылки в примере установить класс “custom-link”

const alink = document.querySelectorAll('a')
const aMap =Array.from(alink).map((item)=>item.classList.add('custom-link'))
console.log(alink)