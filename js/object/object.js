// Создать объект с полем product, равным ‘iphone’

const goods = {
    product: "iphone"
}

// Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’
goods.price = 1000;
goods.currency = 'dollar'

// item['price'] = 1000;
// item['currency'] = "dollar";


// Добавить поле details, которое будет содержать объект с полями model и color
goods.details = {}

goods.details.model =''
goods.details.color =''
console.log(goods)

// Чему равно а, почему?

// let a = 0 || 'string'; //  'string'
// let a = 1 && 'string'; // 'string'
// let a = null || 25; // 25
// let a = null && 25; //null
// let a = null || 0 || 35; //35
let a = null && 0 && 35;  //null



// Что отобразится в консоли. Почему?

12 + 14 + '12' //2612
3 + 2 - '1' //4
'3' + 2 - 1//31
true + 2 //3
+'10' + 1 //11
undefined + 2 //Nan
null + 5//5
true + undefined //Nan

console.log(true + undefined)
