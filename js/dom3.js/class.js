// По нажатию на кнопку "btn-msg" должен появиться алерт с тем текстом который находится в атрибуте data-text у кнопки.

const btn = document.querySelector("#btn-msg");
const attr = btn.getAttribute("data-text");
console.log(attr);
 
btn.addEventListener("click", (e) => {
  alert(attr);
});
 
// При наведении указателя мыши на "btn-msg", кнопка становится красной; когда указатель мыши покидает кнопку, она становится прежнего цвета. Цвет менять можно через добавление класса.

btn.addEventListener("mouseover", (e) => {
  btn.style.backgroundColor = "red";
});
 
btn.addEventListener("mouseout", (e) => {
  btn.style.backgroundColor = "";
});
// При нажатии на любой узел документа показать в элементе с id=tag имя тега нажатого элемента.

const tag = document.querySelector("#tag");
const body = document.querySelector("body");
console.log(tag);
 
body.addEventListener("click", (e) => {
  console.dir(e.target.tagName);
  
  tag.insertAdjacentText("beforeend", e.target.tagName);
});
// При нажатии на кнопку btn-generate добавлять в список ul элемент списка Li с текстом Item + порядковый номер Li по списку, т.е Item 3, Item 4 и т.д

const button = document.querySelector("#btn-generate");
const list = document.querySelector("ul");
 
button.addEventListener("click", (e) => {
  const lengthArr = list.children.length;
  let item = document.createElement("li");
  item.textContent = `item  ${lengthArr + 1}`;
  list.appendChild(item);
});