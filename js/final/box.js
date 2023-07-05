// 1. При наведении на любой из блоков с классом .box все его дочерние элементы должны поменять свой фон на один из списка. ВАЖНО, только дочерние относительно блока на который навели мышь.

// Вот массив (список) рандомных цветов

// ['red', 'blue', 'olive', 'orange', 'pink', 'yellow', 'green', 'gray', 'aqua', 'brown'];



// 2. Возращаете фон обратно когда пользователь уводит мышку с блока.

// 3. Добавление фона из первой части задания сделать с задержкой в 200мс. Т.е каждый последующий блок должен изменить свой фон за 200мс позже предыдущего. Например если первый блок поменял через 200мс то следующий должен поменять через 400 и т.д.

// const colors = ['blueviolet', 'navy', 'cornflowerblue', 'blue', 'darkslateblue', 'deepskyblue', '	dodgerblue', 'skyblue', 'aqua', '	lightskyblue','deeppink']

// let randomColor= ()=>colors[Math.floor(Math.random() * colors.length)]


// const container = document.querySelector('.container')
// const box = document.querySelector('.box')


// box.addEventListener('mouseenter',callback, {capture:true})
// container.addEventListener('mouseleave', callback, {capture:true})

// box.removeEventListener('mouseover ',callback, {capture:false})
// container.removeEventListener('mouseover ', callback, {capture:false})


// const color = randomColor()
// function callback(e){

//  let target =e.target
//  let targetCurrent = e.targetCurrent

//  setTimeout(function(){
//   Array.from(target.children).forEach((item)=>{
//     item.style.backgroundColor = randomColor()
//   })
//  }, 200)

//  setTimeout(function(){
//   Array.from(target.children).forEach((item)=>{
//     item.style.backgroundColor = ''
//   }, 400)
// })
// }




// function setRandomColor(el) {
//   const colors = ['red', 'blue', 'olive', 'orange', 'pink', 'yellow', 'green', 'gray', 'aqua', 'brown'];
//   // Выбираем произвольный цвет из массива
//   const randomColor = colors[Math.floor(Math.random() * colors.length)];
//   el.style.background = randomColor;
// }

// function resetColor(el) {
//   el.style.background = '';
// }

// function onBoxHover(e) {
//   // Создаем массив элементов которые будут менять фон.
//   let elements = [e.currentTarget];
//   let currentEl = e.currentTarget;

//   console.log('elements', elements)
//   console.log('currentEl', currentEl)
//   // Проходимся циклом по всем дочерним элементам до самого последнего
//   while (currentEl) {
//     elements = [...elements, ...currentEl.children];
//     currentEl = currentEl.children[currentEl.children.length - 1];
//   }
//   // Перебираем сформированный массив и устанавливаем на каждый элемент цвет в таймауте
//   elements.forEach((el, index) => setTimeout(setRandomColor, 200 * (index + 1), el));
// }

// function onMouseLeave(e) {
//   resetColor(e.currentTarget);
// }

// document.querySelectorAll('.box').forEach(box => box.addEventListener('mouseenter', onBoxHover));
// document.querySelectorAll('.box').forEach(box => box.addEventListener('mouseleave', onMouseLeave));



// const colors = ['red', 'blue', 'olive', 'orange', 'pink', 'yellow', 'green', 'gray', 'aqua', 'brown'];
// const boxes = document.querySelectorAll('.box');

// function changeBackground(element, delay) {
//   setTimeout(() => {
//     const randomColor = colors[Math.floor(Math.random() * colors.length)];
//     element.style.backgroundColor = randomColor;
//   }, delay);
// }

// boxes.forEach((box, index) => {
//   box.addEventListener('mouseenter', () => {
//     for (let i = index; i < boxes.length; i++) {
//       const delay = 200 * (i - index);
//       changeBackground(boxes[i], delay);
//     }
//   });

//   box.addEventListener('mouseleave', () => {
//     box.style.backgroundColor = '#fff';
//   });
// });

const colors = ['blueviolet', 'navy', 'cornflowerblue', 'blue', 'fuchsia', 'deepskyblue', '	dodgerblue', 'skyblue', 'aqua', '	lightskyblue','deeppink', 'greenyellow', 'lime', 'springgreen'  ]

const boxes = document.querySelectorAll('.box')
const container = document.querySelector('.container')

function getRandomColor(el, delay){
  setTimeout(()=>{
    const randomColor = colors[Math.floor(Math.random()*colors.length)]
    el.style.backgroundColor = randomColor
  }, delay)
}

boxes.forEach((box, index)=>{
  box.addEventListener('mouseenter', ()=>{
    for (let i = index; i < boxes.length; i++) {
      const delay = 200 *(i-index)
      getRandomColor(boxes[i], delay)
    }
   
  })

  box.addEventListener('mouseleave', ()=>{
    box.style.backgroundColor = ''
  })
})


// 
// function setRandomColor(el) {
//       const colors = ['red', 'blue', 'olive', 'orange', 'pink', 'yellow', 'green', 'gray', 'aqua', 'brown'];
//       // Выбираем произвольный цвет из массива
//       const randomColor = colors[Math.floor(Math.random() * colors.length)];
//       el.style.background = randomColor;
//     }

//     function resetColor(el) {
//       el.style.background = '';
//     }

//     function onBoxHover(e) {
//       // Создаем массив элементов которые будут менять фон.
//       let elements = [e.currentTarget];
//       let currentEl = e.currentTarget;
//       // Проходимся циклом по всем дочерним элементам до самого последнего
//       while (currentEl) {
//         elements = [...elements, ...currentEl.children];
//         currentEl = currentEl.children[currentEl.children.length - 1];
//       }
//       // Перебираем сформированный массив и устанавливаем на каждый элемент цвет в таймауте
//       elements.forEach((el, index) => setTimeout(setRandomColor, 200 * (index + 1), el));
//     }

//     function onMouseLeave(e) {
//       resetColor(e.currentTarget);
//     }

//     document.querySelectorAll('.box').forEach(box => box.addEventListener('mouseenter', onBoxHover));
//     document.querySelectorAll('.box').forEach(box => box.addEventListener('mouseleave', onMouseLeave));
