// Найти в коде список ul и добавить класс “list”

const ul = document.querySelector('ul')
ul.classList.add('list')
// Найти в коде ссылку, находящуюся после списка ul, и добавить id=link

const links = document.querySelector('ul~a')
links.id = 'link'


// На li через один (начиная с самого первого) установить класс “item”

const arr = Array.from(ul.children)
const filterArr= arr.map((item, index)=>{
  if(index%2){
   return item
  } else item.classList.add("item")
  
})
// На все ссылки в примере установить класс “custom-link”

const alink = document.querySelectorAll('a')
const aMap =Array.from(alink).map((item)=>item.classList.add('custom-link'))
console.log(alink)