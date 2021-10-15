'use strict'

/* 3. Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку 15%,
можете использовать метод forEach */

const products = [{
        id: 3,
        price: 200
    },
    {
        id: 4,
        price: 900
    },
    {
        id: 1,
        price: 1000
    }
];

console.log('Задача №3');
products.forEach(p => console.log(p));
products.forEach(function(p) { p.price *= (1 - 15 / 100) });
products.forEach(p => console.log(p));
console.log('_______________________________');
