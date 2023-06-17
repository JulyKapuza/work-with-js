// Создать объект, который описывает ширину и высоту

// прямоугольника, а также может посчитать площадь фигуры:

// const rectangle = {width:..., height:..., getSquare:...};

const rectangle = {
    width:10,
    height:12,
    getSquare: function(){
        return this.height*this.width
    }
};


// Создать объект, у которого будет цена товара и его скидка, а также

// два метода: для получения цены и для расчета цены с учетом скидки:

const price = {
price: 10,
discount: '15%',
getPrice(){
    return this.price
},
getPriceWithDiscount(){
    return this.price - (parseInt(this.discount) / 10)
}
};
console.log(price.getPriceWithDiscount())
price.getPrice(); // 10
console.log(price.getPrice())
price.getPriceWithDiscount(); // 8.5



// Создать объект, у которого будет поле высота и метод “увеличить

// высоту на один”. Метод должен возвращать новую высоту:

const object={
    height:10,
    increaseForOne(){
        this.height +1
        return  this.height +1
    }
}

object.height = 10;

object.increaseForOne(); // придумать свое название для метода

object.height; // 11;

console.log(object.increaseForOne())


// Создать объект “вычислитель”, у которого есть числовое свойство

// “значение” и методы “удвоить”, “прибавить один”, “отнять один”.

// Методы можно вызывать через точку, образуя цепочку методов:

// const numerator = {

// value: 1,

// double: function () {...},

// plusOne: function () {...},

// minusOne: function () {...},

// }

const numerator = {

value: 1,

double: function () {
 this.value = this.value*2
    return this
},

plusOne: function () {
    this.value = this.value+1
    return this
},

minusOne: function () {
    this.value = this.value-1
    return this
},

}

numerator.double().plusOne().plusOne().minusOne();
console.log(numerator.value)
numerator.value // 3


// Создать объект с розничной ценой и количеством продуктов.

// Этот объект должен содержать метод для получения общей стоимости всех товаров (цена * количество продуктов)

const goods ={
    price:15,
    item: 10,
    getPriceGoods(){
     return this.item*this.price
    }
}

console.log(goods.getPriceGoods())


// Создать объект из предыдущей задачи.Создать второй объект, который описывает количество деталей и цену за одну деталь.
// Для второго объекта нужно узнать общую стоимость всех деталей, но нельзя создавать новые функции и методы.

// Для этого “позаимствуйте” метод из предыдущего объекта.

const contain ={
    item: 2,
    price: 6,
}

console.log(goods.getPriceGoods.call(contain))

// Даны объект и функция:

// let sizes = {width: 5, height: 10},

// getSquare = function () {return this.width * this.height};

// Не изменяя функцию или объект, получить результат функции getSquare для объекта sizes

// Не изменяя функцию или объект, получить результат функции getSquare для объекта sizes

console.log(getSquare.call(sizes))


let element = {
    height: 25,
    getHeight: function () {return this.height;}
};



let getElementHeight = element.getHeight.bind(element);
getElementHeight(); // undefined



    // Измените функцию getElementHeight таким образом, чтобы можно было вызвать getElementHeight() и получить 25.

    console.log(getElementHeight())